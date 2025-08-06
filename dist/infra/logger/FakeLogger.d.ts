import { LogLevel } from './Manager';
export declare class FakeLogger {
    getLogger(moduleName: string): this;
    log(logLevel: LogLevel, message: string, data?: any): void;
    trace(message: string, data?: any): void;
    debug(message: string, data?: any): void;
    info(message: string, data?: any): void;
    warn(message: string, data?: any): void;
    error(message: string, data?: any): void;
}
