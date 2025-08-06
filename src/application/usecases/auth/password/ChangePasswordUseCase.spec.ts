import { FakeLogger } from '../../../../infra/logger/FakeLogger';
import { IGetUserRepository } from '../../../../domain/repositories/IGetUserRepository';
import { ChangePasswordUseCase, ChangePasswordUseCaseInput } from './ChangePasswordUseCase';
import { IUpdateUserRepository } from '../../../../domain/repositories/IUpdateUserRepository';
import { FakeGetUserRepository } from '../../../../infra/database/repositories/fakes/FakeGetUserRepository';
import { FakeUpdateUserRepository } from '../../../../infra/database/repositories/fakes/FakeUpdateUserRepository';

let logger: FakeLogger;
let sut: ChangePasswordUseCase;
let getUserRepository: IGetUserRepository;
let updateUserRepository: IUpdateUserRepository;

const data: ChangePasswordUseCaseInput = {
    auth_token: '492649ff-fdb6-44c0-943d-3f8e8b50d65b',
    new_password: 'T@987654321',
};

describe('ChangePasswordUseCase', () => {
    const dataMock = new Date('2025-08-06T10:00:00.000Z');

    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(dataMock);
    });

    beforeEach(() => {
        logger = new FakeLogger();
        getUserRepository = new FakeGetUserRepository();
        updateUserRepository = new FakeUpdateUserRepository();
        sut = new ChangePasswordUseCase(
            // @ts-ignore
            logger,
            getUserRepository,
            updateUserRepository
        );
    });

    it('should call Logger.getChild', async () => {
        expect(logger.getChild('')).toBeInstanceOf(FakeLogger);
    });

    it('should call GetUserRepository.execute with correct parameters', async () => {
        const spyFakeGetUserRepository = jest.spyOn(getUserRepository, 'execute');

        await sut.execute(data);

        expect(spyFakeGetUserRepository).toHaveBeenCalledWith({ user_id: data.auth_token });
    });

    it('should call GetUserRepository.execute and if user not found return error with message', async () => {
        jest.spyOn(getUserRepository, 'execute').mockResolvedValue(null);

        await expect(sut.execute(data)).rejects.toThrowError('USER_NOT_FOUND');
    });

    it('should call return error if user auth_token not equal to registered', async () => {
        await expect(sut.execute({ auth_token: '69274251-25f8-4f74-8200-b1eb6cb7a2e6', new_password: data.new_password })).rejects.toThrowError('USER_NOT_AUTHORIZED');
    });

    it('should calls UpdateUserRepository.execute with correct parameters', async () => {
        const spyFakeUpdateUserRepository = jest.spyOn(updateUserRepository, 'execute');

        await sut.execute(data);

        expect(spyFakeUpdateUserRepository).toHaveBeenCalledWith({
            user_id: data.auth_token,
            to_update: { password: data.new_password },
        });
    });

    it('should calls UpdateUserRepository.execute and if not found return error with message', async () => {
        jest.spyOn(updateUserRepository, 'execute').mockResolvedValue(null);
        await expect(sut.execute(data)).rejects.toThrowError('USER_NOT_FOUND');
    });

    it('should calls Logger.debug at least three times', async () => {
        const spyFakeLogger = jest.spyOn(logger, 'debug');

        await sut.execute(data);

        expect(spyFakeLogger).toHaveBeenCalledTimes(3);
    });

    it('should be able return an user', async () => {
        const response = await sut.execute(data);
        expect(response).toBeTruthy();
    });
});
