---
id: "endpoint.PaginationResource"
title: "Interface: PaginationResource<T>"
sidebar_label: "PaginationResource"
custom_edit_url: null
---

[endpoint](../modules/endpoint.md).PaginationResource

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Omit`<[`EndpointResource`](endpoint.EndpointResource.md)<`T`\>, ``"getAll"``\>

  ↳ **`PaginationResource`**

## Accessors

### baseUri

• `get` **baseUri**(): `string`

#### Returns

`string`

#### Defined in

[endpoint/pagination/PaginationResource.ts:8](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/endpoint/pagination/PaginationResource.ts#L8)

## Methods

### get

▸ **get**(`id`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`T`\>

#### Inherited from

Omit.get

#### Defined in

[endpoint/EndpointResource.ts:2](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/endpoint/EndpointResource.ts#L2)

___

### getAll

▸ **getAll**(): `Promise`<[`PaginationResponse`](endpoint.PaginationResponse.md)<`T`\>\>

#### Returns

`Promise`<[`PaginationResponse`](endpoint.PaginationResponse.md)<`T`\>\>

#### Defined in

[endpoint/pagination/PaginationResource.ts:7](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/endpoint/pagination/PaginationResource.ts#L7)

___

### getPage

▸ **getPage**(`page`): `Promise`<[`PaginationResponse`](endpoint.PaginationResponse.md)<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | `number` |

#### Returns

`Promise`<[`PaginationResponse`](endpoint.PaginationResponse.md)<`T`\>\>

#### Defined in

[endpoint/pagination/PaginationResource.ts:6](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/endpoint/pagination/PaginationResource.ts#L6)
