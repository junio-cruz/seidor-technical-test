import { IRequestValidator, ValidateResponse } from '../../application/protocols/validator/IValidator';
export declare class FastestValidator implements IRequestValidator {
    validate(parameters: any, schema: any): Promise<ValidateResponse>;
}
