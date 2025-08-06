import { HttpError } from '../../http/errors';
import { HttpRequest } from '../../http/request';
import { HttpResponse } from '../../http/response';
import { FakeISP } from '../../../infra/isp/FakeISP';
import { FakeLogger } from '../../../infra/logger/FakeLogger';
import { SignInUserController } from './SignInUserController';
import { FakeValidator } from '../../../infra/validators/FakeValidator';
import { SignInUserUseCase } from '../../../application/usecases/auth/SignInUseCase';
import { FakeGetUserRepository } from '../../../infra/database/repositories/fakes/FakeGetUserRepository';

let logger: FakeLogger;
let validator: FakeValidator;
let sut: SignInUserController;
let useCase: SignInUserUseCase;
let identityServiceProvider: FakeISP;
let getUserRepository: FakeGetUserRepository;

const data = {
  email: '',
  password: ''
};

const request: HttpRequest = {
  headers: {},
  context: {},
  params: {},
  body: { ...data },
  query: [],
  state: {},
}

const auth_response = {
  user_id: '',
  access_token: '~ldaogjaiofonsa´daopsfnp[oa78a66f84a4sf',
  refresh_token: '~ldaogjaiofonsa´daopsfnp[oa78a66f84a4sf',
  expires_in: 30
};

describe('SignInUserController', () => {
  beforeEach(() => {
    logger = new FakeLogger();
    validator = new FakeValidator();
    getUserRepository = new FakeGetUserRepository();
    identityServiceProvider = new FakeISP();
    // @ts-ignore
    useCase = new SignInUserUseCase(logger, getUserRepository, identityServiceProvider);
    // @ts-ignore
    sut = new SignInUserController(logger, validator, useCase);
    jest.spyOn(useCase, 'execute').mockResolvedValue(auth_response);
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
    jest.spyOn(useCase, 'execute').mockResolvedValue(auth_response);

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
