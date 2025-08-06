import { HttpRequest } from '../http/request';
import { HttpResponse } from '../http/response';
import { HttpError } from '../http/errors';
import { IHttpController } from '../../application/protocols/http/IHttp';
import { IListUsersUseCase } from '../../application/usecases/ListUsersUseCase';
import { IRequestValidator } from '../../application/protocols/validator/IValidator';
import { Logger } from '../../infra/logger/Logger';
export declare class ListUsersController implements IHttpController {
    private readonly logger;
    private readonly requestValidator;
    private readonly listUsersUseCase;
    constructor(logger: Logger, requestValidator?: IRequestValidator, listUsersUseCase?: IListUsersUseCase);
    handle(request: HttpRequest): Promise<HttpResponse | HttpError>;
}
