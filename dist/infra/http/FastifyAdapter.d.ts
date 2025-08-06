import { FastifyInstance, HTTPMethods } from 'fastify';
import { HttpServer, IHttpController } from '../../application/protocols/http/IHttp';
import { IAppConfig } from '../../application/protocols/config/IAppConfig';
export declare class FastifyAdapter implements HttpServer {
    app: FastifyInstance;
    readonly appConfig: IAppConfig;
    constructor();
    route(method: HTTPMethods, path: string, controller: IHttpController): void;
    run(port: number): Promise<FastifyInstance>;
    close(): Promise<void>;
    getInstance(): FastifyInstance;
}
