import { Language, User, UserRole } from '../../../domain/entities/User';
import { IISP } from '../../protocols/isp/IISP';
import { ILogger } from '../../protocols/logger/ILogger';
import { IGuidGenerator } from '../../protocols/guid/IGuidGenerator';
import { ICreateUserRepository } from '../../../domain/repositories/ICreateUserRepository';
import { IAppConfig } from '../../protocols/config/IAppConfig';
import { IGetUserRepository } from '../../../domain/repositories/IGetUserRepository';
export type SignUpUseCaseInput = {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    languages: Language[];
    bio?: string;
};
export type SignUpUseCaseOutput = User;
export interface ISignUpUseCase {
    execute(input: SignUpUseCaseInput): Promise<SignUpUseCaseOutput>;
}
export declare class SignUpUseCase implements ISignUpUseCase {
    private logger;
    private appConfig;
    private identityServiceProvider;
    private guidGenerator;
    private getUserRepository;
    private createRepository;
    constructor(logger: ILogger, appConfig: IAppConfig, identityServiceProvider?: IISP, guidGenerator?: IGuidGenerator, getUserRepository?: IGetUserRepository, createRepository?: ICreateUserRepository);
    execute(input: SignUpUseCaseInput): Promise<SignUpUseCaseOutput>;
}
