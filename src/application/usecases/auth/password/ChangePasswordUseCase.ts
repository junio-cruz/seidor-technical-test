import { ISP } from '../../../../infra/isp/ISP';
import { IISP } from '../../../protocols/isp/IISP';
import { User } from '../../../../domain/entities/User';
import { ILogger } from '../../../protocols/logger/ILogger';
import { IGetUserRepository } from '../../../../domain/repositories/IGetUserRepository';
import { GetUserRepository } from '../../../../infra/database/repositories/GetUserRepository';

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
    private identityServiceProvider: IISP = new ISP(),
  ) {
    this.logger = this.logger.getChild('ChangePasswordUseCase');
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

      await this.identityServiceProvider.setUserPassword({
        password: input.new_password,
        email: user.email,
      });
      this.logger.debug('identityServiceProvider setUserPassword');

      return user;
    } catch (error) {
      this.logger.error('execute error', error);
      throw error;
    }
  }
}
