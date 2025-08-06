export const uuidV4ValidatorSchema = ({ optional = false }) => ({
  type: 'uuid',
  version: 4,
  optional,
});

export const nameValidatorSchema = ({ optional = false }) => ({
  type: 'string',
  optional,
});

export const emailValidatorSchema = ({ optional = false }) => ({
  type: 'email',
  optional,
});

export const passwordValidatorSchema = ({ optional = false }) => ({
  type: 'string',
  pattern: '^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,99}$',
  optional,
});

export const roleValidatorSchema = ({ optional = false }) => ({
  type: 'string',
  enum: ['fan', 'influencer', 'internal'],
  optional,
});

export const bioValidatorSchema = ({ optional = false }) => ({
  type: 'string',
  max: 150,
  convert: true,
  optional,
});

export const pageValidatorSchema = ({ optional = false }) => ({
  type: 'number',
  integer: true,
  min: 1,
  convert: true,
  optional,
});

export const pageSizeValidatorSchema = ({ optional = false }) => ({
  type: 'number',
  integer: true,
  min: 1,
  convert: true,
  optional,
});

export const photoValidatorSchema = ({ optional = false }) => ({
  type: 'string',
  optional,
});

export const photoExtensionValidatorSchema = ({ optional = false }) => ({
  type: 'string',
  enum: ['jpeg', 'jpg', 'png'],
  optional,
});

export const stringValidatorSchema = ({ optional = false }) => ({
  type: 'string',
  optional,
});

export const booleanValidatorSchema = ({ optional = false }) => ({
  type: 'boolean',
  convert: true,
  optional,
});

export const languagesValidatorSchema = ({ optional = false }) => ({
  type: 'array',
  items: {
    type: 'string',
    enum: ['pt-BR', 'es-ES', 'en-US'],
    convert: true,
  },
  convert: true,
  optional,
});

export const approvedAtSchema = ({ optional = false }) => ({
  type: 'date',
  convert: true,
  nullable: true,
  optional,
});
