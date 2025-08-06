import { Logger } from '../../infra/logger/Logger';
import { Language, User, UserRole } from '../../domain/entities/User';
import { IUpdateUserRepository } from '../../domain/repositories/IUpdateUserRepository';
export type UpdateUserUseCaseInput = {
    user_id: string;
    to_update: {
        name?: string;
        bio?: string;
        role?: UserRole;
        languages?: Language[];
    };
};
export type UpdateUserUseCaseOutput = User | null;
export interface IUpdateUserUseCase {
    execute(input: UpdateUserUseCaseInput): Promise<UpdateUserUseCaseOutput>;
}
export declare class UpdateUserUseCase implements IUpdateUserUseCase {
    private readonly logger;
    private updateUserRepository;
    constructor(logger: Logger, updateUserRepository?: IUpdateUserRepository);
    execute(input: UpdateUserUseCaseInput): Promise<UpdateUserUseCaseOutput>;
}
