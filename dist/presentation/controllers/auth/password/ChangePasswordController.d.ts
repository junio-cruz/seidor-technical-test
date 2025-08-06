import { HttpRequest } from '../../../http/request';
import { HttpResponse } from '../../../http/response';
import { HttpError } from '../../../http/errors';
import { IHttpController } from '../../../../application/protocols/http/IHttp';
import { IRequestValidator } from '../../../../application/protocols/validator/IValidator';
import { IChangePasswordUseCase } from '../../../../application/usecases/auth/password/ChangePasswordUseCase';
import { Logger } from '../../../../infra/logger/Logger';
export declare class ChangePasswordController implements IHttpController {
    private readonly logger;
    private readonly requestValidator;
    private readonly changePasswordUseCase;
    constructor(logger: Logger, requestValidator?: IRequestValidator, changePasswordUseCase?: IChangePasswordUseCase);
    handle(request: HttpRequest): Promise<HttpResponse | HttpError>;
}
