import { HttpError } from '../http/errors';
import { HttpRequest } from '../http/request';
import { HttpResponse } from '../http/response';
import { User } from '../../domain/entities/User';
import { FakeLogger } from '../../infra/logger/FakeLogger';
import { DeleteUserController } from './DeleteUserController';
import { FakeValidator } from '../../infra/validators/FakeValidator';
import { IUpdateUserRepository } from '../../domain/repositories/IUpdateUserRepository';
import { DeleteUserUseCase, DeleteUserUseCaseInput } from '../../application/usecases/DeleteUserUseCase';
import { FakeUpdateUserRepository } from '../../infra/database/repositories/fakes/FakeUpdateUserRepository';

let logger: FakeLogger;
let validator: FakeValidator;
let updateUserRepository: IUpdateUserRepository;
let useCase: DeleteUserUseCase;
let sut: DeleteUserController;


const data: DeleteUserUseCaseInput = {
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

describe('DeleteUserController', () => {
    beforeEach(() => {
        logger = new FakeLogger();
        updateUserRepository = new FakeUpdateUserRepository();
        validator = new FakeValidator();
        useCase = new DeleteUserUseCase(
            // @ts-ignore
            logger,
            updateUserRepository,
        );
        // @ts-ignore
        sut = new DeleteUserController(logger, validator, useCase);
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
