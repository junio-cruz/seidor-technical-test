import { HttpRequest } from '../../../http/request';
import { HttpOkResponse, HttpResponse } from '../../../http/response';
import { HttpBadRequestError, HttpError } from '../../../http/errors';
import { IHttpController } from '../../../../application/protocols/http/IHttp';
import { IRequestValidator } from '../../../../application/protocols/validator/IValidator';
import {
  passwordValidatorSchema,
  uuidV4ValidatorSchema,
} from '../../../validatorSchemas/user/userValidatorSchemas';
import {
  ChangePasswordUseCase,
  IChangePasswordUseCase,
} from '../../../../application/usecases/auth/password/ChangePasswordUseCase';

import { Logger } from '../../../../infra/logger/Logger';
import { FastestValidator } from '../../../../infra/validators/FastestValidator';

type RequestBodyParameters = {
  auth_token: string;
  new_password: string;
};

export class ChangePasswordController implements IHttpController {
  constructor(
    private readonly logger: Logger,
    private readonly requestValidator: IRequestValidator = new FastestValidator(),
    private readonly changePasswordUseCase: IChangePasswordUseCase = new ChangePasswordUseCase(
      logger,
    ),
  ) {
    this.logger.getChild('ChangePasswordController');
  }

  public async handle(request: HttpRequest): Promise<HttpResponse | HttpError> {
    const { auth_token, new_password } = request.body as RequestBodyParameters;

    const requestValidation = await this.requestValidator.validate(
      {
        auth_token,
        new_password,
      },
      {
        auth_token: uuidV4ValidatorSchema({ optional: false }),
        new_password: passwordValidatorSchema({ optional: false }),
      },
    );

    if (!requestValidation.isValid) {
      return new HttpBadRequestError(requestValidation.errors);
    }

    const response = await this.changePasswordUseCase.execute({
      auth_token,
      new_password,
    });

    return new HttpOkResponse(response);
  }
}
