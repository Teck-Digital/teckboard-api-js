---
id: "Resources.Notifications"
title: "Class: Notifications"
sidebar_label: "Notifications"
custom_edit_url: null
---

[Resources](../modules/Resources.md).Notifications

## Hierarchy

- `default`<`v1`\>

  ↳ **`Notifications`**

## Constructors

### constructor

• **new Notifications**(`api`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `default` |

#### Inherited from

Resource<v1\>.constructor

#### Defined in

node_modules/@teckboard-api/core/resource.d.ts:4

## Methods

### markAll

▸ **markAll**(): `Promise`<{ `ids`: `string`[]  }\>

#### Returns

`Promise`<{ `ids`: `string`[]  }\>

#### Defined in

[resources/notifications/notifications.ts:18](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/resources/notifications/notifications.ts#L18)

___

### markMultiple

▸ **markMultiple**(`ids`): `Promise`<[`NotificationModel`](Models.NotificationModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`Promise`<[`NotificationModel`](Models.NotificationModel.md)[]\>

#### Defined in

[resources/notifications/notifications.ts:9](https://github.com/Teck-Digital/teckboard-api-js/blob/0ed37d3/packages/v1/resources/notifications/notifications.ts#L9)
