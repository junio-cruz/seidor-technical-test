export declare const uuidV4ValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    version: number;
    optional: boolean;
};
export declare const nameValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    optional: boolean;
};
export declare const emailValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    optional: boolean;
};
export declare const passwordValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    pattern: string;
    optional: boolean;
};
export declare const roleValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    enum: string[];
    optional: boolean;
};
export declare const bioValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    max: number;
    convert: boolean;
    optional: boolean;
};
export declare const pageValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    integer: boolean;
    min: number;
    convert: boolean;
    optional: boolean;
};
export declare const pageSizeValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    integer: boolean;
    min: number;
    convert: boolean;
    optional: boolean;
};
export declare const photoValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    optional: boolean;
};
export declare const photoExtensionValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    enum: string[];
    optional: boolean;
};
export declare const stringValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    optional: boolean;
};
export declare const booleanValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    convert: boolean;
    optional: boolean;
};
export declare const languagesValidatorSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    items: {
        type: string;
        enum: string[];
        convert: boolean;
    };
    convert: boolean;
    optional: boolean;
};
export declare const approvedAtSchema: ({ optional }: {
    optional?: boolean | undefined;
}) => {
    type: string;
    convert: boolean;
    nullable: boolean;
    optional: boolean;
};
