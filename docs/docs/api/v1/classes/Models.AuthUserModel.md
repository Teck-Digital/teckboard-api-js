---
id: "Models.AuthUserModel"
title: "Class: AuthUserModel"
sidebar_label: "AuthUserModel"
custom_edit_url: null
---

[Models](../modules/Models.md).AuthUserModel

## Hierarchy

- [`ResourceModel`](Models.ResourceModel.md)<[`IAuthUser`](../interfaces/Resources.IAuthUser.md)\>

  ↳ **`AuthUserModel`**

## Implements

- [`IAuthUser`](../interfaces/Resources.IAuthUser.md)

## Constructors

### constructor

• **new AuthUserModel**(`resource`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | [`IAuthUser`](../interfaces/Resources.IAuthUser.md) |

#### Overrides

[ResourceModel](Models.ResourceModel.md).[constructor](Models.ResourceModel.md#constructor)

#### Defined in

[models/AuthUser.ts:26](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L26)

## Properties

### boards

• `Optional` **boards**: [`BoardModel`](Models.BoardModel.md)[]

#### Defined in

[models/AuthUser.ts:25](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L25)

___

### email

• **email**: `string`

#### Implementation of

[IAuthUser](../interfaces/Resources.IAuthUser.md).[email](../interfaces/Resources.IAuthUser.md#email)

#### Defined in

[models/AuthUser.ts:16](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L16)

___

### emitter

• `Readonly` **emitter**: `EventEmitter`

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[emitter](Models.ResourceModel.md#emitter)

#### Defined in

[models/default/Model.ts:30](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L30)

___

### firstname

• **firstname**: `string`

#### Implementation of

[IAuthUser](../interfaces/Resources.IAuthUser.md).[firstname](../interfaces/Resources.IAuthUser.md#firstname)

#### Defined in

[models/AuthUser.ts:17](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L17)

___

### icon

• `Optional` **icon**: `default` \| `Blob`

#### Implementation of

[IAuthUser](../interfaces/Resources.IAuthUser.md).[icon](../interfaces/Resources.IAuthUser.md#icon)

#### Defined in

[models/AuthUser.ts:22](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L22)

___

### id

• **id**: `string`

#### Implementation of

[IAuthUser](../interfaces/Resources.IAuthUser.md).[id](../interfaces/Resources.IAuthUser.md#id)

#### Defined in

[models/AuthUser.ts:15](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L15)

___

### name

• **name**: `string`

#### Implementation of

[IAuthUser](../interfaces/Resources.IAuthUser.md).[name](../interfaces/Resources.IAuthUser.md#name)

#### Defined in

[models/AuthUser.ts:18](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L18)

___

### notifications

• `Optional` **notifications**: [`Pagination`](Models.Pagination.md)<[`NotificationModel`](Models.NotificationModel.md), [`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>\>

#### Defined in

[models/AuthUser.ts:24](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L24)

___

### settings

• **settings**: [`UserSettings`](../interfaces/Resources.UserSettings.md)

#### Implementation of

[IAuthUser](../interfaces/Resources.IAuthUser.md).[settings](../interfaces/Resources.IAuthUser.md#settings)

#### Defined in

[models/AuthUser.ts:21](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L21)

___

### status

• **status**: `number`

#### Implementation of

[IAuthUser](../interfaces/Resources.IAuthUser.md).[status](../interfaces/Resources.IAuthUser.md#status)

#### Defined in

[models/AuthUser.ts:19](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L19)

___

### verified

• **verified**: `boolean`

#### Implementation of

[IAuthUser](../interfaces/Resources.IAuthUser.md).[verified](../interfaces/Resources.IAuthUser.md#verified)

#### Defined in

[models/AuthUser.ts:20](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L20)

## Methods

### batchUpdate

▸ **batchUpdate**(`model`): [`AuthUserModel`](Models.AuthUserModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`IAuthUser`](../interfaces/Resources.IAuthUser.md) |

#### Returns

[`AuthUserModel`](Models.AuthUserModel.md)

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[batchUpdate](Models.ResourceModel.md#batchupdate)

#### Defined in

[models/default/Model.ts:50](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L50)

___

### getAttributes

▸ **getAttributes**(): [`IAuthUser`](../interfaces/Resources.IAuthUser.md)

#### Returns

[`IAuthUser`](../interfaces/Resources.IAuthUser.md)

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[getAttributes](Models.ResourceModel.md#getattributes)

#### Defined in

[models/default/Model.ts:70](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L70)

___

### getBoards

▸ **getBoards**(): `Promise`<[`BoardModel`](Models.BoardModel.md)[]\>

#### Returns

`Promise`<[`BoardModel`](Models.BoardModel.md)[]\>

#### Defined in

[models/AuthUser.ts:36](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L36)

___

### getDifference

▸ **getDifference**(): `ModelPairs`<[`IAuthUser`](../interfaces/Resources.IAuthUser.md)\>

#### Returns

`ModelPairs`<[`IAuthUser`](../interfaces/Resources.IAuthUser.md)\>

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[getDifference](Models.ResourceModel.md#getdifference)

#### Defined in

[models/default/Model.ts:73](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L73)

___

### getDifferentObject

▸ **getDifferentObject**(): `Partial`<[`IAuthUser`](../interfaces/Resources.IAuthUser.md)\>

#### Returns

`Partial`<[`IAuthUser`](../interfaces/Resources.IAuthUser.md)\>

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[getDifferentObject](Models.ResourceModel.md#getdifferentobject)

#### Defined in

[models/default/Model.ts:81](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L81)

___

### getNotifications

▸ **getNotifications**(): `Promise`<[`Pagination`](Models.Pagination.md)<[`NotificationModel`](Models.NotificationModel.md), [`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>\>\>

#### Returns

`Promise`<[`Pagination`](Models.Pagination.md)<[`NotificationModel`](Models.NotificationModel.md), [`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>\>\>

#### Defined in

[models/AuthUser.ts:43](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/AuthUser.ts#L43)

___

### isDifferentTo

▸ **isDifferentTo**(`model`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`IAuthUser`](../interfaces/Resources.IAuthUser.md) |

#### Returns

`boolean`

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[isDifferentTo](Models.ResourceModel.md#isdifferentto)

#### Defined in

[models/default/Model.ts:78](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L78)

___

### on

▸ **on**(`eventName`, `listener`): [`AuthUserModel`](Models.AuthUserModel.md)

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventName` |
| `listener` | (`model`: [`AuthUserModel`](Models.AuthUserModel.md), `key?`: keyof [`IAuthUser`](../interfaces/Resources.IAuthUser.md), `value?`: `any`) => `void` |

#### Returns

[`AuthUserModel`](Models.AuthUserModel.md)

Reference to self to allow chaining

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[on](Models.ResourceModel.md#on)

#### Defined in

[models/default/ResourceModel.ts:71](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L71)

___

### onChange

▸ **onChange**(`listener`): [`AuthUserModel`](Models.AuthUserModel.md)

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`key`: keyof [`IAuthUser`](../interfaces/Resources.IAuthUser.md), `value`: `any`, `model`: [`AuthUserModel`](Models.AuthUserModel.md)) => `void` |

#### Returns

[`AuthUserModel`](Models.AuthUserModel.md)

Reference to self to allow chaining

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[onChange](Models.ResourceModel.md#onchange)

#### Defined in

[models/default/Model.ts:62](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L62)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`AuthUserModel`](Models.AuthUserModel.md)

**`see`** {@link EventEmitter.removeListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventName` |
| `listener` | (`model`: [`AuthUserModel`](Models.AuthUserModel.md)) => `void` |

#### Returns

[`AuthUserModel`](Models.AuthUserModel.md)

Reference to self to allow chaining

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[removeListener](Models.ResourceModel.md#removelistener)

#### Defined in

[models/default/ResourceModel.ts:84](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L84)

___

### save

▸ **save**(): `Promise`<``false`` \| `AxiosResponse`<[`JsonResponse`](../interfaces/endpoint.JsonResponse.md)<[`IAuthUser`](../interfaces/Resources.IAuthUser.md)\>, `any`\>\>

#### Returns

`Promise`<``false`` \| `AxiosResponse`<[`JsonResponse`](../interfaces/endpoint.JsonResponse.md)<[`IAuthUser`](../interfaces/Resources.IAuthUser.md)\>, `any`\>\>

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[save](Models.ResourceModel.md#save)

#### Defined in

[models/default/ResourceModel.ts:48](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L48)
