---
id: "Models.Pagination"
title: "Class: Pagination<C, T>"
sidebar_label: "Pagination"
custom_edit_url: null
---

[Models](../modules/Models.md).Pagination

## Type parameters

| Name |
| :------ |
| `C` |
| `T` |

## Constructors

### constructor

• **new Pagination**<`C`, `T`\>(`response`, `ressource`)

#### Type parameters

| Name |
| :------ |
| `C` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`PaginationResponse`](../interfaces/endpoint.PaginationResponse.md)<`T`\> |
| `ressource` | `default`<`C`, `T`\> |

#### Defined in

[models/default/Pagination.ts:21](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Pagination.ts#L21)

## Accessors

### chunk

• `get` **chunk**(): `number`

#### Returns

`number`

#### Defined in

[models/default/Pagination.ts:39](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Pagination.ts#L39)

___

### lastChunk

• `get` **lastChunk**(): `number`

#### Returns

`number`

#### Defined in

[models/default/Pagination.ts:42](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Pagination.ts#L42)

## Methods

### forChunk

▸ **forChunk**(`key?`): `undefined` \| `C`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `number` |

#### Returns

`undefined` \| `C`[]

#### Defined in

[models/default/Pagination.ts:35](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Pagination.ts#L35)

___

### getCurrentChunk

▸ **getCurrentChunk**(): `C`[]

#### Returns

`C`[]

#### Defined in

[models/default/Pagination.ts:31](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Pagination.ts#L31)

___

### loadNextChunk

▸ **loadNextChunk**(): `Promise`<[`Pagination`](Models.Pagination.md)<`C`, `T`\>\>

#### Returns

`Promise`<[`Pagination`](Models.Pagination.md)<`C`, `T`\>\>

#### Defined in

[models/default/Pagination.ts:46](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/models/default/Pagination.ts#L46)
