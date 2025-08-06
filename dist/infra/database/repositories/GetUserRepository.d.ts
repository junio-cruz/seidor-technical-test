import { GetUserRepositoryInput, GetUserRepositoryOutput, IGetUserRepository } from '../../../domain/repositories/IGetUserRepository';
export declare class GetUserRepository implements IGetUserRepository {
    execute(input: GetUserRepositoryInput): Promise<GetUserRepositoryOutput>;
}
