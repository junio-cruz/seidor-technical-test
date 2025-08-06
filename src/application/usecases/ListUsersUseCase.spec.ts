import { UserRole } from '../../domain/entities/User';
import { FakeLogger } from '../../infra/logger/FakeLogger';
import {ListUsersUseCase, ListUsersUseCaseInput} from './ListUsersUseCase';
import { FakeListUsersRepository } from '../../infra/database/repositories/fakes/FakeListUsersRepository';

let fakeListUsersRepository: FakeListUsersRepository;
let sut: ListUsersUseCase;
let fakeLogger: FakeLogger;

const data: ListUsersUseCaseInput = {
    filter: {
        name: 'Junio',
        role: UserRole.PUBLIC,
    },
    pagination: {
        page: 1,
        page_size: 10,
    }
};

describe('ListUsersUseCase', () => {
    beforeEach(() => {
        fakeListUsersRepository = new FakeListUsersRepository();
        fakeLogger = new FakeLogger();
        // @ts-ignore
        sut = new ListUsersUseCase(fakeLogger, fakeListUsersRepository);
    });

    it('should call Logger.getChild', async () => {
        expect(fakeLogger.getChild('')).toBeInstanceOf(FakeLogger);
    });

    it('should calls ListUsersRepository.execute with correct parameters', async () => {
        const spyFakeListUsersRepository = jest.spyOn(fakeListUsersRepository, 'execute');

        await sut.execute(data);

        expect(spyFakeListUsersRepository).toHaveBeenCalledWith(data);
    });

    it('should calls Logger.debug at least two times', async () => {
        const spyFakeLogger = jest.spyOn(fakeLogger, 'debug');

        await sut.execute(data);

        expect(spyFakeLogger).toHaveBeenCalledTimes(2);
    });

    it('should be able to list an users', async () => {
        const listUsers = await sut.execute(data);

        expect(listUsers).toHaveProperty('page');
        expect(listUsers).toHaveProperty('page_data');
        expect(listUsers).toHaveProperty('page_count');
        expect(listUsers).toHaveProperty('all_count');
        expect(listUsers).toHaveProperty('all_pages_count');
    });
});
