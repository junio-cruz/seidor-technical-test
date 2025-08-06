import { HttpError } from '../http/errors';
import { HttpRequest } from '../http/request';
import { HttpResponse } from '../http/response';
import { IHttpController } from '../../application/protocols/http/IHttp';
import { IDeleteUserUseCase } from '../../application/usecases/DeleteUserUseCase';
import { IRequestValidator } from '../../application/protocols/validator/IValidator';
import { Logger } from '../../infra/logger/Logger';
export declare class DeleteUserController implements IHttpController {
    private readonly logger;
    private readonly requestValidator;
    private readonly deleteUserUseCase;
    constructor(logger: Logger, requestValidator?: IRequestValidator, deleteUserUseCase?: IDeleteUserUseCase);
    handle(request: HttpRequest): Promise<HttpResponse | HttpError>;
}
