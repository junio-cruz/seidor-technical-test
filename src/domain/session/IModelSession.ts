export interface IModelSession {
  getSession(): any;
  startTransaction(): Promise<void>;
  commitTransaction(): Promise<void>;
  abortTransaction(): Promise<void>;
}
