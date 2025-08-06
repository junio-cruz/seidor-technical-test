import { Logger } from '../../infra/logger/Logger';
import { AppConfig } from '../../infra/config/AppConfig';
import { HttpError } from '../http/errors';
import { HttpRequest } from '../http/request';
import { HttpResponse } from '../http/response';
import { IHttpController } from '../../application/protocols/http/IHttp';
import { IApproveUserUseCase } from '../../application/usecases/ApproveUserUseCase';
import { IRequestValidator } from '../../application/protocols/validator/IValidator';
export declare class ApproveUserController implements IHttpController {
    private readonly logger;
    private readonly appConfig;
    private readonly requestValidator;
    private readonly approveUserUseCase;
    constructor(logger: Logger, appConfig: AppConfig, requestValidator?: IRequestValidator, approveUserUseCase?: IApproveUserUseCase);
    handle(request: HttpRequest): Promise<HttpResponse | HttpError>;
}
