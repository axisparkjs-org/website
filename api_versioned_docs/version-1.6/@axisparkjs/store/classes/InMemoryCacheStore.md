# Class: InMemoryCacheStore

Keeps the cached values in memory. The values are local to the application process and are stored as they are, without serializing them.
The expired values are removed when they are read and every 256 writes.

## Implements

- [`CacheStore`](../interfaces/CacheStore.md)

## Constructors

### Constructor

> **new InMemoryCacheStore**(): `InMemoryCacheStore`

#### Returns

`InMemoryCacheStore`

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

The number of values that are currently stored, including the expired ones that were not removed yet.

##### Returns

`number`

## Methods

### delete()

> **delete**(`key`): `Promise`\<`void`\>

Deletes the value of a key. Deleting a key that does not exist does nothing.

#### Parameters

##### key

`string`

The key of the value.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`CacheStore`](../interfaces/CacheStore.md).[`delete`](../interfaces/CacheStore.md#delete)

***

### get()

> **get**\<`T`\>(`key`): `Promise`\<`T` \| `undefined`\>

Gets the value of a key.

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

The key of the value.

#### Returns

`Promise`\<`T` \| `undefined`\>

The value, or `undefined` when the key does not exist or has expired.

#### Implementation of

[`CacheStore`](../interfaces/CacheStore.md).[`get`](../interfaces/CacheStore.md#get)

***

### set()

> **set**\<`T`\>(`key`, `value`, `ttlMs?`): `Promise`\<`void`\>

Sets the value of a key, replacing the previous one.

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

The key of the value.

##### value

`T`

The value. Shared stores serialize it, so use values that can be converted to JSON.

##### ttlMs?

`number`

The time to live of the value in milliseconds. Without it, the value does not expire.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`CacheStore`](../interfaces/CacheStore.md).[`set`](../interfaces/CacheStore.md#set)
