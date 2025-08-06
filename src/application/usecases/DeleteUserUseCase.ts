import { User } from '../../domain/entities/User';
import { Logger } from '../../infra/logger/Logger';
import { IUpdateUserRepository } from '../../domain/repositories/IUpdateUserRepository';
import { UpdateUserRepository } from '../../infra/database/repositories/UpdateUserRepository';

export type DeleteUserUseCaseInput = {
  user_id: string;
};

export type DeleteUserUseCaseOutput = User | null;

export interface IDeleteUserUseCase {
  execute(input: DeleteUserUseCaseInput): Promise<DeleteUserUseCaseOutput>;
}

export class DeleteUserUseCase implements IDeleteUserUseCase {
  constructor(
    private readonly logger: Logger,
    private updateUserRepository: IUpdateUserRepository = new UpdateUserRepository(),
  ) {
    this.logger.getChild('DeleteUserUseCase');
  }

  public async execute(
    input: DeleteUserUseCaseInput,
  ): Promise<DeleteUserUseCaseOutput> {
    this.logger.debug('execute input', JSON.stringify(input));
    const user = await this.updateUserRepository.execute({
      user_id: input.user_id,
      to_update: {
        deleted_at: new Date(),
      },
    });
    this.logger.debug('delete user repository response', user);
    this.logger.debug('execute output', user);
    return user;
  }
}
