---
id: "Models.BoardModel"
title: "Class: BoardModel"
sidebar_label: "BoardModel"
custom_edit_url: null
---

[Models](../modules/Models.md).BoardModel

## The Object representation for a Board.
```typescript
const board = api.boards.get('000');

console.log(board.name); // Gives you the name of the Board.

board.name = 'ChangedName';
board.settings = {
    chat: {
         enabled: false;
    }
};

board.save(); // Persists changes to the server;
```

## Hierarchy

- [`ResourceModel`](Models.ResourceModel.md)<[`Board`](../interfaces/Resources.Board.md)\>

  ↳ **`BoardModel`**

## Implements

- [`Board`](../interfaces/Resources.Board.md)

## Constructors

### constructor

• **new BoardModel**(`resource`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | [`Board`](../interfaces/Resources.Board.md) |

#### Overrides

[ResourceModel](Models.ResourceModel.md).[constructor](Models.ResourceModel.md#constructor)

#### Defined in

[models/Board.ts:54](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L54)

## Properties

### channel

• **channel**: [`Channel`](../interfaces/Resources.Channel.md)

#### Implementation of

[Board](../interfaces/Resources.Board.md).[channel](../interfaces/Resources.Board.md#channel)

#### Defined in

[models/Board.ts:35](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L35)

___

### color\_scheme

• **color\_scheme**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[color_scheme](../interfaces/Resources.Board.md#color_scheme)

#### Defined in

[models/Board.ts:34](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L34)

___

### company\_id

• **company\_id**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[company_id](../interfaces/Resources.Board.md#company_id)

#### Defined in

[models/Board.ts:38](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L38)

___

### created\_at

• **created\_at**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[created_at](../interfaces/Resources.Board.md#created_at)

#### Defined in

[models/Board.ts:47](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L47)

___

### emitter

• `Readonly` **emitter**: `EventEmitter`

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[emitter](Models.ResourceModel.md#emitter)

#### Defined in

[models/default/Model.ts:30](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L30)

___

### icon

• `Optional` **icon**: `default`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[icon](../interfaces/Resources.Board.md#icon)

#### Defined in

[models/Board.ts:39](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L39)

___

### id

• **id**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[id](../interfaces/Resources.Board.md#id)

#### Defined in

[models/Board.ts:32](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L32)

___

### latest\_content

• **latest\_content**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[latest_content](../interfaces/Resources.Board.md#latest_content)

#### Defined in

[models/Board.ts:40](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L40)

___

### name

• **name**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[name](../interfaces/Resources.Board.md#name)

#### Defined in

[models/Board.ts:33](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L33)

___

### owner

• **owner**: `boolean`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[owner](../interfaces/Resources.Board.md#owner)

#### Defined in

[models/Board.ts:36](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L36)

___

### owner\_id

• **owner\_id**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[owner_id](../interfaces/Resources.Board.md#owner_id)

#### Defined in

[models/Board.ts:37](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L37)

___

### roles

• **roles**: [`ShardRole`](../interfaces/Resources.ShardRole.md)[]

#### Implementation of

[Board](../interfaces/Resources.Board.md).[roles](../interfaces/Resources.Board.md#roles)

#### Defined in

[models/Board.ts:41](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L41)

___

### settings

• **settings**: `BoardChatSettings`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[settings](../interfaces/Resources.Board.md#settings)

#### Defined in

[models/Board.ts:42](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L42)

___

### slug

• **slug**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[slug](../interfaces/Resources.Board.md#slug)

#### Defined in

[models/Board.ts:43](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L43)

___

### updated\_at

• **updated\_at**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[updated_at](../interfaces/Resources.Board.md#updated_at)

#### Defined in

[models/Board.ts:48](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L48)

___

### uri

• **uri**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[uri](../interfaces/Resources.Board.md#uri)

#### Defined in

[models/Board.ts:44](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L44)

___

### url

• **url**: `string`

#### Implementation of

[Board](../interfaces/Resources.Board.md).[url](../interfaces/Resources.Board.md#url)

#### Defined in

[models/Board.ts:45](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L45)

___

### user\_role

• **user\_role**: [`ShardRole`](../interfaces/Resources.ShardRole.md)

#### Implementation of

[Board](../interfaces/Resources.Board.md).[user_role](../interfaces/Resources.Board.md#user_role)

#### Defined in

[models/Board.ts:46](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L46)

## Methods

### batchUpdate

▸ **batchUpdate**(`model`): [`BoardModel`](Models.BoardModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Board`](../interfaces/Resources.Board.md) |

#### Returns

[`BoardModel`](Models.BoardModel.md)

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[batchUpdate](Models.ResourceModel.md#batchupdate)

#### Defined in

[models/default/Model.ts:50](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L50)

___

### getAnnouncements

▸ **getAnnouncements**(`chunk?`): `Promise`<[`PaginationResponse`](../interfaces/endpoint.PaginationResponse.md)<[`Announcement`](../modules/Resources.md#announcement)[]\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chunk` | `number` | `1` |

#### Returns

`Promise`<[`PaginationResponse`](../interfaces/endpoint.PaginationResponse.md)<[`Announcement`](../modules/Resources.md#announcement)[]\>\>

#### Defined in

[models/Board.ts:115](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L115)

___

### getAttributes

▸ **getAttributes**(): [`Board`](../interfaces/Resources.Board.md)

#### Returns

[`Board`](../interfaces/Resources.Board.md)

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[getAttributes](Models.ResourceModel.md#getattributes)

#### Defined in

[models/default/Model.ts:70](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L70)

___

### getContents

▸ **getContents**(): `Promise`<[`ContentModel`](Models.ContentModel.md)[]\>

#### Returns

`Promise`<[`ContentModel`](Models.ContentModel.md)[]\>

#### Defined in

[models/Board.ts:89](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L89)

___

### getDifference

▸ **getDifference**(): `ModelPairs`<[`Board`](../interfaces/Resources.Board.md)\>

#### Returns

`ModelPairs`<[`Board`](../interfaces/Resources.Board.md)\>

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[getDifference](Models.ResourceModel.md#getdifference)

#### Defined in

[models/default/Model.ts:73](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L73)

___

### getDifferentObject

▸ **getDifferentObject**(): `Partial`<[`Board`](../interfaces/Resources.Board.md)\>

#### Returns

`Partial`<[`Board`](../interfaces/Resources.Board.md)\>

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[getDifferentObject](Models.ResourceModel.md#getdifferentobject)

#### Defined in

[models/default/Model.ts:81](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L81)

___

### getInvitations

▸ **getInvitations**(): `Promise`<[`BoardUser`](../interfaces/Resources.BoardUser.md)[]\>

#### Returns

`Promise`<[`BoardUser`](../interfaces/Resources.BoardUser.md)[]\>

#### Defined in

[models/Board.ts:108](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L108)

___

### getUsers

▸ **getUsers**(): `Promise`<[`BoardUser`](../interfaces/Resources.BoardUser.md)[]\>

Queries all users for the current board

#### Returns

`Promise`<[`BoardUser`](../interfaces/Resources.BoardUser.md)[]\>

All users on the board

#### Defined in

[models/Board.ts:101](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L101)

___

### isDifferentTo

▸ **isDifferentTo**(`model`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Board`](../interfaces/Resources.Board.md) |

#### Returns

`boolean`

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[isDifferentTo](Models.ResourceModel.md#isdifferentto)

#### Defined in

[models/default/Model.ts:78](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L78)

___

### listenToUpdates

▸ **listenToUpdates**(): `void`

#### Usage

```ts
const board = api.boards.get('000');
board.on('update', (board) => {
 console.log('Board ' + board.name + ' has been updated by the backend');
});
// This line starts the listining process
board.listenToUpdates();
```

#### Returns

`void`

#### Defined in

[models/Board.ts:75](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L75)

___

### on

▸ **on**(`eventName`, `listener`): [`BoardModel`](Models.BoardModel.md)

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventName` |
| `listener` | (`model`: [`BoardModel`](Models.BoardModel.md), `key?`: keyof [`Board`](../interfaces/Resources.Board.md), `value?`: `any`) => `void` |

#### Returns

[`BoardModel`](Models.BoardModel.md)

Reference to self to allow chaining

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[on](Models.ResourceModel.md#on)

#### Defined in

[models/default/ResourceModel.ts:71](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L71)

___

### onChange

▸ **onChange**(`listener`): [`BoardModel`](Models.BoardModel.md)

**`see`** {@link EventEmitter.addListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`key`: keyof [`Board`](../interfaces/Resources.Board.md), `value`: `any`, `model`: [`BoardModel`](Models.BoardModel.md)) => `void` |

#### Returns

[`BoardModel`](Models.BoardModel.md)

Reference to self to allow chaining

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[onChange](Models.ResourceModel.md#onchange)

#### Defined in

[models/default/Model.ts:62](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Model.ts#L62)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`BoardModel`](Models.BoardModel.md)

**`see`** {@link EventEmitter.removeListener}

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `EventName` |
| `listener` | (`model`: [`BoardModel`](Models.BoardModel.md)) => `void` |

#### Returns

[`BoardModel`](Models.BoardModel.md)

Reference to self to allow chaining

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[removeListener](Models.ResourceModel.md#removelistener)

#### Defined in

[models/default/ResourceModel.ts:84](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L84)

___

### save

▸ **save**(): `Promise`<``false`` \| `AxiosResponse`<[`JsonResponse`](../interfaces/endpoint.JsonResponse.md)<[`Board`](../interfaces/Resources.Board.md)\>, `any`\>\>

#### Returns

`Promise`<``false`` \| `AxiosResponse`<[`JsonResponse`](../interfaces/endpoint.JsonResponse.md)<[`Board`](../interfaces/Resources.Board.md)\>, `any`\>\>

#### Inherited from

[ResourceModel](Models.ResourceModel.md).[save](Models.ResourceModel.md#save)

#### Defined in

[models/default/ResourceModel.ts:48](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/ResourceModel.ts#L48)

___

### collection

▸ `Static` **collection**(`boards`): [`BoardModel`](Models.BoardModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `boards` | [`Board`](../interfaces/Resources.Board.md)[] |

#### Returns

[`BoardModel`](Models.BoardModel.md)[]

#### Defined in

[models/Board.ts:85](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/Board.ts#L85)
