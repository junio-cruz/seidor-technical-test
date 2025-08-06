import { Logger } from '../../infra/logger/Logger';
import { User, UserRole } from '../../domain/entities/User';
import { IListUsersRepository } from '../../domain/repositories/IListUsersRepository';
export type ListUsersUseCaseInput = {
    filter?: {
        name?: string;
        role?: UserRole;
        email_verified?: boolean;
        approved_at?: Date | null;
    };
    order?: {
        [field: string]: 'asc' | 'desc';
    };
    pagination?: {
        page?: number;
        page_size?: number;
    };
};
export type ListUsersUseCaseOutput = {
    page: number;
    page_data: User[];
    page_count: number;
    all_count: number;
    all_pages_count: number;
};
export interface IListUsersUseCase {
    execute(input: ListUsersUseCaseInput): Promise<ListUsersUseCaseOutput>;
}
export declare class ListUsersUseCase implements IListUsersUseCase {
    private readonly logger;
    private listUsersRepository;
    constructor(logger: Logger, listUsersRepository?: IListUsersRepository);
    execute(input: ListUsersUseCaseInput): Promise<ListUsersUseCaseOutput>;
}
