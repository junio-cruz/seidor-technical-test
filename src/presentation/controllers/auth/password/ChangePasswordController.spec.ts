import { FakeLogger } from '../../../../infra/logger/FakeLogger';
import { ChangePasswordController } from './ChangePasswordController';
import { FakeValidator } from '../../../../infra/validators/FakeValidator';
import { ChangePasswordUseCase } from '../../../../application/usecases/auth/password/ChangePasswordUseCase';
import {FakeGetUserRepository} from "../../../../infra/database/repositories/fakes/FakeGetUserRepository";
import {FakeUpdateUserRepository} from "../../../../infra/database/repositories/fakes/FakeUpdateUserRepository";
import {HttpRequest} from "../../../http/request";
import {HttpResponse} from "../../../http/response";
import {User} from "../../../../domain/entities/User";
import {HttpError} from "../../../http/errors";

let logger: FakeLogger;
let validator: FakeValidator;
let getUserRepository: FakeGetUserRepository;
let updateUserRepository: FakeUpdateUserRepository;
let useCase: ChangePasswordUseCase;
let sut: ChangePasswordController;

const data = {
  auth_token: '',
  new_password: ''
};

const request: HttpRequest = {
  headers: {},
  context: {},
  params: {},
  body: { ...data },
  query: [],
  state: {},
}

describe('ChangePasswordController', () => {
  beforeEach(() => {
    logger = new FakeLogger();
    validator = new FakeValidator();
    getUserRepository = new FakeGetUserRepository();
    updateUserRepository = new FakeUpdateUserRepository();
    // @ts-ignore
    useCase = new ChangePasswordUseCase(logger, getUserRepository, updateUserRepository);
    // @ts-ignore
    sut = new ChangePasswordController(logger, validator, useCase);
    jest.spyOn(useCase, 'execute').mockResolvedValue({} as User);
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
