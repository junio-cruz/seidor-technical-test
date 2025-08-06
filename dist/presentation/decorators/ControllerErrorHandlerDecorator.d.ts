import { HttpRequest } from '../http/request';
import { HttpResponse } from '../http/response';
import { IHttpController } from '../../application/protocols/http/IHttp';
import { HttpError } from '../http/errors';
import { ILogger } from '../../application/protocols/logger/ILogger';
export declare class ControllerErrorHandlerDecorator {
    private logger;
    private readonly controller;
    constructor(logger: ILogger, controller: IHttpController);
    handle(request: HttpRequest): Promise<HttpResponse | HttpError>;
}
