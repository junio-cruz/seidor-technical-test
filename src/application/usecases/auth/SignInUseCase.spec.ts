import { IISP } from '../../protocols/isp/IISP';
import { FakeISP } from '../../../infra/isp/FakeISP';
import { FakeLogger } from '../../../infra/logger/FakeLogger';
import { SignInUserUseCase, SignInUserUseCaseInput } from './SignInUseCase';
import { IGetUserRepository } from '../../../domain/repositories/IGetUserRepository';
import { FakeGetUserRepository } from '../../../infra/database/repositories/fakes/FakeGetUserRepository';

let logger: FakeLogger;
let identityServiceProvider: IISP;
let getUserRepository: IGetUserRepository;
let sut: SignInUserUseCase;

const data: SignInUserUseCaseInput = {
    email: 'junio.souza_cruz@outlook.com',
    password: '123456789@T',
};

describe('SignInUseCase', () => {
    const dataMock = new Date('2025-08-06T10:00:00.000Z');

    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(dataMock);
    });

    beforeEach(() => {
        logger = new FakeLogger();
        identityServiceProvider =  new FakeISP();
        getUserRepository = new FakeGetUserRepository();
        sut = new SignInUserUseCase(
            // @ts-ignore
            logger,
            identityServiceProvider,
            getUserRepository,
        );
    });

    it('should call Logger.getChild', async () => {
        expect(logger.getChild('')).toBeInstanceOf(FakeLogger);
    });

    it('should call GetUserRepository.execute with correct parameters', async () => {
        const spyFakeGetUserRepository = jest.spyOn(getUserRepository, 'execute');

        await sut.execute(data);

        expect(spyFakeGetUserRepository).toHaveBeenCalledWith({ user_id: data.email });
    });

    it('should call GetUserRepository.execute and if user not found return error with message', async () => {
        jest.spyOn(getUserRepository, 'execute').mockResolvedValue(null);

        await expect(sut.execute(data)).rejects.toThrowError('USER_NOT_FOUND');
    });

    it('should call IdentityServiceProvider.initiateAuth for get jasonWebToken', async () => {
        const spyFakeISP = jest.spyOn(identityServiceProvider, 'initiateAuth');

        await sut.execute(data);

        expect(spyFakeISP).toHaveBeenCalledWith(data);
    });

    it('should call IdentityServiceProvider.initiateAuth with throw error if jasonWebToken not found', async () => {
        jest.spyOn(identityServiceProvider, 'initiateAuth').mockResolvedValue(null);
        await expect(sut.execute(data)).rejects.toThrowError('USER_NOT_FOUND');
    });

    it('should calls Logger.debug at least four times', async () => {
        const spyFakeLogger = jest.spyOn(logger, 'debug');

        await sut.execute(data);

        expect(spyFakeLogger).toHaveBeenCalledTimes(4);
    });

    it('should be able return an user authenticated', async () => {
        const response = await sut.execute(data);

        expect(response).toBeTruthy();
    });
});
