import {
  HttpBadRequestError,
  HttpError,
  HttpNotFoundError,
} from '../http/errors';
import { HttpRequest } from '../http/request';
import { HttpOkResponse, HttpResponse } from '../http/response';
import { Language, userResolver, UserRole } from '../../domain/entities/User';
import { IHttpController } from '../../application/protocols/http/IHttp';
import {
  IUpdateUserUseCase,
  UpdateUserUseCase,
} from '../../application/usecases/UpdateUserUseCase';
import { IRequestValidator } from '../../application/protocols/validator/IValidator';
import {
  bioValidatorSchema,
  languagesValidatorSchema,
  nameValidatorSchema,
  roleValidatorSchema,
  uuidV4ValidatorSchema,
} from '../validatorSchemas/user/userValidatorSchemas';

import { Logger } from '../../infra/logger/Logger';
import { FastestValidator } from '../../infra/validators/FastestValidator';

type RequestParams = {
  user_id: string;
};

type RequestBodyParameters = {
  name?: string;
  bio?: string;
  role?: UserRole;
  languages?: Language[];
  approved?: boolean;
};

export class UpdateUserController implements IHttpController {
  constructor(
    private readonly logger: Logger,
    private readonly requestValidator: IRequestValidator = new FastestValidator(),
    private readonly updateUserUseCase: IUpdateUserUseCase = new UpdateUserUseCase(
      logger,
    ),
  ) {
    this.logger = this.logger.getChild('UpdateUserController');
  }

  public async handle(request: HttpRequest): Promise<HttpResponse | HttpError> {
    const { user_id } = request.params as RequestParams;
    const { name, bio, role } = request.body as RequestBodyParameters;

    const requestValidation = await this.requestValidator.validate(
      {
        user_id,
        name,
        bio,
        role,
      },
      {
        user_id: uuidV4ValidatorSchema({ optional: false }),
        name: nameValidatorSchema({ optional: true }),
        bio: bioValidatorSchema({ optional: true }),
        role: roleValidatorSchema({ optional: true }),
        languages: languagesValidatorSchema({ optional: true }),
      },
    );

    if (!requestValidation.isValid) {
      return new HttpBadRequestError(requestValidation.errors);
    }

    const to_update: { [index: string]: unknown } = {
      name,
      bio,
      role,
    };

    Object.keys(to_update).forEach(
      key => to_update[key] === undefined && delete to_update[key],
    );

    const user = await this.updateUserUseCase.execute({
      user_id,
      to_update,
    });

    if (!user) {
      return new HttpNotFoundError('USER_NOT_FOUND');
    }

    return new HttpOkResponse(userResolver(user));
  }
}
