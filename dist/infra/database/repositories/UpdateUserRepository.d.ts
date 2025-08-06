import { IUpdateUserRepository, UpdateUserRepositoryInput, UpdateUserRepositoryOutput } from '../../../domain/repositories/IUpdateUserRepository';
export declare class UpdateUserRepository implements IUpdateUserRepository {
    execute(input: UpdateUserRepositoryInput): Promise<UpdateUserRepositoryOutput>;
}
