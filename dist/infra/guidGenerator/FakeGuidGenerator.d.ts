import { IGuidGenerator } from '../../application/protocols/guid/IGuidGenerator';
export declare class FakeGuidGenerator implements IGuidGenerator {
    uuidV4(): string;
}
