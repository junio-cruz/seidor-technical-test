export declare enum UserRole {
    ADMIN = "Admin",
    PUBLIC = "public"
}
export type Language = 'en-US' | 'es-ES' | 'pt-BR';
export type User = {
    user_id: string;
    name: string;
    email: string;
    email_verified: boolean;
    role: UserRole;
    languages: Language[];
    created_at: Date;
    bio?: string;
    photo_url?: string;
    auth_token?: string;
    deleted_at?: Date;
    approved_at?: Date;
};
export declare const userResolver: (user: User) => User;
