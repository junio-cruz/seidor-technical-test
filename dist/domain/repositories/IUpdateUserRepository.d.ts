import { Language, User, UserRole } from '../entities/User';
export type UpdateUserRepositoryInput = {
    user_id: string;
    to_update: {
        name?: string;
        bio?: string;
        role?: UserRole;
        languages?: Language[];
        photo_url?: string;
        email_verified?: boolean;
        deleted_at?: Date;
        approved_at?: Date;
    };
};
export type UpdateUserRepositoryOutput = User | null;
export interface IUpdateUserRepository {
    execute(input: UpdateUserRepositoryInput): Promise<UpdateUserRepositoryOutput>;
}
