---
id: "Models.ResourceModel"
title: "Class: ResourceModel<I>"
sidebar_label: "ResourceModel"
custom_edit_url: null
---

[Models](../modules/Models.md).ResourceModel

## Type parameters

| Name |
| :------ |
| `I` |

## Hierarchy

- [`Model`](Models.Model.md)<`I`\>

  ↳ **`ResourceModel`**

  ↳↳ [`AuthUserModel`](Models.AuthUserModel.md)

  ↳↳ [`BoardModel`](Models.BoardModel.md)

  ↳↳ [`ContentModel`](Models.ContentModel.md)

## Constructors

### constructor

• **new ResourceModel**<`I`\>(`resource`, `options`)

#### Type parameters

| Name |
| :------ |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | `I` |
| `options` | `ModelOptions`<`I`\> |

#### Overrides

[Model](Models.Model.md).[constructor](Models.Model.md#constructor)

#### Defined in

[models/default/ResourceModel.ts:28](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L28)

## Properties

### emitter

• `Readonly` **emitter**: `EventEmitter`

#### Inherited from

[Model](Models.Model.md).[emitter](Models.Model.md#emitter)

#### Defined in

[models/default/Model.ts:30](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L30)

## Methods

### batchUpdate

▸ **batchUpdate**(`model`): [`ResourceModel`](Models.ResourceModel.md)<`I`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `I` |

#### Returns

[`ResourceModel`](Models.ResourceModel.md)<`I`\>

#### Inherited from

[Model](Models.Model.md).[batchUpdate](Models.Model.md#batchupdate)

#### Defined in

[models/default/Model.ts:50](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L50)

___

### getAttributes

▸ **getAttributes**(): `I`

#### Returns

`I`

#### Inherited from

[Model](Models.Model.md).[getAttributes](Models.Model.md#getattributes)

#### Defined in

[models/default/Model.ts:70](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L70)

___

### getDifference

▸ **getDifference**(): `ModelPairs`<`I`\>

#### Returns

`ModelPairs`<`I`\>

#### Inherited from

[Model](Models.Model.md).[getDifference](Models.Model.md#getdifference)

#### Defined in

[models/default/Model.ts:73](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L73)

___

### getDifferentObject

▸ **getDifferentObject**(): `Partial`<`I`\>

#### Returns

`Partial`<`I`\>

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
| `model` | `I` |

#### Returns

`boolean`

#### Inherited from

[Model](Models.Model.md).[isDifferentTo](Models.Model.md#isdifferentto)

#### Defined in

[models/default/Model.ts:78](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L78)

___

### on

▸ **on**(`eventName`, `listener`): [`ResourceModel`](Models.ResourceModel.md)<`I`\>

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventName` |
| `listener` | (`model`: [`ResourceModel`](Models.ResourceModel.md)<`I`\>, `key?`: keyof `I`, `value?`: `any`) => `void` |

#### Returns

[`ResourceModel`](Models.ResourceModel.md)<`I`\>

Reference to self to allow chaining

#### Defined in

[models/default/ResourceModel.ts:71](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L71)

___

### onChange

▸ **onChange**(`listener`): [`ResourceModel`](Models.ResourceModel.md)<`I`\>

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`key`: keyof `I`, `value`: `any`, `model`: [`ResourceModel`](Models.ResourceModel.md)<`I`\>) => `void` |

#### Returns

[`ResourceModel`](Models.ResourceModel.md)<`I`\>

Reference to self to allow chaining

#### Inherited from

[Model](Models.Model.md).[onChange](Models.Model.md#onchange)

#### Defined in

[models/default/Model.ts:62](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L62)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`ResourceModel`](Models.ResourceModel.md)<`I`\>

**`see`** {@link EventEmitter.removeListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventName` |
| `listener` | (`model`: [`ResourceModel`](Models.ResourceModel.md)<`I`\>) => `void` |

#### Returns

[`ResourceModel`](Models.ResourceModel.md)<`I`\>

Reference to self to allow chaining

#### Defined in

[models/default/ResourceModel.ts:84](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L84)

___

### save

▸ **save**(): `Promise`<``false`` \| `AxiosResponse`<[`JsonResponse`](../interfaces/endpoint.JsonResponse.md)<`I`\>, `any`\>\>

#### Returns

`Promise`<``false`` \| `AxiosResponse`<[`JsonResponse`](../interfaces/endpoint.JsonResponse.md)<`I`\>, `any`\>\>

#### Defined in

[models/default/ResourceModel.ts:48](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L48)
