import { Language, User, UserRole } from '../../../domain/entities/User';

import { IISP } from '../../protocols/isp/IISP';
import { ILogger } from '../../protocols/logger/ILogger';
import { IGuidGenerator } from '../../protocols/guid/IGuidGenerator';
import {
  CreateUserRepositoryInput,
  ICreateUserRepository,
} from '../../../domain/repositories/ICreateUserRepository';
import { IAppConfig } from '../../protocols/config/IAppConfig';
import { ISP } from '../../../infra/isp/ISP';
import { UUIDGuidGenerator } from '../../../infra/guidGenerator/UUIDGuidGenerator';
import { IGetUserRepository } from '../../../domain/repositories/IGetUserRepository';
import { GetUserRepository } from '../../../infra/database/repositories/GetUserRepository';
import { CreateUserRepository } from '../../../infra/database/repositories/CreateUserRepository';

export type SignUpUseCaseInput = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  languages: Language[];
  bio?: string;
};

export type SignUpUseCaseOutput = User;

export interface ISignUpUseCase {
  execute(input: SignUpUseCaseInput): Promise<SignUpUseCaseOutput>;
}

export class SignUpUseCase implements ISignUpUseCase {
  constructor(
    private logger: ILogger,
    private appConfig: IAppConfig,
    private identityServiceProvider: IISP = new ISP(),
    private guidGenerator: IGuidGenerator = new UUIDGuidGenerator(),
    private getUserRepository: IGetUserRepository = new GetUserRepository(),
    private createRepository: ICreateUserRepository = new CreateUserRepository(),
  ) {
    this.logger = this.logger.getChild('SignUpUseCase');
  }

  async execute(input: SignUpUseCaseInput): Promise<SignUpUseCaseOutput> {
    this.logger.debug('execute input', JSON.stringify(input));
    const email = input.email.toLowerCase();

    try {
      const userFound = await this.getUserRepository.execute({
        user_id: email,
      });
      this.logger.debug('users repository response', userFound);

      if (userFound) {
        throw new Error('USER_ALREADY_EXISTS');
      }

      const approved_at = !(input.role === 'Admin')
        ? new Date()
        : undefined;

      const createUserRepositoryInput: CreateUserRepositoryInput = {
        user_id: this.guidGenerator.uuidV4(),
        auth_token: this.guidGenerator.uuidV4(),
        email: input.email,
        email_verified: false,
        name: input.name,
        role: input.role,
        bio: input.bio,
        languages: input.languages,
        approved_at,
        created_at: new Date(),
        photo_url: undefined,
        deleted_at: undefined,
      };

      const user = await this.createRepository.execute(
        createUserRepositoryInput,
      );
      this.logger.debug('create user repository response', user);

      const ispUserCreated = await this.identityServiceProvider.createUser({
        email,
        user_id: createUserRepositoryInput.user_id,
      });
      this.logger.debug('identityServiceProvider createUser', ispUserCreated);

      await this.identityServiceProvider.setUserPassword({
        email,
        password: input.password,
      });
      this.logger.debug('identityServiceProvider confirmUser');

      this.logger.debug('execute output', user);
      return user;
    } catch (error) {
      this.logger.error('error', error);
      throw error;
    }
  }
}
