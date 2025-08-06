import { User } from '../../domain/entities/User';
import { Logger } from '../../infra/logger/Logger';
import { IUpdateUserRepository } from '../../domain/repositories/IUpdateUserRepository';
export type DeleteUserUseCaseInput = {
    user_id: string;
};
export type DeleteUserUseCaseOutput = User | null;
export interface IDeleteUserUseCase {
    execute(input: DeleteUserUseCaseInput): Promise<DeleteUserUseCaseOutput>;
}
export declare class DeleteUserUseCase implements IDeleteUserUseCase {
    private readonly logger;
    private updateUserRepository;
    constructor(logger: Logger, updateUserRepository?: IUpdateUserRepository);
    execute(input: DeleteUserUseCaseInput): Promise<DeleteUserUseCaseOutput>;
}
