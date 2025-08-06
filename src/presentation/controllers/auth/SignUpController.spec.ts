import { HttpError } from '../../http/errors';
import { HttpRequest } from '../../http/request';
import { HttpResponse } from '../../http/response';
import { FakeISP } from '../../../infra/isp/FakeISP';
import { FakeLogger } from '../../../infra/logger/FakeLogger';
import { SignUpUserController } from './SignUpUserController';
import { IISP} from '../../../application/protocols/isp/IISP';
import { FakeAppConfig } from '../../../infra/config/FakeAppConfig';
import { FakeValidator } from '../../../infra/validators/FakeValidator';
import { IAppConfig } from '../../../application/protocols/config/IAppConfig';
import { SignUpUseCase } from '../../../application/usecases/auth/SignUpUseCase';
import { FakeGuidGenerator } from '../../../infra/guidGenerator/FakeGuidGenerator';
import { IGuidGenerator } from '../../../application/protocols/guid/IGuidGenerator';
import { IGetUserRepository } from "../../../domain/repositories/IGetUserRepository";
import { ICreateUserRepository } from "../../../domain/repositories/ICreateUserRepository";
import { FakeGetUserRepository } from '../../../infra/database/repositories/fakes/FakeGetUserRepository';
import { FakeCreateUserRepository } from '../../../infra/database/repositories/fakes/FakeCreateUserRepository';
import {Language, User, UserRole} from "../../../domain/entities/User";

let validator: FakeValidator;
let logger: FakeLogger;
let appConfig: IAppConfig;
let identityServiceProvider: IISP;
let guidGenerator: IGuidGenerator;
let getUserRepository: IGetUserRepository;
let createUserRepository: ICreateUserRepository;
let useCase: SignUpUseCase;
let sut: SignUpUserController;


const data = {
  name: 'string',
  email: 'string',
  password: 'string',
  role: UserRole.PUBLIC,
  languages: ['pt-BR']
};

const request: HttpRequest = {
  headers: {},
  context: {},
  params: {},
  body: { ...data },
  query: [],
  state: {},
}

describe('SignUpUserController', () => {
  beforeEach(() => {
    logger = new FakeLogger();
    appConfig = new FakeAppConfig;
    validator = new FakeValidator();
    identityServiceProvider =  new FakeISP();
    guidGenerator = new FakeGuidGenerator();
    getUserRepository = new FakeGetUserRepository();
    createUserRepository =new FakeCreateUserRepository();
    useCase = new SignUpUseCase(
      // @ts-ignore
      logger,
      appConfig,
      identityServiceProvider,
      guidGenerator,
      getUserRepository,
      createUserRepository
    );
    // @ts-ignore
    sut = new SignUpUserController(logger, appConfig, validator, useCase);
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
