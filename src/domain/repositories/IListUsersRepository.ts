import { User, UserRole } from '../entities/User';

export type ListUsersRepositoryInput = {
  filter?: {
    name?: string;
    role?: UserRole;
    email_verified?: boolean;
    approved_at?: Date | null;
    deleted_at?: Date | null;
    created_at?: Date;
    updated_at?: Date;
  };
  order?: {
    [field: string]: 'asc' | 'desc';
  };
  pagination?: {
    page?: number;
    page_size?: number;
  };
};

export type ListUsersRepositoryOutput = {
  page: number;
  page_data: User[];
  page_count: number;
  all_count: number;
  all_pages_count: number;
};

export interface IListUsersRepository {
  execute(input: ListUsersRepositoryInput): Promise<ListUsersRepositoryOutput>;
}
