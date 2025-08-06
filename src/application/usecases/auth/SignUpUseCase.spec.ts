import { IISP } from '../../protocols/isp/IISP';
import { FakeISP } from '../../../infra/isp/FakeISP';
import {User, UserRole} from '../../../domain/entities/User';
import { FakeLogger } from '../../../infra/logger/FakeLogger';
import { IAppConfig } from '../../protocols/config/IAppConfig';
import { FakeAppConfig } from '../../../infra/config/FakeAppConfig';
import { IGuidGenerator } from '../../protocols/guid/IGuidGenerator';
import { SignUpUseCase, SignUpUseCaseInput } from './SignUpUseCase';
import { FakeGuidGenerator } from '../../../infra/guidGenerator/FakeGuidGenerator';
import { IGetUserRepository } from '../../../domain/repositories/IGetUserRepository';
import { ICreateUserRepository } from '../../../domain/repositories/ICreateUserRepository';
import { FakeGetUserRepository } from '../../../infra/database/repositories/fakes/FakeGetUserRepository';
import { FakeCreateUserRepository } from '../../../infra/database/repositories/fakes/FakeCreateUserRepository';

let logger: FakeLogger;
let appConfig: IAppConfig;
let identityServiceProvider: IISP;
let guidGenerator: IGuidGenerator;
let getUserRepository: IGetUserRepository;
let createUserRepository: ICreateUserRepository;
let sut: SignUpUseCase;


const data: SignUpUseCaseInput = {
    name: "Junio Cruz",
    email: 'junio.souza_cruz@outlook.com',
    role: UserRole.ADMIN,
    bio: "The standard chunk of Lorem Ipsum used since the 1500s",
    languages: [
        "en-US"
    ],
    password: '123456789@T',
};

describe('SignUpUseCase', () => {
    const dataMock = new Date('2025-08-06T10:00:00.000Z');

    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(dataMock);
    });

    beforeEach(() => {
        logger = new FakeLogger();
        appConfig = new FakeAppConfig;
        identityServiceProvider =  new FakeISP();
        guidGenerator = new FakeGuidGenerator();
        getUserRepository = new FakeGetUserRepository();
        createUserRepository =new FakeCreateUserRepository();
        sut = new SignUpUseCase(
            // @ts-ignore
            logger,
            appConfig,
            identityServiceProvider,
            guidGenerator,
            getUserRepository,
            createUserRepository
        );
        jest.spyOn(getUserRepository, 'execute').mockResolvedValue(null);
    });

    it('should call Logger.getChild', async () => {
        expect(logger.getChild('')).toBeInstanceOf(FakeLogger);
    });

    it('should calls GetUserRepository.execute with correct parameters', async () => {
        const spyFakeGetUserRepository = jest.spyOn(getUserRepository, 'execute').mockResolvedValue(null);

        await sut.execute(data);

        expect(spyFakeGetUserRepository).toHaveBeenCalledWith({ user_id: data.email });
    });

    it('should call GetUserRepository.execute and if user found return error with message', async () => {
        jest.spyOn(getUserRepository, 'execute').mockResolvedValue({ name: 'Junio Cruz'} as User);

        await expect(sut.execute(data)).rejects.toThrowError('USER_ALREADY_EXISTS');
    });


    it('should call guidGenerator.uuidV4', async () => {
        const spyGuidGenerator = jest.spyOn(guidGenerator, 'uuidV4');

        await sut.execute(data);

        expect(spyGuidGenerator).toHaveBeenCalledTimes(2);
    });

    it('should calls CreateRepository.execute with correct parameters', async () => {
        const spyFakeCreateUserRepository = jest.spyOn(createUserRepository, 'execute');

        await sut.execute(data);

        expect(spyFakeCreateUserRepository).toHaveBeenCalledWith({
            ...data,
            user_id: guidGenerator.uuidV4(),
            auth_token: guidGenerator.uuidV4(),
            email_verified: false,
            approved_at: undefined,
            created_at: new Date(),
            photo_url: undefined,
            deleted_at: undefined,
        });
    });

    it('should call IdentityServiceProvider.createUser for create user for jasonWebToken', async () => {
        const spyFakeISP = jest.spyOn(identityServiceProvider, 'createUser');

        await sut.execute(data);

        expect(spyFakeISP).toHaveBeenCalledWith({ email: data.email, user_id: guidGenerator.uuidV4() });
    });

    it('should calls Logger.debug at least six times', async () => {
        const spyFakeLogger = jest.spyOn(logger, 'debug');

        await sut.execute(data);

        expect(spyFakeLogger).toHaveBeenCalledTimes(6);
    });

    it('should be able return an user authenticated', async () => {
        const response = await sut.execute(data);

        expect(response).toBeTruthy();
    });
});
