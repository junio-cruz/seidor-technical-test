import { User } from '../../../../domain/entities/User';
import { ILogger } from '../../../protocols/logger/ILogger';
import { IGetUserRepository } from '../../../../domain/repositories/IGetUserRepository';
import { GetUserRepository } from '../../../../infra/database/repositories/GetUserRepository';
import {IUpdateUserRepository} from "../../../../domain/repositories/IUpdateUserRepository";
import {UpdateUserRepository} from "../../../../infra/database/repositories/UpdateUserRepository";

export type ChangePasswordUseCaseInput = {
  auth_token: string;
  new_password: string;
};

export type ChangePasswordUseCaseOutput = User;

export interface IChangePasswordUseCase {
  execute(
    input: ChangePasswordUseCaseInput,
  ): Promise<ChangePasswordUseCaseOutput>;
}

export class ChangePasswordUseCase implements IChangePasswordUseCase {
  constructor(
    private readonly logger: ILogger,
    private getUserRepository: IGetUserRepository = new GetUserRepository(),
    private updateUserRepository: IUpdateUserRepository = new UpdateUserRepository(),
  ) {
    this.logger.getChild('ChangePasswordUseCase');
  }

  public async execute(
    input: ChangePasswordUseCaseInput,
  ): Promise<ChangePasswordUseCaseOutput> {
    this.logger.debug('execute input', JSON.stringify(input));
    try {
      const user = await this.getUserRepository.execute({
        user_id: input.auth_token,
      });
      this.logger.debug('user repository response', user);

      if (!user) {
        throw new Error('USER_NOT_FOUND');
      }

      if (user.auth_token !== input.auth_token) {
        throw new Error('USER_NOT_AUTHORIZED');
      }

      const response = await this.updateUserRepository.execute({
        user_id: input.auth_token,
        to_update: { password: input.new_password }
      });
      this.logger.debug('update user repository response', response);

      if (!response) {
        throw new Error('USER_NOT_FOUND');
      }

      return response;
    } catch (error) {
      this.logger.error('execute error', error);
      throw error;
    }
  }
}
