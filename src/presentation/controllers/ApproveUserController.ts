import { Logger } from '../../infra/logger/Logger';
import { AppConfig } from '../../infra/config/AppConfig';

import {
  HttpBadRequestError,
  HttpError,
  HttpNotFoundError,
} from '../http/errors';
import { HttpRequest } from '../http/request';
import { userResolver } from '../../domain/entities/User';
import { HttpOkResponse, HttpResponse } from '../http/response';
import { IHttpController } from '../../application/protocols/http/IHttp';
import {
  ApproveUserUseCase,
  IApproveUserUseCase,
} from '../../application/usecases/ApproveUserUseCase';

import { FastestValidator } from '../../infra/validators/FastestValidator';
import { IRequestValidator } from '../../application/protocols/validator/IValidator';
import { uuidV4ValidatorSchema } from '../validatorSchemas/user/userValidatorSchemas';

type RequestParams = {
  user_id: string;
  admin_id: string;
};

export class ApproveUserController implements IHttpController {
  constructor(
    private readonly logger: Logger,
    private readonly appConfig: AppConfig,
    private readonly requestValidator: IRequestValidator = new FastestValidator(),
    private readonly approveUserUseCase: IApproveUserUseCase = new ApproveUserUseCase(
      logger,
      appConfig,
    ),
  ) {
    this.logger = this.logger.getChild('ApproveUserController');
  }

  public async handle(request: HttpRequest): Promise<HttpResponse | HttpError> {
    const { user_id, admin_id } = request.params as RequestParams;

    const requestValidation = await this.requestValidator.validate(
      {
        user_id,
        admin_id,
      },
      {
        user_id: uuidV4ValidatorSchema({ optional: false }),
        admin_id: uuidV4ValidatorSchema({ optional: false }),
      },
    );

    if (!requestValidation.isValid) {
      return new HttpBadRequestError(requestValidation.errors);
    }

    const user = await this.approveUserUseCase.execute({
      user_id,
      admin_id,
    });

    if (!user) {
      return new HttpNotFoundError('USER_NOT_FOUND');
    }

    return new HttpOkResponse(userResolver(user));
  }
}
