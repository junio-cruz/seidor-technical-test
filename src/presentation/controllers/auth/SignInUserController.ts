import { HttpRequest } from '../../http/request';
import { HttpOkResponse, HttpResponse } from '../../http/response';
import { HttpBadRequestError, HttpError } from '../../http/errors';
import { IHttpController } from '../../../application/protocols/http/IHttp';
import {
  ISignInUserUseCase,
  SignInUserUseCase,
} from '../../../application/usecases/auth/SignInUseCase';
import { IRequestValidator } from '../../../application/protocols/validator/IValidator';
import {
  nameValidatorSchema,
  passwordValidatorSchema,
} from '../../validatorSchemas/user/userValidatorSchemas';

import { Logger } from '../../../infra/logger/Logger';
import { FastestValidator } from '../../../infra/validators/FastestValidator';

type RequestBodyParams = {
  email: string;
  password: string;
};

export class SignInUserController implements IHttpController {
  constructor(
    private readonly logger: Logger,
    private readonly requestValidator: IRequestValidator = new FastestValidator(),
    private readonly signInUserUseCase: ISignInUserUseCase = new SignInUserUseCase(
      logger,
    ),
  ) {
    this.logger = this.logger.getChild('SignInUserController');
  }

  public async handle(request: HttpRequest): Promise<HttpResponse | HttpError> {
    const { email, password } = request.body as RequestBodyParams;

    const requestValidation = await this.requestValidator.validate(
      {
        email,
        password,
      },
      {
        email: nameValidatorSchema({ optional: false }),
        password: passwordValidatorSchema({ optional: false }),
      },
    );

    if (!requestValidation.isValid) {
      return new HttpBadRequestError(requestValidation.errors);
    }

    const response = await this.signInUserUseCase.execute({
      email,
      password,
    });

    return new HttpOkResponse(response);
  }
}
