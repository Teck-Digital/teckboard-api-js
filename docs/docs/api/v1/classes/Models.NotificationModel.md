---
id: "Models.NotificationModel"
title: "Class: NotificationModel"
sidebar_label: "NotificationModel"
custom_edit_url: null
---

[Models](../modules/Models.md).NotificationModel

## Hierarchy

- [`Model`](Models.Model.md)<[`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>\>

  ↳ **`NotificationModel`**

## Implements

- [`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>

## Constructors

### constructor

• **new NotificationModel**(`notification`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`Notification`](../interfaces/Resources.Notification.md)<`unknown`\> |

#### Overrides

[Model](Models.Model.md).[constructor](Models.Model.md#constructor)

#### Defined in

[models/Notification.ts:28](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L28)

## Properties

### created\_at

• **created\_at**: `string`

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[created_at](../interfaces/Resources.Notification.md#created_at)

#### Defined in

[models/Notification.ts:24](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L24)

___

### data

• **data**: `unknown`

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[data](../interfaces/Resources.Notification.md#data)

#### Defined in

[models/Notification.ts:20](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L20)

___

### emitter

• `Readonly` **emitter**: `EventEmitter`

#### Inherited from

[Model](Models.Model.md).[emitter](Models.Model.md#emitter)

#### Defined in

[models/default/Model.ts:30](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L30)

___

### icon

• **icon**: `default`

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[icon](../interfaces/Resources.Notification.md#icon)

#### Defined in

[models/Notification.ts:19](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L19)

___

### id

• **id**: `string`

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[id](../interfaces/Resources.Notification.md#id)

#### Defined in

[models/Notification.ts:9](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L9)

___

### message

• **message**: `string`

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[message](../interfaces/Resources.Notification.md#message)

#### Defined in

[models/Notification.ts:17](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L17)

___

### read\_at

• **read\_at**: ``null`` \| `string` \| `string`[]

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[read_at](../interfaces/Resources.Notification.md#read_at)

#### Defined in

[models/Notification.ts:22](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L22)

___

### sender

• **sender**: `string`

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[sender](../interfaces/Resources.Notification.md#sender)

#### Defined in

[models/Notification.ts:16](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L16)

___

### system

• **system**: `boolean`

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[system](../interfaces/Resources.Notification.md#system)

#### Defined in

[models/Notification.ts:21](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L21)

___

### type

• **type**: ``"App\\Notifications\\Announcement"`` \| ``"App\\Notifications\\ContentCreated"`` \| ``"App\\Notifications\\Invitation"`` \| ``"App\\Notifications\\PassswordReset"`` \| ``"App\\Notifications\\PasswordResetRequest"``

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[type](../interfaces/Resources.Notification.md#type)

#### Defined in

[models/Notification.ts:10](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L10)

___

### updated\_at

• **updated\_at**: `string`

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[updated_at](../interfaces/Resources.Notification.md#updated_at)

#### Defined in

[models/Notification.ts:23](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L23)

___

### url

• **url**: `string`

#### Implementation of

[Notification](../interfaces/Resources.Notification.md).[url](../interfaces/Resources.Notification.md#url)

#### Defined in

[models/Notification.ts:18](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L18)

## Methods

### batchUpdate

▸ **batchUpdate**(`model`): [`NotificationModel`](Models.NotificationModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Notification`](../interfaces/Resources.Notification.md)<`unknown`\> |

#### Returns

[`NotificationModel`](Models.NotificationModel.md)

#### Inherited from

[Model](Models.Model.md).[batchUpdate](Models.Model.md#batchupdate)

#### Defined in

[models/default/Model.ts:50](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L50)

___

### getAttributes

▸ **getAttributes**(): [`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>

#### Returns

[`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>

#### Inherited from

[Model](Models.Model.md).[getAttributes](Models.Model.md#getattributes)

#### Defined in

[models/default/Model.ts:70](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L70)

___

### getDifference

▸ **getDifference**(): `ModelPairs`<[`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>\>

#### Returns

`ModelPairs`<[`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>\>

#### Inherited from

[Model](Models.Model.md).[getDifference](Models.Model.md#getdifference)

#### Defined in

[models/default/Model.ts:73](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L73)

___

### getDifferentObject

▸ **getDifferentObject**(): `Partial`<[`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>\>

#### Returns

`Partial`<[`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>\>

#### Inherited from

[Model](Models.Model.md).[getDifferentObject](Models.Model.md#getdifferentobject)

#### Defined in

[models/default/Model.ts:81](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L81)

___

### isDifferentTo

▸ **isDifferentTo**(`model`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Notification`](../interfaces/Resources.Notification.md)<`unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Model](Models.Model.md).[isDifferentTo](Models.Model.md#isdifferentto)

#### Defined in

[models/default/Model.ts:78](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L78)

___

### markAsRead

▸ **markAsRead**(): `Promise`<[`NotificationModel`](Models.NotificationModel.md)\>

#### Returns

`Promise`<[`NotificationModel`](Models.NotificationModel.md)\>

#### Defined in

[models/Notification.ts:39](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L39)

___

### onChange

▸ **onChange**(`listener`): [`NotificationModel`](Models.NotificationModel.md)

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`key`: keyof [`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>, `value`: `any`, `model`: [`NotificationModel`](Models.NotificationModel.md)) => `void` |

#### Returns

[`NotificationModel`](Models.NotificationModel.md)

Reference to self to allow chaining

#### Inherited from

[Model](Models.Model.md).[onChange](Models.Model.md#onchange)

#### Defined in

[models/default/Model.ts:62](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L62)

___

### collection

▸ `Static` **collection**(`notifications`): [`NotificationModel`](Models.NotificationModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifications` | [`Notification`](../interfaces/Resources.Notification.md)<`unknown`\>[] |

#### Returns

[`NotificationModel`](Models.NotificationModel.md)[]

#### Defined in

[models/Notification.ts:33](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Notification.ts#L33)
