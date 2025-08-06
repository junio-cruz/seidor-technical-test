import { User } from '../../domain/entities/User';
import { Logger } from '../../infra/logger/Logger';
import { IAppConfig } from '../protocols/config/IAppConfig';
import { IGetUserRepository } from '../../domain/repositories/IGetUserRepository';
import { GetUserRepository } from '../../infra/database/repositories/GetUserRepository';
import { IUpdateUserRepository } from '../../domain/repositories/IUpdateUserRepository';
import { UpdateUserRepository } from '../../infra/database/repositories/UpdateUserRepository';

export type ApproveUserUseCaseInput = {
  user_id: string;
  admin_id: string;
};

export type ApproveUserUseCaseOutput = User | null;

export interface IApproveUserUseCase {
  execute(
    input: ApproveUserUseCaseInput,
  ): Promise<ApproveUserUseCaseOutput>;
}

export class ApproveUserUseCase
  implements IApproveUserUseCase
{
  constructor(
    private readonly logger: Logger,
    private appConfig: IAppConfig,
    private getUserRepository: IGetUserRepository = new GetUserRepository(),
    private updateUserRepository: IUpdateUserRepository = new UpdateUserRepository(),
  ) {
    this.logger = this.logger.getChild('ApproveUserUseCase');
  }

  public async execute(
    input: ApproveUserUseCaseInput,
  ): Promise<ApproveUserUseCaseOutput> {
    this.logger.debug('execute input', JSON.stringify(input));
    const admin_user = await this.getUserRepository.execute({
      user_id: input.admin_id,
    });

    if (!admin_user) {
      throw new Error('ADMIN_USER_NOT_FOUND');
    }

    if (admin_user.role !== 'Admin') {
      throw new Error('ADMIN_USER_NOT_AUTHORIZED');
    }

    const user_approved = this.updateUserRepository.execute({
      user_id: input.user_id,
      to_update: {
        approved_at: new Date(),
      },
    });
    this.logger.debug('update user repository response', user_approved);

    if (!user_approved) {
      return user_approved;
    }

    this.logger.debug('execute output', user_approved);
    return user_approved;
  }
}
