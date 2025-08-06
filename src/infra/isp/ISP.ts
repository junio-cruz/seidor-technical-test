import {
  CreateUserInput,
  CreateUserOutput,
  DeleteUserInput,
  DeleteUserOutput,
  GetUserInput,
  GetUserOutput,
  IISP,
  InitiateAuthInput,
  InitiateAuthOutput,
  RevalidateAuthInput,
  RevalidateAuthOutput,
  SetEmailVerifiedInput,
  SetEmailVerifiedOutput,
  SetPhoneNumberInput,
  SetPhoneNumberOutput,
  SetUserPasswordInput,
  SetUserPasswordOutput,
} from '../../application/protocols/isp/IISP';

export class ISP implements IISP {
  public async createUser(input: CreateUserInput): Promise<CreateUserOutput> {
    console.log(input);
    return {
      userName: input.user_id,
      userEmail: input.email,
    };
  }

  public async getUser(input: GetUserInput): Promise<GetUserOutput> {
    console.log(input);
    return {
      userName: 'User Name',
      userEmail: 'user@fanzo.com',
    };
  }

  public async deleteUser(input: DeleteUserInput): Promise<DeleteUserOutput> {
    console.log(input);
  }

  public async setPhoneNumber(
      input: SetPhoneNumberInput,
  ): Promise<SetPhoneNumberOutput> {
    console.log(input);
  }

  public async setUserPassword(
      input: SetUserPasswordInput,
  ): Promise<SetUserPasswordOutput> {
    console.log(input);
  }

  public async setEmailVerified(
      input: SetEmailVerifiedInput,
  ): Promise<SetEmailVerifiedOutput> {
    console.log(input);
  }

  public async initiateAuth(
      input: InitiateAuthInput,
  ): Promise<InitiateAuthOutput> {
    console.log(input);
    return {
      access_token: 'access_token',
      refresh_token: 'refresh_token',
      expires_in: 30,
    };
  }

  public async revalidateAuth(
      input: RevalidateAuthInput,
  ): Promise<RevalidateAuthOutput> {
    console.log(input);
    return {
      access_token: 'access_token',
      expires_in: 30,
    };
  }
}
