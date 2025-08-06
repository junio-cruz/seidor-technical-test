import { UserRole } from '../../domain/entities/User';
import { FakeLogger } from '../../infra/logger/FakeLogger';
import { UpdateUserUseCase, UpdateUserUseCaseInput } from './UpdateUserUseCase';
import { FakeUpdateUserRepository } from '../../infra/database/repositories/fakes/FakeUpdateUserRepository';

let logger: FakeLogger;
let fakeUpdateUserRepository: FakeUpdateUserRepository;
let sut: UpdateUserUseCase;

const data: UpdateUserUseCaseInput = {
    user_id: "30777c9d-4a8e-4897-962f-21be1d166fbe",
    to_update: {
        "name": "Junio Cruz Updated",
        "role": UserRole.PUBLIC,
        "bio": "The standard chunk of Lorem Ipsum used since the 1500s",
        "languages": [
            "en-US"
        ],
    }
};

describe('SignUpUseCase', () => {
    beforeEach(() => {
        fakeUpdateUserRepository = new FakeUpdateUserRepository();
        logger = new FakeLogger();
        // @ts-ignore
        sut = new UpdateUserUseCase(logger, fakeUpdateUserRepository);
    });

    it('should calls UpdateUserRepository.execute with correct parameters', async () => {
        const spyFakeUpdateUserRepository = jest.spyOn(fakeUpdateUserRepository, 'execute');
        jest.spyOn(fakeUpdateUserRepository, 'execute').mockResolvedValue(null);

        await sut.execute(data);

        expect(spyFakeUpdateUserRepository).toHaveBeenCalledWith({
            user_id: data.user_id,
            to_update: data.to_update,
        });
    });

    it('should calls UpdateUserRepository.execute return null if user not found', async () => {
        jest.spyOn(fakeUpdateUserRepository, 'execute').mockResolvedValue(null);
        expect(await sut.execute(data)).toBeNull();
    });

    it('should calls Logger.debug at least three times', async () => {
        const spyFakeLogger = jest.spyOn(logger, 'debug');

        await sut.execute(data);

        expect(spyFakeLogger).toHaveBeenCalledTimes(3);
    });

    it('should be able to updated an user', async () => {
        const response = await sut.execute(data);

        expect(response).toBeTruthy();
    });
});
