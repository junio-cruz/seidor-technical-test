import { Language, User, UserRole } from '../entities/User';
export type CreateUserRepositoryInput = {
    user_id: string;
    name: string;
    email: string;
    email_verified: boolean;
    role: UserRole;
    auth_token: string;
    languages: Language[];
    created_at: Date;
    bio?: string;
    photo_url?: string;
    deleted_at?: Date;
    approved_at?: Date;
};
export type CreateUserRepositoryOutput = User;
export interface ICreateUserRepository {
    execute(input: CreateUserRepositoryInput): Promise<CreateUserRepositoryOutput>;
}
