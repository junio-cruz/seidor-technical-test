import { CreateUserRepositoryInput, CreateUserRepositoryOutput, ICreateUserRepository } from '../../../domain/repositories/ICreateUserRepository';
export declare class CreateUserRepository implements ICreateUserRepository {
    execute(input: CreateUserRepositoryInput): Promise<CreateUserRepositoryOutput>;
}
