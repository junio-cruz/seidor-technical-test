import { User } from '../../domain/entities/User';
import { Logger } from '../../infra/logger/Logger';
import { IGetUserRepository } from '../../domain/repositories/IGetUserRepository';
export type GetUserUseCaseInput = {
    user_id: string;
};
export type GetUserUseCaseOutput = User | null;
export interface IGetUserUseCase {
    execute(input: GetUserUseCaseInput): Promise<GetUserUseCaseOutput>;
}
export declare class GetUserUseCase implements IGetUserUseCase {
    private readonly logger;
    private getUserRepository;
    constructor(logger: Logger, getUserRepository?: IGetUserRepository);
    execute(input: GetUserUseCaseInput): Promise<GetUserUseCaseOutput>;
}
