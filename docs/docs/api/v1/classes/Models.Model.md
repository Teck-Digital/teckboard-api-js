---
id: "Models.Model"
title: "Class: Model<I>"
sidebar_label: "Model"
custom_edit_url: null
---

[Models](../modules/Models.md).Model

## Type parameters

| Name |
| :------ |
| `I` |

## Hierarchy

- **`Model`**

  ↳ [`InvitationModel`](Models.InvitationModel.md)

  ↳ [`NotificationModel`](Models.NotificationModel.md)

  ↳ [`ResourceModel`](Models.ResourceModel.md)

## Constructors

### constructor

• **new Model**<`I`\>(`resource`)

#### Type parameters

| Name |
| :------ |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | `I` |

#### Defined in

[models/default/Model.ts:32](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L32)

## Properties

### emitter

• `Readonly` **emitter**: `EventEmitter`

#### Defined in

[models/default/Model.ts:30](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L30)

## Methods

### batchUpdate

▸ **batchUpdate**(`model`): [`Model`](Models.Model.md)<`I`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `I` |

#### Returns

[`Model`](Models.Model.md)<`I`\>

#### Defined in

[models/default/Model.ts:50](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L50)

___

### getAttributes

▸ **getAttributes**(): `I`

#### Returns

`I`

#### Defined in

[models/default/Model.ts:70](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L70)

___

### getDifference

▸ **getDifference**(): `ModelPairs`<`I`\>

#### Returns

`ModelPairs`<`I`\>

#### Defined in

[models/default/Model.ts:73](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L73)

___

### getDifferentObject

▸ **getDifferentObject**(): `Partial`<`I`\>

#### Returns

`Partial`<`I`\>

#### Defined in

[models/default/Model.ts:81](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L81)

___

### isDifferentTo

▸ **isDifferentTo**(`model`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `I` |

#### Returns

`boolean`

#### Defined in

[models/default/Model.ts:78](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L78)

___

### onChange

▸ **onChange**(`listener`): [`Model`](Models.Model.md)<`I`\>

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`key`: keyof `I`, `value`: `any`, `model`: [`Model`](Models.Model.md)<`I`\>) => `void` |

#### Returns

[`Model`](Models.Model.md)<`I`\>

Reference to self to allow chaining

#### Defined in

[models/default/Model.ts:62](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L62)
