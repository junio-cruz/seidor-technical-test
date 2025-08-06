import { IRequestValidator, ValidateResponse } from '../../application/protocols/validator/IValidator';
export declare class FakeValidator implements IRequestValidator {
    validate(parameters: object, schema: any): Promise<ValidateResponse>;
}
