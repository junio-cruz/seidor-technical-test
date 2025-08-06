export type CreateUploadUrlInput = {
  folder: string;
  object_name: string;
  content_type?: string;
  expires_in?: number;
};

export type DeleteObjectInput = {
  folder: string;
  object_name: string;
};

export type URL = string;

export interface IStorage {
  createUploadUrl(input: CreateUploadUrlInput): Promise<URL>;

  deleteObject(input: DeleteObjectInput): Promise<void>;
}
