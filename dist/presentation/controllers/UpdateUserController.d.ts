import { HttpError } from '../http/errors';
import { HttpRequest } from '../http/request';
import { HttpResponse } from '../http/response';
import { IHttpController } from '../../application/protocols/http/IHttp';
import { IUpdateUserUseCase } from '../../application/usecases/UpdateUserUseCase';
import { IRequestValidator } from '../../application/protocols/validator/IValidator';
import { Logger } from '../../infra/logger/Logger';
export declare class UpdateUserController implements IHttpController {
    private readonly logger;
    private readonly requestValidator;
    private readonly updateUserUseCase;
    constructor(logger: Logger, requestValidator?: IRequestValidator, updateUserUseCase?: IUpdateUserUseCase);
    handle(request: HttpRequest): Promise<HttpResponse | HttpError>;
}
