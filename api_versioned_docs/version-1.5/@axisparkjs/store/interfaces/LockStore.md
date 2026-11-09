# Interface: LockStore

Stores locks with an expiration. Use a shared store, such as `RedisStore` from `@axisparkjs/redis`, to coordinate
several instances of the application.

## Methods

### acquire()

> **acquire**(`key`, `ttlMs`): `Promise`\<[`Lock`](Lock.md) \| `undefined`\>

Acquires the lock of a key without waiting.

#### Parameters

##### key

`string`

The key of the lock.

##### ttlMs

`number`

The time to live of the lock in milliseconds. The lock is released automatically when it expires.

#### Returns

`Promise`\<[`Lock`](Lock.md) \| `undefined`\>

The lock, or `undefined` when another owner holds it.
