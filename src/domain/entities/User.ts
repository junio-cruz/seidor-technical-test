export enum UserRole {
  ADMIN = 'Admin',
  PUBLIC = 'Public',
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
  password: string;
  bio?: string;
  photo_url?: string;
  auth_token?: string;
  deleted_at?: Date;
  approved_at?: Date;
};

export const userResolver = (user: User): User => {
  return {
    user_id: user.user_id,
    name: user.name,
    email: user.email,
    email_verified: user.email_verified,
    role: user.role,
    languages: user.languages,
    created_at: user.created_at,
    bio: user.bio || undefined,
    photo_url: user.photo_url || undefined,
    password: user.password,
    deleted_at: user.deleted_at || undefined,
    approved_at: user.approved_at,
  };
};
