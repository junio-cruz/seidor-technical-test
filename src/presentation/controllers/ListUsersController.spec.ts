import { HttpError } from '../http/errors';
import { HttpRequest } from '../http/request';
import { HttpResponse } from '../http/response';
import { UserRole } from '../../domain/entities/User';
import { ListUsersController } from './ListUsersController';
import { FakeLogger } from '../../infra/logger/FakeLogger';
import { FakeValidator } from '../../infra/validators/FakeValidator';
import { ListUsersUseCase } from '../../application/usecases/ListUsersUseCase';
import { FakeListUsersRepository } from '../../infra/database/repositories/fakes/FakeListUsersRepository';

let logger: FakeLogger;
let validator: FakeValidator;
let listUsersRepository: FakeListUsersRepository;
let useCase: ListUsersUseCase;
let sut: ListUsersController;


const data = {
    name: 'Junio Cruz',
    role: UserRole.ADMIN,
    email_verified: true,
    page: 1,
    page_size: 10,
}

const request: HttpRequest = {
    headers: {},
    context: {},
    params: {},
    body: {},
    query: {...data},
    state: {},
}

describe('ListUsersController', () => {
    beforeEach(() => {
        logger = new FakeLogger();
        listUsersRepository = new FakeListUsersRepository();
        validator = new FakeValidator();
        useCase = new ListUsersUseCase(
            // @ts-ignore
            logger,
            listUsersRepository,
        );
        // @ts-ignore
        sut = new ListUsersController(logger, validator, useCase);
    });


    it('should call Logger.ListChilsd', async () => {
        expect(logger.getChild('')).toBeInstanceOf(FakeLogger);
    });

    it('should be able Validator', async () => {
        const spyValidator = jest.spyOn(validator, 'validate');

        await sut.handle(request);

        expect(spyValidator).toHaveBeenCalled();
    });

    it('should be able UseCase', async () => {
        const spyUseCase = jest.spyOn(useCase, 'execute');

        await sut.handle(request);

        expect(spyUseCase).toHaveBeenCalled();
    });

    it('should be able return httpResponse', async () => {
        jest.spyOn(useCase, 'execute').mockResolvedValue({
            page: 1,
            page_data: [],
            page_count: 10,
            all_count: 20,
            all_pages_count: 5
        });

        const result = await sut.handle(request);

        expect(result).toBeInstanceOf(HttpResponse);
    });

    it('should be able return httpError', async () => {
        jest.spyOn(validator, 'validate').mockResolvedValue({
            isValid: false,
            errors: ['not_validated'],
        });

        const result = await sut.handle(request);

        expect(result).toBeInstanceOf(HttpError);
    });
});
