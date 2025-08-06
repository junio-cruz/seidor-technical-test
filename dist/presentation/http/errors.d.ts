export declare class HttpError extends Error {
    readonly message: string;
    readonly data: any;
    readonly stack?: string | undefined;
    readonly statusCode: number;
    constructor(message: string, data: any, stack?: string | undefined, statusCode?: number);
}
export declare class HttpBadRequestError extends HttpError {
    readonly data: Array<string>;
    readonly name: string;
    readonly stack?: string | undefined;
    readonly message: string;
    readonly statusCode: number;
    constructor(data: Array<string>, name?: string, stack?: string | undefined, message?: string, statusCode?: number);
}
export declare class HttpConflictError extends HttpError {
    readonly data: any;
    readonly stack?: string | undefined;
    readonly name: string;
    readonly message: string;
    readonly statusCode: number;
    constructor(data: any, stack?: string | undefined, name?: string, message?: string, statusCode?: number);
}
export declare class HttpForbiddenError extends HttpError {
    readonly data: string;
    readonly stack?: string | undefined;
    readonly name: string;
    readonly message: string;
    readonly statusCode: number;
    constructor(data?: string, stack?: string | undefined, name?: string, message?: string, statusCode?: number);
}
export declare class HttpNotFoundError extends HttpError {
    readonly data: any;
    readonly stack?: string | undefined;
    readonly name: string;
    readonly message: string;
    readonly statusCode: number;
    constructor(data: any, stack?: string | undefined, name?: string, message?: string, statusCode?: number);
}
export declare class HttpInternalServerError extends HttpError {
    readonly data: Error;
    readonly stack?: string | undefined;
    readonly name: string;
    readonly message: string;
    readonly statusCode: number;
    constructor(data: Error, stack?: string | undefined, name?: string, message?: string, statusCode?: number);
}
export declare class HttpUnauthorizedError extends HttpError {
    readonly data: string;
    readonly stack?: string | undefined;
    readonly name: string;
    readonly message: string;
    readonly statusCode: number;
    constructor(data?: string, stack?: string | undefined, name?: string, message?: string, statusCode?: number);
}
export declare class HttpUnprocessableEntityError extends HttpError {
    readonly data: string;
    readonly stack?: string | undefined;
    readonly name: string;
    readonly message: string;
    readonly statusCode: number;
    constructor(data: string, stack?: string | undefined, name?: string, message?: string, statusCode?: number);
}
