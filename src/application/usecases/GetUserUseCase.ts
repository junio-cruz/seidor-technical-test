import { User } from '../../domain/entities/User';

import { Logger } from '../../infra/logger/Logger';
import { IGetUserRepository } from '../../domain/repositories/IGetUserRepository';
import { GetUserRepository } from '../../infra/database/repositories/GetUserRepository';

export type GetUserUseCaseInput = {
  user_id: string;
};

export type GetUserUseCaseOutput = User | null;

export interface IGetUserUseCase {
  execute(input: GetUserUseCaseInput): Promise<GetUserUseCaseOutput>;
}

export class GetUserUseCase implements IGetUserUseCase {
  constructor(
    private readonly logger: Logger,
    private getUserRepository: IGetUserRepository = new GetUserRepository(),
  ) {
    this.logger.getChild('GetUserUseCase');
  }

  async execute(input: GetUserUseCaseInput): Promise<GetUserUseCaseOutput> {
    this.logger.debug('execute input', JSON.stringify(input));
    const user = await this.getUserRepository.execute({
      user_id: input.user_id,
    });
    this.logger.debug('get user repository response', user);
    this.logger.debug('execute output', user);
    return user;
  }
}
