import { IAppConfig } from '../../application/protocols/config/IAppConfig';
export declare class AppConfig implements IAppConfig {
    private readonly configValues;
    constructor();
    getValue(key: string): string;
    isLocal(): boolean;
    isProduction(): boolean;
}
