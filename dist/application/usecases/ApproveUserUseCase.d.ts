import { User } from '../../domain/entities/User';
import { Logger } from '../../infra/logger/Logger';
import { IAppConfig } from '../protocols/config/IAppConfig';
import { IGetUserRepository } from '../../domain/repositories/IGetUserRepository';
import { IUpdateUserRepository } from '../../domain/repositories/IUpdateUserRepository';
export type ApproveUserUseCaseInput = {
    user_id: string;
    admin_id: string;
};
export type ApproveUserUseCaseOutput = User | null;
export interface IApproveUserUseCase {
    execute(input: ApproveUserUseCaseInput): Promise<ApproveUserUseCaseOutput>;
}
export declare class ApproveUserUseCase implements IApproveUserUseCase {
    private readonly logger;
    private appConfig;
    private getUserRepository;
    private updateUserRepository;
    constructor(logger: Logger, appConfig: IAppConfig, getUserRepository?: IGetUserRepository, updateUserRepository?: IUpdateUserRepository);
    execute(input: ApproveUserUseCaseInput): Promise<ApproveUserUseCaseOutput>;
}
