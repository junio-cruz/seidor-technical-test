import awsLambdaFastify from '@fastify/aws-lambda';
import { FastifyAdapter } from '../../../infra/http/FastifyAdapter';

import { Logger } from '../../../infra/logger/Logger';
import { logging } from '../../../infra/logger/Manager';
import { AppConfig } from '../../../infra/config/AppConfig';
import { SignInUserController } from '../../../presentation/controllers/auth/SignInUserController';
import { SignUpUserController } from '../../../presentation/controllers/auth/SignUpUserController';
import { ChangePasswordController } from '../../../presentation/controllers/auth/password/ChangePasswordController';

import { GetUserController } from '../../../presentation/controllers/GetUserController';
import { ListUsersController } from '../../../presentation/controllers/ListUsersController';
import { DeleteUserController } from '../../../presentation/controllers/DeleteUserController';
import { UpdateUserController } from '../../../presentation/controllers/UpdateUserController';

import { ControllerErrorHandlerDecorator } from '../../../presentation/decorators/ControllerErrorHandlerDecorator';

const server = new FastifyAdapter();

const appConfig = new AppConfig();
const logger: Logger = logging(appConfig.getValue('LOG_LEVEL')).getLogger(
  'ControllerFactory',
);

export const publicServer = awsLambdaFastify(server.getInstance());

const signInController = new SignInUserController(logger);
const signUpController = new SignUpUserController(logger, appConfig);
const changePasswordController = new ChangePasswordController(logger);

const listUsersController = new ListUsersController(logger);
const getUserController = new GetUserController(logger);
const updateUserController = new UpdateUserController(logger);
const deleteUserController = new DeleteUserController(logger);

server.route(
  'post',
  '/auth/sign-up',
  new ControllerErrorHandlerDecorator(logger, signUpController),
);
server.route(
  'post',
  '/auth/sign-in',
  new ControllerErrorHandlerDecorator(logger, signInController),
);
server.route(
  'patch',
  '/auth/password/change',
  new ControllerErrorHandlerDecorator(logger, changePasswordController),
);

server.route(
    'get',
    '/users',
    new ControllerErrorHandlerDecorator(logger, listUsersController),
);

server.route(
    'get',
    '/users/:user_id',
    new ControllerErrorHandlerDecorator(logger, getUserController),
);
server.route(
    'patch',
    '/users/:user_id',
    new ControllerErrorHandlerDecorator(logger, updateUserController),
);
server.route(
    'delete',
    '/users/:user_id',
    new ControllerErrorHandlerDecorator(logger, deleteUserController),
);

export const app = server;
