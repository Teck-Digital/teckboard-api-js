---
id: "Models.InvitationModel"
title: "Class: InvitationModel"
sidebar_label: "InvitationModel"
custom_edit_url: null
---

[Models](../modules/Models.md).InvitationModel

Implementation example for V2

## Hierarchy

- [`Model`](Models.Model.md)<`IInvitation`\>

  ↳ **`InvitationModel`**

## Implements

- `default`

## Constructors

### constructor

• **new InvitationModel**(`resource`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | `default` |

#### Overrides

[Model](Models.Model.md).[constructor](Models.Model.md#constructor)

#### Defined in

[models/Invitation.ts:28](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L28)

## Properties

### created\_at

• **created\_at**: `string`

#### Implementation of

IInvitation.created\_at

#### Defined in

[models/Invitation.ts:24](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L24)

___

### email

• **email**: ``null`` \| `string`

#### Implementation of

IInvitation.email

#### Defined in

[models/Invitation.ts:19](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L19)

___

### emitter

• `Readonly` **emitter**: `EventEmitter`

#### Inherited from

[Model](Models.Model.md).[emitter](Models.Model.md#emitter)

#### Defined in

[models/default/Model.ts:30](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L30)

___

### expire\_date

• **expire\_date**: `string`

#### Implementation of

IInvitation.expire\_date

#### Defined in

[models/Invitation.ts:22](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L22)

___

### expired

• **expired**: `boolean`

#### Implementation of

IInvitation.expired

#### Defined in

[models/Invitation.ts:21](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L21)

___

### id

• **id**: `string`

#### Implementation of

IInvitation.id

#### Defined in

[models/Invitation.ts:14](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L14)

___

### invitable

• **invitable**: [`Board`](../interfaces/Resources.Board.md)

#### Implementation of

IInvitation.invitable

#### Defined in

[models/Invitation.ts:15](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L15)

___

### invitable\_type

• **invitable\_type**: ``"board"``

#### Implementation of

IInvitation.invitable\_type

#### Defined in

[models/Invitation.ts:16](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L16)

___

### name

• **name**: ``null`` \| `string`

#### Implementation of

IInvitation.name

#### Defined in

[models/Invitation.ts:18](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L18)

___

### token

• **token**: `string`

#### Implementation of

IInvitation.token

#### Defined in

[models/Invitation.ts:17](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L17)

___

### updated\_at

• **updated\_at**: `string`

#### Implementation of

IInvitation.updated\_at

#### Defined in

[models/Invitation.ts:23](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L23)

___

### url

• **url**: `string`

#### Implementation of

IInvitation.url

#### Defined in

[models/Invitation.ts:20](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L20)

## Methods

### approve

▸ **approve**(): `Promise`<[`Board`](../interfaces/Resources.Board.md)\>

#### Returns

`Promise`<[`Board`](../interfaces/Resources.Board.md)\>

#### Defined in

[models/Invitation.ts:33](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Invitation.ts#L33)

___

### batchUpdate

▸ **batchUpdate**(`model`): [`InvitationModel`](Models.InvitationModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `default` |

#### Returns

[`InvitationModel`](Models.InvitationModel.md)

#### Inherited from

[Model](Models.Model.md).[batchUpdate](Models.Model.md#batchupdate)

#### Defined in

[models/default/Model.ts:50](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L50)

___

### getAttributes

▸ **getAttributes**(): `default`

#### Returns

`default`

#### Inherited from

[Model](Models.Model.md).[getAttributes](Models.Model.md#getattributes)

#### Defined in

[models/default/Model.ts:70](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L70)

___

### getDifference

▸ **getDifference**(): `ModelPairs`<`default`\>

#### Returns

`ModelPairs`<`default`\>

#### Inherited from

[Model](Models.Model.md).[getDifference](Models.Model.md#getdifference)

#### Defined in

[models/default/Model.ts:73](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L73)

___

### getDifferentObject

▸ **getDifferentObject**(): `Partial`<`default`\>

#### Returns

`Partial`<`default`\>

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
| `model` | `default` |

#### Returns

`boolean`

#### Inherited from

[Model](Models.Model.md).[isDifferentTo](Models.Model.md#isdifferentto)

#### Defined in

[models/default/Model.ts:78](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L78)

___

### onChange

▸ **onChange**(`listener`): [`InvitationModel`](Models.InvitationModel.md)

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`key`: keyof `default`, `value`: `any`, `model`: [`InvitationModel`](Models.InvitationModel.md)) => `void` |

#### Returns

[`InvitationModel`](Models.InvitationModel.md)

Reference to self to allow chaining

#### Inherited from

[Model](Models.Model.md).[onChange](Models.Model.md#onchange)

#### Defined in

[models/default/Model.ts:62](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L62)
