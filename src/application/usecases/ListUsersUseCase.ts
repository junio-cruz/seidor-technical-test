import { Logger } from '../../infra/logger/Logger';
import { User, UserRole } from '../../domain/entities/User';
import { IListUsersRepository } from '../../domain/repositories/IListUsersRepository';
import { ListUsersRepository } from '../../infra/database/repositories/ListUsersRepository';

export type ListUsersUseCaseInput = {
  filter?: {
    name?: string;
    role?: UserRole;
    email_verified?: boolean;
    approved_at?: Date | null;
  };
  order?: {
    [field: string]: 'asc' | 'desc';
  };
  pagination?: {
    page?: number;
    page_size?: number;
  };
};

export type ListUsersUseCaseOutput = {
  page: number;
  page_data: User[];
  page_count: number;
  all_count: number;
  all_pages_count: number;
};
export interface IListUsersUseCase {
  execute(input: ListUsersUseCaseInput): Promise<ListUsersUseCaseOutput>;
}

export class ListUsersUseCase implements IListUsersUseCase {
  constructor(
    private readonly logger: Logger,
    private listUsersRepository: IListUsersRepository = new ListUsersRepository(),
  ) {
    this.logger.getChild('ListUsersUseCase');
  }

  public async execute(
    input: ListUsersUseCaseInput,
  ): Promise<ListUsersUseCaseOutput> {
    this.logger.debug('execute input', JSON.stringify(input));
    const response = await this.listUsersRepository.execute(input);
    this.logger.debug('execute output', response);
    return response;
  }
}
