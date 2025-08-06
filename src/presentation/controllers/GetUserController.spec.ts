import { HttpError } from '../http/errors';
import { HttpRequest } from '../http/request';
import { HttpResponse } from '../http/response';
import { User } from '../../domain/entities/User';
import { GetUserController } from './GetUserController';
import { FakeLogger } from '../../infra/logger/FakeLogger';
import { FakeValidator } from '../../infra/validators/FakeValidator';
import { GetUserUseCase, GetUserUseCaseInput } from '../../application/usecases/GetUserUseCase';
import { FakeGetUserRepository } from '../../infra/database/repositories/fakes/FakeGetUserRepository';

let logger: FakeLogger;
let validator: FakeValidator;
let getUserRepository: FakeGetUserRepository;
let useCase: GetUserUseCase;
let sut: GetUserController;


const data: GetUserUseCaseInput = {
    user_id: '',
};

const request: HttpRequest = {
    headers: {},
    context: {},
    params: {},
    body: { ...data },
    query: [],
    state: {},
}

describe('GetUserController', () => {
    beforeEach(() => {
        logger = new FakeLogger();
        getUserRepository = new FakeGetUserRepository();
        validator = new FakeValidator();
        useCase = new GetUserUseCase(
            // @ts-ignore
            logger,
            getUserRepository,
        );
        // @ts-ignore
        sut = new GetUserController(logger, validator, useCase);
    });


    it('should call Logger.getChild', async () => {
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
        jest.spyOn(useCase, 'execute').mockResolvedValue({} as User);

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
