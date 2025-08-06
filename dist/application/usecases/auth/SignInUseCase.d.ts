import { Logger } from '../../../infra/logger/Logger';
import { AuthResponse, IISP } from '../../protocols/isp/IISP';
import { IGetUserRepository } from '../../../domain/repositories/IGetUserRepository';
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
export declare class SignInUserUseCase implements ISignInUserUseCase {
    private readonly logger;
    private readonly identityServiceProvider;
    private getUserRepository;
    constructor(logger: Logger, identityServiceProvider?: IISP, getUserRepository?: IGetUserRepository);
    execute(input: SignInUserUseCaseInput): Promise<SignInUserUseCaseOutput>;
}
