/// <reference types="node" />
import { EventEmitter } from 'events';
import { LogLevel } from './Manager';
export declare class Logger {
    private logManager;
    private minLevel;
    private module;
    private readonly levels;
    constructor(logManager: EventEmitter, module: string, minLevel?: string);
    getChild(module: string): Logger;
    /**
     * Central logging method.
     * @param logLevel
     * @param message
     * @param data
     */
    log(logLevel: LogLevel, message: string, data?: any): void;
    trace(message: string, data?: any): void;
    debug(message: string, data?: any): void;
    info(message: string, data?: any): void;
    warn(message: string, data?: any): void;
    error(message: string, data?: any): void;
    /**
     * Converts a string level (trace/debug/info/warn/error) into a number
     *
     * @param minLevel
     */
    private levelToInt;
}
