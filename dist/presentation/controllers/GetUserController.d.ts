import { HttpRequest } from '../http/request';
import { HttpResponse } from '../http/response';
import { HttpError } from '../http/errors';
import { IHttpController } from '../../application/protocols/http/IHttp';
import { IGetUserUseCase } from '../../application/usecases/GetUserUseCase';
import { Logger } from '../../infra/logger/Logger';
import { IRequestValidator } from '../../application/protocols/validator/IValidator';
export declare class GetUserController implements IHttpController {
    private readonly logger;
    private readonly requestValidator;
    private readonly getUserUseCase;
    constructor(logger: Logger, requestValidator?: IRequestValidator, getUserUseCase?: IGetUserUseCase);
    handle(request: HttpRequest): Promise<HttpResponse | HttpError>;
}
