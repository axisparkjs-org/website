# Interface: CacheStore

Stores values with an optional expiration. Use a shared store, such as `RedisStore` from `@axisparkjs/redis`,
to share the cached values between several instances of the application.

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
