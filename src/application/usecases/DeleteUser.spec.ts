import { v4 as uuidV4 } from 'uuid';

import { FakeLogger } from '../../infra/logger/FakeLogger';
import { DeleteUserUseCaseInput, DeleteUserUseCase } from './DeleteUserUseCase';
import { FakeUpdateUserRepository } from '../../infra/database/repositories/fakes/FakeUpdateUserRepository';

let fakeLogger: FakeLogger;
let fakeDeleteUserRepository: FakeUpdateUserRepository;
let sut: DeleteUserUseCase;

const data: DeleteUserUseCaseInput = {
    user_id: uuidV4(),
};

describe('DeleteUserUseCase', () => {
    beforeEach(() => {
        fakeDeleteUserRepository = new FakeUpdateUserRepository();
        fakeLogger = new FakeLogger();
        // @ts-ignore
        sut = new DeleteUserUseCase(fakeLogger, fakeDeleteUserRepository);
    });

    it('should call Logger.getChild', async () => {
        expect(fakeLogger.getChild('')).toBeInstanceOf(FakeLogger);
    });

    it('should call Logger.debug at least three times', async () => {
        const spyFakeLoggerDebug = jest.spyOn(fakeLogger, 'debug');

        await sut.execute(data);

        expect(spyFakeLoggerDebug).toHaveBeenCalledTimes(3);
    });

    it('should be able to delete an user', async () => {
        const delete_user_id = await sut.execute(data);

        expect(delete_user_id).toHaveProperty('user_id');
    });
});
