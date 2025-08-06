import { ISP } from '../../../infra/isp/ISP';
import { Logger } from '../../../infra/logger/Logger';
import { AuthResponse, IISP } from '../../protocols/isp/IISP';
import { IGetUserRepository } from '../../../domain/repositories/IGetUserRepository';
import { GetUserRepository } from '../../../infra/database/repositories/GetUserRepository';

export type SignInUserUseCaseInput = {
  email: string;
  password: string;
};

export type SignInUserUseCaseOutput = AuthResponse & {
  user_id: string;
};

export interface ISignInUserUseCase {
  execute(input: SignInUserUseCaseInput): Promise<SignInUserUseCaseOutput>;
}

export class SignInUserUseCase implements ISignInUserUseCase {
  constructor(
    private readonly logger: Logger,
    private readonly identityServiceProvider: IISP = new ISP(),
    private getUserRepository: IGetUserRepository = new GetUserRepository(),
  ) {
    this.logger = this.logger.getChild('SignInUserUseCase');
  }

  public async execute(
    input: SignInUserUseCaseInput,
  ): Promise<SignInUserUseCaseOutput> {
    this.logger.debug('execute input', JSON.stringify(input));
    const email = input.email.toLowerCase();

    const user = await this.getUserRepository.execute({ user_id: email });
    this.logger.debug('get user repository response', user);

    if (!user) {
      throw new Error('USER_NOT_FOUND');
    }

    const response = await this.identityServiceProvider.initiateAuth({
      email,
      password: input.password,
    });
    this.logger.debug('identityServiceProvider initiateAuth', response);

    if (!response) {
      throw new Error('USER_NOT_FOUND');
    }

    this.logger.debug('execute output', response);
    return {
      ...response,
      user_id: user.user_id,
    };
  }
}
