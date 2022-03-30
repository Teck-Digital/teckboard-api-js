---
id: "Resources.UserResource"
title: "Class: UserResource"
sidebar_label: "UserResource"
custom_edit_url: null
---

[Resources](../modules/Resources.md).UserResource

## Hierarchy

- `default`<`v1`\>

  ↳ **`UserResource`**

## Constructors

### constructor

• **new UserResource**(`api`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `default` |

#### Inherited from

Resource<v1\>.constructor

#### Defined in

node_modules/@teckboard-api/core/resource.d.ts:4

## Accessors

### baseUri

• `get` **baseUri**(): `string`

#### Returns

`string`

#### Defined in

[resources/auth/user.ts:13](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/resources/auth/user.ts#L13)

## Methods

### delete

▸ **delete**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[resources/auth/user.ts:52](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/resources/auth/user.ts#L52)

___

### get

▸ **get**(): `Promise`<[`AuthUserModel`](Models.AuthUserModel.md)\>

#### Returns

`Promise`<[`AuthUserModel`](Models.AuthUserModel.md)\>

#### Defined in

[resources/auth/user.ts:17](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/resources/auth/user.ts#L17)

___

### update

▸ **update**(`user`): `Promise`<[`AuthUserModel`](Models.AuthUserModel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `Partial`<[`AuthUserModel`](Models.AuthUserModel.md)\> |

#### Returns

`Promise`<[`AuthUserModel`](Models.AuthUserModel.md)\>

#### Defined in

[resources/auth/user.ts:44](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/resources/auth/user.ts#L44)

___

### updateModel

▸ **updateModel**(`diff`): `Promise`<`AxiosResponse`<[`JsonResponse`](../interfaces/endpoint.JsonResponse.md)<[`IAuthUser`](../interfaces/Resources.IAuthUser.md)\>, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `diff` | `Partial`<[`IAuthUser`](../interfaces/Resources.IAuthUser.md)\> |

#### Returns

`Promise`<`AxiosResponse`<[`JsonResponse`](../interfaces/endpoint.JsonResponse.md)<[`IAuthUser`](../interfaces/Resources.IAuthUser.md)\>, `any`\>\>

#### Defined in

[resources/auth/user.ts:25](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/resources/auth/user.ts#L25)
