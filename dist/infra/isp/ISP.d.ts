import { CreateUserInput, CreateUserOutput, DeleteUserInput, DeleteUserOutput, GetUserInput, GetUserOutput, IISP, InitiateAuthInput, InitiateAuthOutput, RevalidateAuthInput, RevalidateAuthOutput, SetEmailVerifiedInput, SetEmailVerifiedOutput, SetPhoneNumberInput, SetPhoneNumberOutput, SetUserPasswordInput, SetUserPasswordOutput } from '../../application/protocols/isp/IISP';
export declare class ISP implements IISP {
    createUser(input: CreateUserInput): Promise<CreateUserOutput>;
    getUser(input: GetUserInput): Promise<GetUserOutput>;
    deleteUser(input: DeleteUserInput): Promise<DeleteUserOutput>;
    setPhoneNumber(input: SetPhoneNumberInput): Promise<SetPhoneNumberOutput>;
    setUserPassword(input: SetUserPasswordInput): Promise<SetUserPasswordOutput>;
    setEmailVerified(input: SetEmailVerifiedInput): Promise<SetEmailVerifiedOutput>;
    initiateAuth(input: InitiateAuthInput): Promise<InitiateAuthOutput>;
    revalidateAuth(input: RevalidateAuthInput): Promise<RevalidateAuthOutput>;
}
