export type User = {
    userName: string;
    userEmail: string;
    userPhoneNumber?: string;
};
export type CreateUserInput = {
    email: string;
    user_id: string;
    phone_number?: string;
};
export type CreateUserOutput = User;
export type GetUserInput = {
    AccessToken: string;
};
export type GetUserOutput = User;
export type DeleteUserInput = {
    email: string;
};
export type DeleteUserOutput = void;
export type SetEmailVerifiedInput = {
    email: string;
};
export type SetEmailVerifiedOutput = void;
export type SetPhoneNumberInput = {
    email: string;
    phone_number: string;
    emailVerified?: string;
};
export type SetPhoneNumberOutput = void;
export type SetUserPasswordInput = {
    email: string;
    password: string;
};
export type SetUserPasswordOutput = void;
export type InitiateAuthInput = {
    email: string;
    password: string;
};
export type AuthResponse = {
    access_token: string;
    refresh_token: string;
    expires_in: number;
};
export type InitiateAuthOutput = AuthResponse | null;
export type RevalidateAuthInput = {
    refresh_token: string;
};
export type RevalidateAuthOutput = {
    access_token: string;
    expires_in: number;
};
export interface IISP {
    createUser(input: CreateUserInput): Promise<User>;
    deleteUser(input: DeleteUserInput): Promise<DeleteUserOutput>;
    setEmailVerified(input: SetEmailVerifiedInput): Promise<SetEmailVerifiedOutput>;
    setUserPassword(input: SetUserPasswordInput): Promise<SetUserPasswordOutput>;
    initiateAuth(input: InitiateAuthInput): Promise<InitiateAuthOutput>;
    revalidateAuth(input: RevalidateAuthInput): Promise<RevalidateAuthOutput>;
}
