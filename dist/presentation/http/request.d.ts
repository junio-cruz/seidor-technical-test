type GenericObject = {
    [key: string]: any;
};
export declare class HttpRequest {
    readonly headers?: GenericObject | undefined;
    readonly context?: GenericObject | undefined;
    readonly params?: GenericObject | undefined;
    readonly body?: GenericObject | undefined;
    readonly query?: GenericObject | undefined;
    readonly state?: GenericObject | undefined;
    constructor(headers?: GenericObject | undefined, context?: GenericObject | undefined, params?: GenericObject | undefined, body?: GenericObject | undefined, query?: GenericObject | undefined, state?: GenericObject | undefined);
}
export {};
