# Class: RedisLockStore

Stores the locks in Redis, so they coordinate every instance of the application connected to the same Redis.
A lock is a key with the random token of its owner and an expiration (`SET NX PX`), and it is released and extended with
scripts that compare the token, so an instance never releases a lock that expired and was acquired by another instance.

## Implements

- `LockStore`

## Constructors

### Constructor

> **new RedisLockStore**(`connection`): `RedisLockStore`

#### Parameters

##### connection

[`RedisStoreConnection`](RedisStoreConnection.md)

#### Returns

`RedisLockStore`

## Methods

### acquire()

> **acquire**(`key`, `ttlMs`): `Promise`\<`Lock` \| `undefined`\>

#### Parameters

##### key

`string`

##### ttlMs

`number`

#### Returns

`Promise`\<`Lock` \| `undefined`\>

#### Implementation of

`LockStore.acquire`
