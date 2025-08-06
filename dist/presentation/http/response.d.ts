type GenericObject = {
    [key: string]: any;
};
export declare class HttpResponse {
    readonly body: GenericObject;
    readonly statusCode: number;
    constructor(body: GenericObject, statusCode: number);
}
export declare class HttpOkResponse extends HttpResponse {
    readonly body: GenericObject;
    constructor(body: GenericObject);
}
export declare class HttpCreatedResponse extends HttpResponse {
    readonly body: GenericObject;
    constructor(body: GenericObject);
}
export declare class HttpRedirectResponse extends HttpResponse {
    readonly body: GenericObject;
    constructor(body: GenericObject);
}
export {};
