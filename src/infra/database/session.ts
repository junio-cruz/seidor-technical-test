import {User} from "../../domain/entities/User";

export class DatabaseSession  {
  private clientSession: User[];

  constructor(private readonly entityModel: User[]) {
    this.clientSession = entityModel
  }

  public start(): boolean {
    this.clientSession = [] as User[];
    return !!this.clientSession
  }

  public getSession(): User[] {
    if (this.clientSession) {
      return this.clientSession;
    }
    throw new Error('START_DATABASE_ERROR');
  }

  public updateSession(input: User[]): User[] {
    this.clientSession = input;
    return this.clientSession;
  }
}

export const databaseInstance = new DatabaseSession([]);

