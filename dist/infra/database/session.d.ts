import { User } from "../../domain/entities/User";
export declare class DatabaseSession {
    private readonly entityModel;
    private clientSession;
    constructor(entityModel: User[]);
    start(): boolean;
    getSession(): User[];
    updateSession(input: User[]): User[];
}
export declare const databaseInstance: DatabaseSession;
