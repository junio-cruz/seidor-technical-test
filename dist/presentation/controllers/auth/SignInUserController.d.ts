import { HttpRequest } from '../../http/request';
import { HttpResponse } from '../../http/response';
import { HttpError } from '../../http/errors';
import { IHttpController } from '../../../application/protocols/http/IHttp';
import { ISignInUserUseCase } from '../../../application/usecases/auth/SignInUseCase';
import { IRequestValidator } from '../../../application/protocols/validator/IValidator';
import { Logger } from '../../../infra/logger/Logger';
export declare class SignInUserController implements IHttpController {
    private readonly logger;
    private readonly requestValidator;
    private readonly signInUserUseCase;
    constructor(logger: Logger, requestValidator?: IRequestValidator, signInUserUseCase?: ISignInUserUseCase);
    handle(request: HttpRequest): Promise<HttpResponse | HttpError>;
}
