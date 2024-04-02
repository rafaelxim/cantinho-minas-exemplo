// https://the-guild.dev/graphql/codegen
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  JSON: { input: any; output: any };
  DateTime: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type Pagination = {
  __typename?: "Pagination";
  total: Scalars["Int"]["output"];
  page: Scalars["Int"]["output"];
  pageSize: Scalars["Int"]["output"];
  pageCount: Scalars["Int"]["output"];
};

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  not?: InputMaybe<IdFilterInput>;
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  eqi?: InputMaybe<Scalars["ID"]["input"]>;
  ne?: InputMaybe<Scalars["ID"]["input"]>;
  nei?: InputMaybe<Scalars["ID"]["input"]>;
  startsWith?: InputMaybe<Scalars["ID"]["input"]>;
  endsWith?: InputMaybe<Scalars["ID"]["input"]>;
  contains?: InputMaybe<Scalars["ID"]["input"]>;
  notContains?: InputMaybe<Scalars["ID"]["input"]>;
  containsi?: InputMaybe<Scalars["ID"]["input"]>;
  notContainsi?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  gte?: InputMaybe<Scalars["ID"]["input"]>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  lte?: InputMaybe<Scalars["ID"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  not?: InputMaybe<BooleanFilterInput>;
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  eqi?: InputMaybe<Scalars["Boolean"]["input"]>;
  ne?: InputMaybe<Scalars["Boolean"]["input"]>;
  nei?: InputMaybe<Scalars["Boolean"]["input"]>;
  startsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
  contains?: InputMaybe<Scalars["Boolean"]["input"]>;
  notContains?: InputMaybe<Scalars["Boolean"]["input"]>;
  containsi?: InputMaybe<Scalars["Boolean"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  not?: InputMaybe<StringFilterInput>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  eqi?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nei?: InputMaybe<Scalars["String"]["input"]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  notContains?: InputMaybe<Scalars["String"]["input"]>;
  containsi?: InputMaybe<Scalars["String"]["input"]>;
  notContainsi?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  not?: InputMaybe<IntFilterInput>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  eqi?: InputMaybe<Scalars["Int"]["input"]>;
  ne?: InputMaybe<Scalars["Int"]["input"]>;
  nei?: InputMaybe<Scalars["Int"]["input"]>;
  startsWith?: InputMaybe<Scalars["Int"]["input"]>;
  endsWith?: InputMaybe<Scalars["Int"]["input"]>;
  contains?: InputMaybe<Scalars["Int"]["input"]>;
  notContains?: InputMaybe<Scalars["Int"]["input"]>;
  containsi?: InputMaybe<Scalars["Int"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  not?: InputMaybe<FloatFilterInput>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  eqi?: InputMaybe<Scalars["Float"]["input"]>;
  ne?: InputMaybe<Scalars["Float"]["input"]>;
  nei?: InputMaybe<Scalars["Float"]["input"]>;
  startsWith?: InputMaybe<Scalars["Float"]["input"]>;
  endsWith?: InputMaybe<Scalars["Float"]["input"]>;
  contains?: InputMaybe<Scalars["Float"]["input"]>;
  notContains?: InputMaybe<Scalars["Float"]["input"]>;
  containsi?: InputMaybe<Scalars["Float"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  not?: InputMaybe<DateTimeFilterInput>;
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  eqi?: InputMaybe<Scalars["DateTime"]["input"]>;
  ne?: InputMaybe<Scalars["DateTime"]["input"]>;
  nei?: InputMaybe<Scalars["DateTime"]["input"]>;
  startsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
  contains?: InputMaybe<Scalars["DateTime"]["input"]>;
  notContains?: InputMaybe<Scalars["DateTime"]["input"]>;
  containsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  not?: InputMaybe<JsonFilterInput>;
  eq?: InputMaybe<Scalars["JSON"]["input"]>;
  eqi?: InputMaybe<Scalars["JSON"]["input"]>;
  ne?: InputMaybe<Scalars["JSON"]["input"]>;
  nei?: InputMaybe<Scalars["JSON"]["input"]>;
  startsWith?: InputMaybe<Scalars["JSON"]["input"]>;
  endsWith?: InputMaybe<Scalars["JSON"]["input"]>;
  contains?: InputMaybe<Scalars["JSON"]["input"]>;
  notContains?: InputMaybe<Scalars["JSON"]["input"]>;
  containsi?: InputMaybe<Scalars["JSON"]["input"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]["input"]>;
  gt?: InputMaybe<Scalars["JSON"]["input"]>;
  gte?: InputMaybe<Scalars["JSON"]["input"]>;
  lt?: InputMaybe<Scalars["JSON"]["input"]>;
  lte?: InputMaybe<Scalars["JSON"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
};

export type UploadFileFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  alternativeText?: InputMaybe<StringFilterInput>;
  caption?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  not?: InputMaybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  alternativeText?: InputMaybe<Scalars["String"]["input"]>;
  caption?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  formats?: InputMaybe<Scalars["JSON"]["input"]>;
  hash?: InputMaybe<Scalars["String"]["input"]>;
  ext?: InputMaybe<Scalars["String"]["input"]>;
  mime?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  previewUrl?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]["input"]>;
  folder?: InputMaybe<Scalars["ID"]["input"]>;
  folderPath?: InputMaybe<Scalars["String"]["input"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  name: Scalars["String"]["output"];
  alternativeText?: Maybe<Scalars["String"]["output"]>;
  caption?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  formats?: Maybe<Scalars["JSON"]["output"]>;
  hash: Scalars["String"]["output"];
  ext?: Maybe<Scalars["String"]["output"]>;
  mime: Scalars["String"]["output"];
  size: Scalars["Float"]["output"];
  url: Scalars["String"]["output"];
  previewUrl?: Maybe<Scalars["String"]["output"]>;
  provider: Scalars["String"]["output"];
  provider_metadata?: Maybe<Scalars["JSON"]["output"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UploadFileEntity = {
  __typename?: "UploadFileEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<UploadFile>;
};

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection";
  data: Array<UploadFileEntity>;
};

export type UploadFolderFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  not?: InputMaybe<UploadFolderFiltersInput>;
};

export type UploadFolderInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  pathId?: InputMaybe<Scalars["Int"]["input"]>;
  parent?: InputMaybe<Scalars["ID"]["input"]>;
  children?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  path?: InputMaybe<Scalars["String"]["input"]>;
};

export type UploadFolder = {
  __typename?: "UploadFolder";
  name: Scalars["String"]["output"];
  pathId: Scalars["Int"]["output"];
  parent?: Maybe<UploadFolderEntityResponse>;
  children?: Maybe<UploadFolderRelationResponseCollection>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  path: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UploadFolderEntity = {
  __typename?: "UploadFolderEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<UploadFolder>;
};

export type UploadFolderEntityResponse = {
  __typename?: "UploadFolderEntityResponse";
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: "UploadFolderEntityResponseCollection";
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: "UploadFolderRelationResponseCollection";
  data: Array<UploadFolderEntity>;
};

export type I18NLocaleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  name?: Maybe<Scalars["String"]["output"]>;
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<I18NLocale>;
};

export type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsPermissionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  action?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"]["output"];
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<UsersPermissionsPermission>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  name: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  password?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  username?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
  confirmationToken?: InputMaybe<Scalars["String"]["input"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>;
  blocked?: InputMaybe<Scalars["Boolean"]["input"]>;
  role?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  username: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  provider?: Maybe<Scalars["String"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
};

export type AboutFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  Titulo1?: InputMaybe<StringFilterInput>;
  paragrafo1?: InputMaybe<StringFilterInput>;
  paragrafo2?: InputMaybe<StringFilterInput>;
  titulo2?: InputMaybe<StringFilterInput>;
  titulo3?: InputMaybe<StringFilterInput>;
  paragrafo3?: InputMaybe<StringFilterInput>;
  template?: InputMaybe<TemplateFiltersInput>;
  cardapioDesc?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AboutFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<AboutFiltersInput>>>;
  not?: InputMaybe<AboutFiltersInput>;
};

export type AboutInput = {
  Titulo1?: InputMaybe<Scalars["String"]["input"]>;
  paragrafo1?: InputMaybe<Scalars["String"]["input"]>;
  paragrafo2?: InputMaybe<Scalars["String"]["input"]>;
  titulo2?: InputMaybe<Scalars["String"]["input"]>;
  titulo3?: InputMaybe<Scalars["String"]["input"]>;
  paragrafo3?: InputMaybe<Scalars["String"]["input"]>;
  img1_520x540?: InputMaybe<Scalars["ID"]["input"]>;
  img2_410x390?: InputMaybe<Scalars["ID"]["input"]>;
  img3_630x460?: InputMaybe<Scalars["ID"]["input"]>;
  img4_300x300?: InputMaybe<Scalars["ID"]["input"]>;
  template?: InputMaybe<Scalars["ID"]["input"]>;
  cardapioDesc?: InputMaybe<Scalars["String"]["input"]>;
  cardapioImg?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type About = {
  __typename?: "About";
  Titulo1?: Maybe<Scalars["String"]["output"]>;
  paragrafo1?: Maybe<Scalars["String"]["output"]>;
  paragrafo2?: Maybe<Scalars["String"]["output"]>;
  titulo2?: Maybe<Scalars["String"]["output"]>;
  titulo3?: Maybe<Scalars["String"]["output"]>;
  paragrafo3?: Maybe<Scalars["String"]["output"]>;
  img1_520x540?: Maybe<UploadFileEntityResponse>;
  img2_410x390?: Maybe<UploadFileEntityResponse>;
  img3_630x460?: Maybe<UploadFileEntityResponse>;
  img4_300x300?: Maybe<UploadFileEntityResponse>;
  template?: Maybe<TemplateEntityResponse>;
  cardapioDesc?: Maybe<Scalars["String"]["output"]>;
  cardapioImg?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AboutEntity = {
  __typename?: "AboutEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<About>;
};

export type AboutEntityResponse = {
  __typename?: "AboutEntityResponse";
  data?: Maybe<AboutEntity>;
};

export type AboutEntityResponseCollection = {
  __typename?: "AboutEntityResponseCollection";
  data: Array<AboutEntity>;
  meta: ResponseCollectionMeta;
};

export type ChefFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  facebook?: InputMaybe<StringFilterInput>;
  twitter?: InputMaybe<StringFilterInput>;
  instagram?: InputMaybe<StringFilterInput>;
  nome?: InputMaybe<StringFilterInput>;
  cargo?: InputMaybe<StringFilterInput>;
  detalhes?: InputMaybe<StringFilterInput>;
  habilidade1?: InputMaybe<StringFilterInput>;
  habilidade2?: InputMaybe<StringFilterInput>;
  habilidade3?: InputMaybe<StringFilterInput>;
  pctHabilidade1?: InputMaybe<IntFilterInput>;
  pctHabilidade2?: InputMaybe<IntFilterInput>;
  pctHabilidade3?: InputMaybe<IntFilterInput>;
  template?: InputMaybe<TemplateFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ChefFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ChefFiltersInput>>>;
  not?: InputMaybe<ChefFiltersInput>;
};

export type ChefInput = {
  facebook?: InputMaybe<Scalars["String"]["input"]>;
  twitter?: InputMaybe<Scalars["String"]["input"]>;
  instagram?: InputMaybe<Scalars["String"]["input"]>;
  nome?: InputMaybe<Scalars["String"]["input"]>;
  img_410x410?: InputMaybe<Scalars["ID"]["input"]>;
  cargo?: InputMaybe<Scalars["String"]["input"]>;
  detalhes?: InputMaybe<Scalars["String"]["input"]>;
  habilidade1?: InputMaybe<Scalars["String"]["input"]>;
  habilidade2?: InputMaybe<Scalars["String"]["input"]>;
  habilidade3?: InputMaybe<Scalars["String"]["input"]>;
  pctHabilidade1?: InputMaybe<Scalars["Int"]["input"]>;
  pctHabilidade2?: InputMaybe<Scalars["Int"]["input"]>;
  pctHabilidade3?: InputMaybe<Scalars["Int"]["input"]>;
  template?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Chef = {
  __typename?: "Chef";
  facebook?: Maybe<Scalars["String"]["output"]>;
  twitter?: Maybe<Scalars["String"]["output"]>;
  instagram?: Maybe<Scalars["String"]["output"]>;
  nome?: Maybe<Scalars["String"]["output"]>;
  img_410x410?: Maybe<UploadFileEntityResponse>;
  cargo?: Maybe<Scalars["String"]["output"]>;
  detalhes?: Maybe<Scalars["String"]["output"]>;
  habilidade1?: Maybe<Scalars["String"]["output"]>;
  habilidade2?: Maybe<Scalars["String"]["output"]>;
  habilidade3?: Maybe<Scalars["String"]["output"]>;
  pctHabilidade1?: Maybe<Scalars["Int"]["output"]>;
  pctHabilidade2?: Maybe<Scalars["Int"]["output"]>;
  pctHabilidade3?: Maybe<Scalars["Int"]["output"]>;
  template?: Maybe<TemplateEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ChefEntity = {
  __typename?: "ChefEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<Chef>;
};

export type ChefEntityResponse = {
  __typename?: "ChefEntityResponse";
  data?: Maybe<ChefEntity>;
};

export type ChefEntityResponseCollection = {
  __typename?: "ChefEntityResponseCollection";
  data: Array<ChefEntity>;
  meta: ResponseCollectionMeta;
};

export type ChefRelationResponseCollection = {
  __typename?: "ChefRelationResponseCollection";
  data: Array<ChefEntity>;
};

export type MenuFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  template?: InputMaybe<TemplateFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  not?: InputMaybe<MenuFiltersInput>;
};

export type MenuInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  template?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Menu = {
  __typename?: "Menu";
  name: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
  template?: Maybe<TemplateEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type MenuEntity = {
  __typename?: "MenuEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<Menu>;
};

export type MenuEntityResponse = {
  __typename?: "MenuEntityResponse";
  data?: Maybe<MenuEntity>;
};

export type MenuEntityResponseCollection = {
  __typename?: "MenuEntityResponseCollection";
  data: Array<MenuEntity>;
  meta: ResponseCollectionMeta;
};

export type MenuRelationResponseCollection = {
  __typename?: "MenuRelationResponseCollection";
  data: Array<MenuEntity>;
};

export type MenuItemFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  price?: InputMaybe<IntFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  menu_section?: InputMaybe<MenuSectionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<MenuItemFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<MenuItemFiltersInput>>>;
  not?: InputMaybe<MenuItemFiltersInput>;
};

export type MenuItemInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  menu_section?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MenuItem = {
  __typename?: "MenuItem";
  name?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  menu_section?: Maybe<MenuSectionEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type MenuItemEntity = {
  __typename?: "MenuItemEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<MenuItem>;
};

export type MenuItemEntityResponse = {
  __typename?: "MenuItemEntityResponse";
  data?: Maybe<MenuItemEntity>;
};

export type MenuItemEntityResponseCollection = {
  __typename?: "MenuItemEntityResponseCollection";
  data: Array<MenuItemEntity>;
  meta: ResponseCollectionMeta;
};

export type MenuItemRelationResponseCollection = {
  __typename?: "MenuItemRelationResponseCollection";
  data: Array<MenuItemEntity>;
};

export type MenuSectionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  template?: InputMaybe<TemplateFiltersInput>;
  menu_items?: InputMaybe<MenuItemFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<MenuSectionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<MenuSectionFiltersInput>>>;
  not?: InputMaybe<MenuSectionFiltersInput>;
};

export type MenuSectionInput = {
  label?: InputMaybe<Scalars["String"]["input"]>;
  template?: InputMaybe<Scalars["ID"]["input"]>;
  menu_items?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MenuSection = {
  __typename?: "MenuSection";
  label?: Maybe<Scalars["String"]["output"]>;
  template?: Maybe<TemplateEntityResponse>;
  menu_items?: Maybe<MenuItemRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type MenuSectionMenu_ItemsArgs = {
  filters?: InputMaybe<MenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type MenuSectionEntity = {
  __typename?: "MenuSectionEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<MenuSection>;
};

export type MenuSectionEntityResponse = {
  __typename?: "MenuSectionEntityResponse";
  data?: Maybe<MenuSectionEntity>;
};

export type MenuSectionEntityResponseCollection = {
  __typename?: "MenuSectionEntityResponseCollection";
  data: Array<MenuSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type MenuSectionRelationResponseCollection = {
  __typename?: "MenuSectionRelationResponseCollection";
  data: Array<MenuSectionEntity>;
};

export type SingleDataRestaurantOneFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  diferencial1?: InputMaybe<StringFilterInput>;
  diferencial2?: InputMaybe<StringFilterInput>;
  diferencial3?: InputMaybe<StringFilterInput>;
  descDiferencial1?: InputMaybe<StringFilterInput>;
  descDiferencial2?: InputMaybe<StringFilterInput>;
  descDiferencial3?: InputMaybe<StringFilterInput>;
  paralax1_title?: InputMaybe<StringFilterInput>;
  template?: InputMaybe<TemplateFiltersInput>;
  cardapioDesc?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  facebook?: InputMaybe<StringFilterInput>;
  twitter?: InputMaybe<StringFilterInput>;
  instagram?: InputMaybe<StringFilterInput>;
  youtube?: InputMaybe<StringFilterInput>;
  reservaText?: InputMaybe<StringFilterInput>;
  galeriaText?: InputMaybe<StringFilterInput>;
  endereco?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  mapsLink?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SingleDataRestaurantOneFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<SingleDataRestaurantOneFiltersInput>>>;
  not?: InputMaybe<SingleDataRestaurantOneFiltersInput>;
};

export type SingleDataRestaurantOneInput = {
  diferencial1?: InputMaybe<Scalars["String"]["input"]>;
  diferencial2?: InputMaybe<Scalars["String"]["input"]>;
  diferencial3?: InputMaybe<Scalars["String"]["input"]>;
  descDiferencial1?: InputMaybe<Scalars["String"]["input"]>;
  descDiferencial2?: InputMaybe<Scalars["String"]["input"]>;
  descDiferencial3?: InputMaybe<Scalars["String"]["input"]>;
  paralax1_title?: InputMaybe<Scalars["String"]["input"]>;
  paralax1_img_1540x645?: InputMaybe<Scalars["ID"]["input"]>;
  paralax1_video?: InputMaybe<Scalars["ID"]["input"]>;
  template?: InputMaybe<Scalars["ID"]["input"]>;
  cardapioDesc?: InputMaybe<Scalars["String"]["input"]>;
  cardapioImg_630x500?: InputMaybe<Scalars["ID"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  facebook?: InputMaybe<Scalars["String"]["input"]>;
  twitter?: InputMaybe<Scalars["String"]["input"]>;
  instagram?: InputMaybe<Scalars["String"]["input"]>;
  youtube?: InputMaybe<Scalars["String"]["input"]>;
  logo250x44?: InputMaybe<Scalars["ID"]["input"]>;
  reservaText?: InputMaybe<Scalars["String"]["input"]>;
  reservaImg_1540x798?: InputMaybe<Scalars["ID"]["input"]>;
  galeriaText?: InputMaybe<Scalars["String"]["input"]>;
  galeriaImages?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  endereco?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  mapsLink?: InputMaybe<Scalars["String"]["input"]>;
  footerImg_1540x652?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type SingleDataRestaurantOne = {
  __typename?: "SingleDataRestaurantOne";
  diferencial1?: Maybe<Scalars["String"]["output"]>;
  diferencial2?: Maybe<Scalars["String"]["output"]>;
  diferencial3?: Maybe<Scalars["String"]["output"]>;
  descDiferencial1?: Maybe<Scalars["String"]["output"]>;
  descDiferencial2?: Maybe<Scalars["String"]["output"]>;
  descDiferencial3?: Maybe<Scalars["String"]["output"]>;
  paralax1_title?: Maybe<Scalars["String"]["output"]>;
  paralax1_img_1540x645?: Maybe<UploadFileEntityResponse>;
  paralax1_video?: Maybe<UploadFileEntityResponse>;
  template?: Maybe<TemplateEntityResponse>;
  cardapioDesc?: Maybe<Scalars["String"]["output"]>;
  cardapioImg_630x500?: Maybe<UploadFileEntityResponse>;
  phone?: Maybe<Scalars["String"]["output"]>;
  facebook?: Maybe<Scalars["String"]["output"]>;
  twitter?: Maybe<Scalars["String"]["output"]>;
  instagram?: Maybe<Scalars["String"]["output"]>;
  youtube?: Maybe<Scalars["String"]["output"]>;
  logo250x44?: Maybe<UploadFileEntityResponse>;
  reservaText?: Maybe<Scalars["String"]["output"]>;
  reservaImg_1540x798?: Maybe<UploadFileEntityResponse>;
  galeriaText?: Maybe<Scalars["String"]["output"]>;
  galeriaImages?: Maybe<UploadFileRelationResponseCollection>;
  endereco?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  mapsLink?: Maybe<Scalars["String"]["output"]>;
  footerImg_1540x652?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type SingleDataRestaurantOneGaleriaImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SingleDataRestaurantOneEntity = {
  __typename?: "SingleDataRestaurantOneEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<SingleDataRestaurantOne>;
};

export type SingleDataRestaurantOneEntityResponse = {
  __typename?: "SingleDataRestaurantOneEntityResponse";
  data?: Maybe<SingleDataRestaurantOneEntity>;
};

export type SingleDataRestaurantOneEntityResponseCollection = {
  __typename?: "SingleDataRestaurantOneEntityResponseCollection";
  data: Array<SingleDataRestaurantOneEntity>;
  meta: ResponseCollectionMeta;
};

export enum Enum_Slider_Type {
  Video = "video",
  Imagem = "imagem",
}

export type SliderFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  mainTitle?: InputMaybe<StringFilterInput>;
  subTitle?: InputMaybe<StringFilterInput>;
  template?: InputMaybe<TemplateFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SliderFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<SliderFiltersInput>>>;
  not?: InputMaybe<SliderFiltersInput>;
};

export type SliderInput = {
  type?: InputMaybe<Enum_Slider_Type>;
  media1540x940?: InputMaybe<Scalars["ID"]["input"]>;
  mainTitle?: InputMaybe<Scalars["String"]["input"]>;
  subTitle?: InputMaybe<Scalars["String"]["input"]>;
  template?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Slider = {
  __typename?: "Slider";
  type: Enum_Slider_Type;
  media1540x940: UploadFileEntityResponse;
  mainTitle: Scalars["String"]["output"];
  subTitle: Scalars["String"]["output"];
  template?: Maybe<TemplateEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type SliderEntity = {
  __typename?: "SliderEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<Slider>;
};

export type SliderEntityResponse = {
  __typename?: "SliderEntityResponse";
  data?: Maybe<SliderEntity>;
};

export type SliderEntityResponseCollection = {
  __typename?: "SliderEntityResponseCollection";
  data: Array<SliderEntity>;
  meta: ResponseCollectionMeta;
};

export type SliderRelationResponseCollection = {
  __typename?: "SliderRelationResponseCollection";
  data: Array<SliderEntity>;
};

export type TemplateFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  menus?: InputMaybe<MenuFiltersInput>;
  chefs?: InputMaybe<ChefFiltersInput>;
  sliders?: InputMaybe<SliderFiltersInput>;
  about?: InputMaybe<AboutFiltersInput>;
  single_data_restaurant_one?: InputMaybe<SingleDataRestaurantOneFiltersInput>;
  menu_sections?: InputMaybe<MenuSectionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TemplateFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<TemplateFiltersInput>>>;
  not?: InputMaybe<TemplateFiltersInput>;
};

export type TemplateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  menus?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  chefs?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  sliders?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  about?: InputMaybe<Scalars["ID"]["input"]>;
  single_data_restaurant_one?: InputMaybe<Scalars["ID"]["input"]>;
  menu_sections?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Template = {
  __typename?: "Template";
  name: Scalars["String"]["output"];
  menus?: Maybe<MenuRelationResponseCollection>;
  chefs?: Maybe<ChefRelationResponseCollection>;
  sliders?: Maybe<SliderRelationResponseCollection>;
  about?: Maybe<AboutEntityResponse>;
  single_data_restaurant_one?: Maybe<SingleDataRestaurantOneEntityResponse>;
  menu_sections?: Maybe<MenuSectionRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TemplateMenusArgs = {
  filters?: InputMaybe<MenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type TemplateChefsArgs = {
  filters?: InputMaybe<ChefFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type TemplateSlidersArgs = {
  filters?: InputMaybe<SliderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type TemplateMenu_SectionsArgs = {
  filters?: InputMaybe<MenuSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type TemplateEntity = {
  __typename?: "TemplateEntity";
  id?: Maybe<Scalars["ID"]["output"]>;
  attributes?: Maybe<Template>;
};

export type TemplateEntityResponse = {
  __typename?: "TemplateEntityResponse";
  data?: Maybe<TemplateEntity>;
};

export type TemplateEntityResponseCollection = {
  __typename?: "TemplateEntityResponseCollection";
  data: Array<TemplateEntity>;
  meta: ResponseCollectionMeta;
};

export type GenericMorph =
  | UploadFile
  | UploadFolder
  | I18NLocale
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | About
  | Chef
  | Menu
  | MenuItem
  | MenuSection
  | SingleDataRestaurantOne
  | Slider
  | Template;

export type FileInfoInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  alternativeText?: InputMaybe<Scalars["String"]["input"]>;
  caption?: InputMaybe<Scalars["String"]["input"]>;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  id: Scalars["ID"]["output"];
  username: Scalars["String"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  provider?: Scalars["String"]["input"];
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]["output"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type PaginationArg = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
  start?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  about?: Maybe<AboutEntityResponse>;
  abouts?: Maybe<AboutEntityResponseCollection>;
  chef?: Maybe<ChefEntityResponse>;
  chefs?: Maybe<ChefEntityResponseCollection>;
  menu?: Maybe<MenuEntityResponse>;
  menus?: Maybe<MenuEntityResponseCollection>;
  menuItem?: Maybe<MenuItemEntityResponse>;
  menuItems?: Maybe<MenuItemEntityResponseCollection>;
  menuSection?: Maybe<MenuSectionEntityResponse>;
  menuSections?: Maybe<MenuSectionEntityResponseCollection>;
  singleDataRestaurantOne?: Maybe<SingleDataRestaurantOneEntityResponse>;
  singleDataRestaurantOnes?: Maybe<SingleDataRestaurantOneEntityResponseCollection>;
  slider?: Maybe<SliderEntityResponse>;
  sliders?: Maybe<SliderEntityResponseCollection>;
  template?: Maybe<TemplateEntityResponse>;
  templates?: Maybe<TemplateEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryAboutArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryAboutsArgs = {
  filters?: InputMaybe<AboutFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryChefArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryChefsArgs = {
  filters?: InputMaybe<ChefFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryMenuArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryMenusArgs = {
  filters?: InputMaybe<MenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryMenuItemArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryMenuItemsArgs = {
  filters?: InputMaybe<MenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryMenuSectionArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryMenuSectionsArgs = {
  filters?: InputMaybe<MenuSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QuerySingleDataRestaurantOneArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QuerySingleDataRestaurantOnesArgs = {
  filters?: InputMaybe<SingleDataRestaurantOneFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QuerySliderArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QuerySlidersArgs = {
  filters?: InputMaybe<SliderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryTemplateArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryTemplatesArgs = {
  filters?: InputMaybe<TemplateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createAbout?: Maybe<AboutEntityResponse>;
  updateAbout?: Maybe<AboutEntityResponse>;
  deleteAbout?: Maybe<AboutEntityResponse>;
  createChef?: Maybe<ChefEntityResponse>;
  updateChef?: Maybe<ChefEntityResponse>;
  deleteChef?: Maybe<ChefEntityResponse>;
  createMenu?: Maybe<MenuEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  createMenuItem?: Maybe<MenuItemEntityResponse>;
  updateMenuItem?: Maybe<MenuItemEntityResponse>;
  deleteMenuItem?: Maybe<MenuItemEntityResponse>;
  createMenuSection?: Maybe<MenuSectionEntityResponse>;
  updateMenuSection?: Maybe<MenuSectionEntityResponse>;
  deleteMenuSection?: Maybe<MenuSectionEntityResponse>;
  createSingleDataRestaurantOne?: Maybe<SingleDataRestaurantOneEntityResponse>;
  updateSingleDataRestaurantOne?: Maybe<SingleDataRestaurantOneEntityResponse>;
  deleteSingleDataRestaurantOne?: Maybe<SingleDataRestaurantOneEntityResponse>;
  createSlider?: Maybe<SliderEntityResponse>;
  updateSlider?: Maybe<SliderEntityResponse>;
  deleteSlider?: Maybe<SliderEntityResponse>;
  createTemplate?: Maybe<TemplateEntityResponse>;
  updateTemplate?: Maybe<TemplateEntityResponse>;
  deleteTemplate?: Maybe<TemplateEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationUpdateUploadFileArgs = {
  id: Scalars["ID"]["input"];
  data: UploadFileInput;
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationUpdateUploadFolderArgs = {
  id: Scalars["ID"]["input"];
  data: UploadFolderInput;
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateAboutArgs = {
  data: AboutInput;
};

export type MutationUpdateAboutArgs = {
  id: Scalars["ID"]["input"];
  data: AboutInput;
};

export type MutationDeleteAboutArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateChefArgs = {
  data: ChefInput;
};

export type MutationUpdateChefArgs = {
  id: Scalars["ID"]["input"];
  data: ChefInput;
};

export type MutationDeleteChefArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateMenuArgs = {
  data: MenuInput;
};

export type MutationUpdateMenuArgs = {
  id: Scalars["ID"]["input"];
  data: MenuInput;
};

export type MutationDeleteMenuArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateMenuItemArgs = {
  data: MenuItemInput;
};

export type MutationUpdateMenuItemArgs = {
  id: Scalars["ID"]["input"];
  data: MenuItemInput;
};

export type MutationDeleteMenuItemArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateMenuSectionArgs = {
  data: MenuSectionInput;
};

export type MutationUpdateMenuSectionArgs = {
  id: Scalars["ID"]["input"];
  data: MenuSectionInput;
};

export type MutationDeleteMenuSectionArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateSingleDataRestaurantOneArgs = {
  data: SingleDataRestaurantOneInput;
};

export type MutationUpdateSingleDataRestaurantOneArgs = {
  id: Scalars["ID"]["input"];
  data: SingleDataRestaurantOneInput;
};

export type MutationDeleteSingleDataRestaurantOneArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateSliderArgs = {
  data: SliderInput;
};

export type MutationUpdateSliderArgs = {
  id: Scalars["ID"]["input"];
  data: SliderInput;
};

export type MutationDeleteSliderArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateTemplateArgs = {
  data: TemplateInput;
};

export type MutationUpdateTemplateArgs = {
  id: Scalars["ID"]["input"];
  data: TemplateInput;
};

export type MutationDeleteTemplateArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUploadArgs = {
  refId?: InputMaybe<Scalars["ID"]["input"]>;
  ref?: InputMaybe<Scalars["String"]["input"]>;
  field?: InputMaybe<Scalars["String"]["input"]>;
  info?: InputMaybe<FileInfoInput>;
  file: Scalars["Upload"]["input"];
};

export type MutationMultipleUploadArgs = {
  refId?: InputMaybe<Scalars["ID"]["input"]>;
  ref?: InputMaybe<Scalars["String"]["input"]>;
  field?: InputMaybe<Scalars["String"]["input"]>;
  files: Array<InputMaybe<Scalars["Upload"]["input"]>>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"]["input"];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationRemoveFileArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"];
  data: UsersPermissionsRoleInput;
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"];
  data: UsersPermissionsUserInput;
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
  code: Scalars["String"]["input"];
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]["input"];
};
