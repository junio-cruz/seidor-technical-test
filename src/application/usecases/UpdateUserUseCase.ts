import { Logger } from '../../infra/logger/Logger';
import { Language, User, UserRole } from '../../domain/entities/User';
import { IUpdateUserRepository } from '../../domain/repositories/IUpdateUserRepository';
import { UpdateUserRepository } from '../../infra/database/repositories/UpdateUserRepository';

export type UpdateUserUseCaseInput = {
  user_id: string;
  to_update: {
    name?: string;
    bio?: string;
    role?: UserRole;
    languages?: Language[];
  };
};

export type UpdateUserUseCaseOutput = User | null;

export interface IUpdateUserUseCase {
  execute(input: UpdateUserUseCaseInput): Promise<UpdateUserUseCaseOutput>;
}

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(
    private readonly logger: Logger,
    private updateUserRepository: IUpdateUserRepository = new UpdateUserRepository(),
  ) {
    this.logger.getChild('UpdateUserUseCase');
  }

  async execute(
    input: UpdateUserUseCaseInput,
  ): Promise<UpdateUserUseCaseOutput> {
    this.logger.debug('execute input', JSON.stringify(input));
    const response = this.updateUserRepository.execute(input);
    this.logger.debug('update user repository response', response);
    this.logger.debug('execute output', response);
    return response;
  }
}
