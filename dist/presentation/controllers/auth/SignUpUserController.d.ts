import { HttpRequest } from '../../http/request';
import { HttpResponse } from '../../http/response';
import { HttpError } from '../../http/errors';
import { IHttpController } from '../../../application/protocols/http/IHttp';
import { Logger } from '../../../infra/logger/Logger';
import { IRequestValidator } from '../../../application/protocols/validator/IValidator';
import { ISignUpUseCase } from '../../../application/usecases/auth/SignUpUseCase';
import { IAppConfig } from '../../../application/protocols/config/IAppConfig';
export declare class SignUpUserController implements IHttpController {
    private readonly logger;
    private readonly appConfig;
    private readonly requestValidator;
    private readonly signUpUserUseCase;
    constructor(logger: Logger, appConfig: IAppConfig, requestValidator?: IRequestValidator, signUpUserUseCase?: ISignUpUseCase);
    handle(request: HttpRequest): Promise<HttpResponse | HttpError>;
}
