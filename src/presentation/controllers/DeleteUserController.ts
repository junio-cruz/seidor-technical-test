import {
  HttpBadRequestError,
  HttpError,
  HttpNotFoundError,
} from '../http/errors';
import { HttpRequest } from '../http/request';

import { HttpOkResponse, HttpResponse } from '../http/response';
import { IHttpController } from '../../application/protocols/http/IHttp';
import {
  DeleteUserUseCase,
  IDeleteUserUseCase,
} from '../../application/usecases/DeleteUserUseCase';
import { IRequestValidator } from '../../application/protocols/validator/IValidator';
import { uuidV4ValidatorSchema } from '../validatorSchemas/user/userValidatorSchemas';

import { Logger } from '../../infra/logger/Logger';
import { userResolver } from '../../domain/entities/User';
import { FastestValidator } from '../../infra/validators/FastestValidator';

type RequestParams = {
  user_id: string;
};
export class DeleteUserController implements IHttpController {
  constructor(
    private readonly logger: Logger,
    private readonly requestValidator: IRequestValidator = new FastestValidator(),
    private readonly deleteUserUseCase: IDeleteUserUseCase = new DeleteUserUseCase(
      logger,
    ),
  ) {
    this.logger = this.logger.getChild('DeleteUserController');
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

    const user = await this.deleteUserUseCase.execute({
      user_id,
    });

    if (!user) {
      return new HttpNotFoundError('USER_NOT_FOUND');
    }

    return new HttpOkResponse(userResolver(user));
  }
}
