import { databaseInstance } from '../session';
import {
  CreateUserRepositoryInput,
  CreateUserRepositoryOutput,
  ICreateUserRepository,
} from '../../../domain/repositories/ICreateUserRepository';

export class CreateUserRepository implements ICreateUserRepository {
  public async execute(
    input: CreateUserRepositoryInput,
  ): Promise<CreateUserRepositoryOutput> {
    const databaseSession = databaseInstance.getSession();
    databaseSession.push(input);
    return databaseSession.find((user) => user.user_id === input.user_id) || input;
  }
}
