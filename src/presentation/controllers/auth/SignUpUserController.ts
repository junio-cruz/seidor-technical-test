import { HttpRequest } from '../../http/request';
import {
  Language,
  userResolver,
  UserRole,
} from '../../../domain/entities/User';
import { HttpOkResponse, HttpResponse } from '../../http/response';
import { HttpBadRequestError, HttpError } from '../../http/errors';
import { IHttpController } from '../../../application/protocols/http/IHttp';
import {
  bioValidatorSchema,
  emailValidatorSchema,
  languagesValidatorSchema,
  nameValidatorSchema,
  passwordValidatorSchema,
  roleValidatorSchema,
} from '../../validatorSchemas/user/userValidatorSchemas';

import { Logger } from '../../../infra/logger/Logger';
import { FastestValidator } from '../../../infra/validators/FastestValidator';
import { IRequestValidator } from '../../../application/protocols/validator/IValidator';
import {
  ISignUpUseCase,
  SignUpUseCase,
} from '../../../application/usecases/auth/SignUpUseCase';
import { IAppConfig } from '../../../application/protocols/config/IAppConfig';

type RequestBodyParams = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  bio?: string;
  languages: Language[];
};

export class SignUpUserController implements IHttpController {
  constructor(
    private readonly logger: Logger,
    private readonly appConfig: IAppConfig,
    private readonly requestValidator: IRequestValidator = new FastestValidator(),
    private readonly signUpUserUseCase: ISignUpUseCase = new SignUpUseCase(
      logger,
      appConfig,
    ),
  ) {
    this.logger = this.logger.getChild('SignUpUserController');
  }

  public async handle(request: HttpRequest): Promise<HttpResponse | HttpError> {
    const { name, email, password, bio, role, languages } =
      request.body as RequestBodyParams;

    const requestValidation = await this.requestValidator.validate(
      {
        name,
        email,
        password,
        role,
        languages,
        bio,
      },
      {
        name: nameValidatorSchema({ optional: false }),
        email: emailValidatorSchema({ optional: false }),
        password: passwordValidatorSchema({ optional: false }),
        role: roleValidatorSchema({ optional: false }),
        languages: languagesValidatorSchema({ optional: false }),
        bio: bioValidatorSchema({ optional: true }),
      },
    );

    if (!requestValidation.isValid) {
      return new HttpBadRequestError(requestValidation.errors);
    }

    const user = await this.signUpUserUseCase.execute({
      name,
      email,
      password,
      role,
      languages,
      bio,
    });

    return new HttpOkResponse(userResolver(user));
  }
}
