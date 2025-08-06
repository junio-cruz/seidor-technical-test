import { HttpRequest } from '../http/request';
import { HttpOkResponse, HttpResponse } from '../http/response';
import { HttpBadRequestError, HttpError } from '../http/errors';
import { IHttpController } from '../../application/protocols/http/IHttp';
import {
  IListUsersUseCase,
  ListUsersUseCase,
} from '../../application/usecases/ListUsersUseCase';
import { IRequestValidator } from '../../application/protocols/validator/IValidator';
import {
  approvedAtSchema,
  booleanValidatorSchema,
  nameValidatorSchema,
  pageSizeValidatorSchema,
  pageValidatorSchema,
  roleValidatorSchema,
} from '../validatorSchemas/user/userValidatorSchemas';
import { User, userResolver, UserRole } from '../../domain/entities/User';

import { Logger } from '../../infra/logger/Logger';
import { FastestValidator } from '../../infra/validators/FastestValidator';

type RequestQueryParameters = {
  name?: string;
  role?: UserRole;
  email_verified?: boolean;
  approved_at?: Date | null | 'null';
  page?: number;
  page_size?: number;
};

export class ListUsersController implements IHttpController {
  constructor(
    private readonly logger: Logger,
    private readonly requestValidator: IRequestValidator = new FastestValidator(),
    private readonly listUsersUseCase: IListUsersUseCase = new ListUsersUseCase(
      logger,
    ),
  ) {
    this.logger = this.logger.getChild('ListUsersController');
  }

  public async handle(request: HttpRequest): Promise<HttpResponse | HttpError> {
    let { name, role, email_verified, approved_at, page, page_size } =
      request.query as RequestQueryParameters;

    if (approved_at === 'null') {
      approved_at = null
    }

    const requestValidation = await this.requestValidator.validate(
      {
        name,
        role,
        email_verified,
        approved_at,
        page,
        page_size,
      },
      {
        name: nameValidatorSchema({ optional: true }),
        role: roleValidatorSchema({ optional: true }),
        email_verified: booleanValidatorSchema({ optional: true }),
        approved_at: approvedAtSchema({ optional: true }),
        page: pageValidatorSchema({ optional: true }),
        pageSize: pageSizeValidatorSchema({ optional: true }),
      },
    );
    if (!requestValidation.isValid) {
      return new HttpBadRequestError(requestValidation.errors);
    }
    const filter: { [index: string]: unknown } = {
      name,
      role,
      email_verified,
      approved_at,
      page,
      page_size,
    };

    Object.keys(filter).forEach(
      key => filter[key] === undefined && delete filter[key],
    );

    const response = await this.listUsersUseCase.execute({
      filter,
      order: {
        [request.query?.orderField || 'created_at']:
          request.query?.orderDirection || 'asc',
      },
      pagination: {
        page: Number(request.query?.page) || 1,
        page_size: Number(request.query?.page_size) || 10,
      },
    });
    return new HttpOkResponse(response);
  }
}
