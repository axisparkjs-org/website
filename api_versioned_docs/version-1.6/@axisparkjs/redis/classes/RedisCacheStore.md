# Class: RedisCacheStore

Stores the cached values in Redis, serialized with JSON, so every instance of the application connected to the same Redis shares them.
The values with a time to live expire in Redis (`SET PX`).

## Implements

- `CacheStore`

## Constructors

### Constructor

> **new RedisCacheStore**(`connection`): `RedisCacheStore`

#### Parameters

##### connection

[`RedisStoreConnection`](RedisStoreConnection.md)

#### Returns

`RedisCacheStore`

## Methods

### delete()

> **delete**(`key`): `Promise`\<`void`\>

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`CacheStore.delete`

***

### get()

> **get**\<`T`\>(`key`): `Promise`\<`T` \| `undefined`\>

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Implementation of

`CacheStore.get`

***

### set()

> **set**\<`T`\>(`key`, `value`, `ttlMs?`): `Promise`\<`void`\>

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

##### value

`T`

##### ttlMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`CacheStore.set`
