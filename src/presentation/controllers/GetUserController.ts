import { HttpRequest } from '../http/request';
import { HttpOkResponse, HttpResponse } from '../http/response';
import {
  HttpBadRequestError,
  HttpError,
  HttpNotFoundError,
} from '../http/errors';
import { userResolver } from '../../domain/entities/User';
import { IHttpController } from '../../application/protocols/http/IHttp';
import {
  GetUserUseCase,
  IGetUserUseCase,
} from '../../application/usecases/GetUserUseCase';
import { Logger } from '../../infra/logger/Logger';
import { IRequestValidator } from '../../application/protocols/validator/IValidator';
import { uuidV4ValidatorSchema } from '../validatorSchemas/user/userValidatorSchemas';
import { FastestValidator } from '../../infra/validators/FastestValidator';

type RequestParams = {
  user_id: string;
};

export class GetUserController implements IHttpController {
  constructor(
    private readonly logger: Logger,
    private readonly requestValidator: IRequestValidator = new FastestValidator(),
    private readonly getUserUseCase: IGetUserUseCase = new GetUserUseCase(
      logger,
    ),
  ) {
    this.logger = this.logger.getChild('GetUserController');
  }

  public async handle(request: HttpRequest): Promise<HttpResponse | HttpError> {
    const { user_id } = request.params as RequestParams;

    const requestValidation = await this.requestValidator.validate(
      {
        user_id,
      },
      {
        user_id: uuidV4ValidatorSchema({ optional: false }),
      },
    );

    if (!requestValidation.isValid) {
      return new HttpBadRequestError(requestValidation.errors);
    }

    const user = await this.getUserUseCase.execute({
      user_id,
    });

    if (!user) {
      return new HttpNotFoundError('USER_NOT_FOUND');
    }

    return new HttpOkResponse(userResolver(user));
  }
}
