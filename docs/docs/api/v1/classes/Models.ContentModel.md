---
id: "Models.ContentModel"
title: "Class: ContentModel"
sidebar_label: "ContentModel"
custom_edit_url: null
---

[Models](../modules/Models.md).ContentModel

Implementation example for V2

## Hierarchy

- [`ResourceModel`](Models.ResourceModel.md)<[`Content`](../interfaces/Resources.Content.md)\>

  ↳ **`ContentModel`**

## Implements

- [`Content`](../interfaces/Resources.Content.md)

## Constructors

### constructor

• **new ContentModel**(`content`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`Content`](../interfaces/Resources.Content.md) |

#### Overrides

[ResourceModel](Models.ResourceModel.md).[constructor](Models.ResourceModel.md#constructor)

#### Defined in

[models/Content.ts:27](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L27)

## Properties

### board\_id

• **board\_id**: `string`

#### Implementation of

[Content](../interfaces/Resources.Content.md).[board_id](../interfaces/Resources.Content.md#board_id)

#### Defined in

[models/Content.ts:15](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L15)

___

### created\_at

• **created\_at**: `string`

#### Implementation of

[Content](../interfaces/Resources.Content.md).[created_at](../interfaces/Resources.Content.md#created_at)

#### Defined in

[models/Content.ts:25](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L25)

___

### emitter

• `Readonly` **emitter**: `EventEmitter`

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[emitter](Models.ResourceModel.md#emitter)

#### Defined in

[models/default/Model.ts:30](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L30)

___

### expire\_date

• **expire\_date**: ``null``

#### Implementation of

[Content](../interfaces/Resources.Content.md).[expire_date](../interfaces/Resources.Content.md#expire_date)

#### Defined in

[models/Content.ts:22](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L22)

___

### height

• **height**: `number`

#### Implementation of

[Content](../interfaces/Resources.Content.md).[height](../interfaces/Resources.Content.md#height)

#### Defined in

[models/Content.ts:19](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L19)

___

### id

• **id**: `string`

#### Implementation of

[Content](../interfaces/Resources.Content.md).[id](../interfaces/Resources.Content.md#id)

#### Defined in

[models/Content.ts:14](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L14)

___

### items

• **items**: `default`[]

#### Implementation of

[Content](../interfaces/Resources.Content.md).[items](../interfaces/Resources.Content.md#items)

#### Defined in

[models/Content.ts:23](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L23)

___

### margin\_left

• **margin\_left**: `number`

#### Implementation of

[Content](../interfaces/Resources.Content.md).[margin_left](../interfaces/Resources.Content.md#margin_left)

#### Defined in

[models/Content.ts:17](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L17)

___

### margin\_top

• **margin\_top**: `number`

#### Implementation of

[Content](../interfaces/Resources.Content.md).[margin_top](../interfaces/Resources.Content.md#margin_top)

#### Defined in

[models/Content.ts:16](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L16)

___

### maxzindex

• **maxzindex**: ``true``

#### Implementation of

[Content](../interfaces/Resources.Content.md).[maxzindex](../interfaces/Resources.Content.md#maxzindex)

#### Defined in

[models/Content.ts:21](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L21)

___

### updated\_at

• **updated\_at**: `string`

#### Implementation of

[Content](../interfaces/Resources.Content.md).[updated_at](../interfaces/Resources.Content.md#updated_at)

#### Defined in

[models/Content.ts:24](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L24)

___

### width

• **width**: `number`

#### Implementation of

[Content](../interfaces/Resources.Content.md).[width](../interfaces/Resources.Content.md#width)

#### Defined in

[models/Content.ts:18](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L18)

___

### zindex

• **zindex**: `number`

#### Implementation of

[Content](../interfaces/Resources.Content.md).[zindex](../interfaces/Resources.Content.md#zindex)

#### Defined in

[models/Content.ts:20](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L20)

## Methods

### batchUpdate

▸ **batchUpdate**(`model`): [`ContentModel`](Models.ContentModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Content`](../interfaces/Resources.Content.md) |

#### Returns

[`ContentModel`](Models.ContentModel.md)

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[batchUpdate](Models.ResourceModel.md#batchupdate)

#### Defined in

[models/default/Model.ts:50](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L50)

___

### getAttributes

▸ **getAttributes**(): [`Content`](../interfaces/Resources.Content.md)

#### Returns

[`Content`](../interfaces/Resources.Content.md)

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[getAttributes](Models.ResourceModel.md#getattributes)

#### Defined in

[models/default/Model.ts:70](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L70)

___

### getBoard

▸ **getBoard**(): `Promise`<[`BoardModel`](Models.BoardModel.md)\>

#### Returns

`Promise`<[`BoardModel`](Models.BoardModel.md)\>

#### Defined in

[models/Content.ts:42](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L42)

___

### getDifference

▸ **getDifference**(): `ModelPairs`<[`Content`](../interfaces/Resources.Content.md)\>

#### Returns

`ModelPairs`<[`Content`](../interfaces/Resources.Content.md)\>

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[getDifference](Models.ResourceModel.md#getdifference)

#### Defined in

[models/default/Model.ts:73](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L73)

___

### getDifferentObject

▸ **getDifferentObject**(): `Partial`<[`Content`](../interfaces/Resources.Content.md)\>

#### Returns

`Partial`<[`Content`](../interfaces/Resources.Content.md)\>

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[getDifferentObject](Models.ResourceModel.md#getdifferentobject)

#### Defined in

[models/default/Model.ts:81](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L81)

___

### isDifferentTo

▸ **isDifferentTo**(`model`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Content`](../interfaces/Resources.Content.md) |

#### Returns

`boolean`

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[isDifferentTo](Models.ResourceModel.md#isdifferentto)

#### Defined in

[models/default/Model.ts:78](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L78)

___

### on

▸ **on**(`eventName`, `listener`): [`ContentModel`](Models.ContentModel.md)

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventName` |
| `listener` | (`model`: [`ContentModel`](Models.ContentModel.md), `key?`: keyof [`Content`](../interfaces/Resources.Content.md), `value?`: `any`) => `void` |

#### Returns

[`ContentModel`](Models.ContentModel.md)

Reference to self to allow chaining

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[on](Models.ResourceModel.md#on)

#### Defined in

[models/default/ResourceModel.ts:71](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L71)

___

### onChange

▸ **onChange**(`listener`): [`ContentModel`](Models.ContentModel.md)

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`key`: keyof [`Content`](../interfaces/Resources.Content.md), `value`: `any`, `model`: [`ContentModel`](Models.ContentModel.md)) => `void` |

#### Returns

[`ContentModel`](Models.ContentModel.md)

Reference to self to allow chaining

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[onChange](Models.ResourceModel.md#onchange)

#### Defined in

[models/default/Model.ts:62](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L62)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`ContentModel`](Models.ContentModel.md)

**`see`** {@link EventEmitter.removeListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventName` |
| `listener` | (`model`: [`ContentModel`](Models.ContentModel.md)) => `void` |

#### Returns

[`ContentModel`](Models.ContentModel.md)

Reference to self to allow chaining

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[removeListener](Models.ResourceModel.md#removelistener)

#### Defined in

[models/default/ResourceModel.ts:84](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L84)

___

### save

▸ **save**(): `Promise`<``false`` \| `AxiosResponse`<[`JsonResponse`](../interfaces/endpoint.JsonResponse.md)<[`Content`](../interfaces/Resources.Content.md)\>, `any`\>\>

#### Returns

`Promise`<``false`` \| `AxiosResponse`<[`JsonResponse`](../interfaces/endpoint.JsonResponse.md)<[`Content`](../interfaces/Resources.Content.md)\>, `any`\>\>

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[save](Models.ResourceModel.md#save)

#### Defined in

[models/default/ResourceModel.ts:48](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L48)

___

### collection

▸ `Static` **collection**(`contents`): [`ContentModel`](Models.ContentModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contents` | [`Content`](../interfaces/Resources.Content.md)[] |

#### Returns

[`ContentModel`](Models.ContentModel.md)[]

#### Defined in

[models/Content.ts:38](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Content.ts#L38)
