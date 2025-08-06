/// <reference types="node" />
import { EventEmitter } from 'events';
import { Logger } from './Logger';
export declare enum LogLevel {
    TRACE = "trace",
    DEBUG = "debug",
    INFO = "info",
    WARN = "warn",
    ERROR = "error"
}
export type LogEntry = {
    level: LogLevel;
    module: string;
    message: string;
    data?: any;
};
export declare class LogManager extends EventEmitter {
    private readonly minLevel;
    private static minLevel;
    private consoleLoggerRegistered;
    constructor(minLevel?: string);
    getLogger(module: string): Logger;
    onLogEntry(listener: (logEntry: LogEntry) => void): LogManager;
    registerConsoleLogger(): LogManager;
}
export declare const logging: (minLevel?: string) => LogManager;
