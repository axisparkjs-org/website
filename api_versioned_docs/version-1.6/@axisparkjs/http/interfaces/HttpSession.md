# Interface: HttpSession\<T\>

Represents an HTTP session, providing methods to manage session data, including getting, setting, checking, deleting, and clearing session values. Also includes methods to save, reload, regenerate, destroy, and touch the session.

## Type Parameters

### T

`T` *extends* `object` = `Record`\<`string`, `unknown`\>

## Properties

### data

> `readonly` **data**: `Readonly`\<`T`\>

***

### id

> `readonly` **id**: `string`

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

***

### delete()

> **delete**\<`K`\>(`key`): `boolean`

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

#### Returns

`boolean`

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**\<`K`\>(`key`): `T`\[`K`\] \| `undefined`

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

#### Returns

`T`\[`K`\] \| `undefined`

***

### has()

> **has**\<`K`\>(`key`): `boolean`

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

#### Returns

`boolean`

***

### regenerate()

> **regenerate**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### reload()

> **reload**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### save()

> **save**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### set()

> **set**\<`K`\>(`key`, `value`): `void`

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

##### value

`T`\[`K`\]

#### Returns

`void`

***

### touch()

> **touch**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>
