import { IListUsersRepository, ListUsersRepositoryInput, ListUsersRepositoryOutput } from '../../../domain/repositories/IListUsersRepository';
export declare class ListUsersRepository implements IListUsersRepository {
    execute(input: ListUsersRepositoryInput): Promise<ListUsersRepositoryOutput>;
}
