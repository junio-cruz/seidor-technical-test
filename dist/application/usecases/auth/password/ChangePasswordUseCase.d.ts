import { IISP } from '../../../protocols/isp/IISP';
import { User } from '../../../../domain/entities/User';
import { ILogger } from '../../../protocols/logger/ILogger';
import { IGetUserRepository } from '../../../../domain/repositories/IGetUserRepository';
export type ChangePasswordUseCaseInput = {
    auth_token: string;
    new_password: string;
};
export type ChangePasswordUseCaseOutput = User;
export interface IChangePasswordUseCase {
    execute(input: ChangePasswordUseCaseInput): Promise<ChangePasswordUseCaseOutput>;
}
export declare class ChangePasswordUseCase implements IChangePasswordUseCase {
    private readonly logger;
    private getUserRepository;
    private identityServiceProvider;
    constructor(logger: ILogger, getUserRepository?: IGetUserRepository, identityServiceProvider?: IISP);
    execute(input: ChangePasswordUseCaseInput): Promise<ChangePasswordUseCaseOutput>;
}
