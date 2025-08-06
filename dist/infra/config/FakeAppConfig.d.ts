import { IAppConfig } from '../../application/protocols/config/IAppConfig';
export declare class FakeAppConfig implements IAppConfig {
    getValue(key: string): string;
    isLocal(): boolean;
    isProduction(): boolean;
}
