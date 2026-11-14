# Class: InMemoryLockStore

Keeps the locks in memory. The locks are local to the application process, so they only coordinate the code of one instance.
The expired locks are removed when their key is acquired again and every 256 acquisitions.

## Implements

- [`LockStore`](../interfaces/LockStore.md)

## Constructors

### Constructor

> **new InMemoryLockStore**(): `InMemoryLockStore`

#### Returns

`InMemoryLockStore`

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

The number of locks that are currently stored, including the expired ones that were not removed yet.

##### Returns

`number`

## Methods

### acquire()

> **acquire**(`key`, `ttlMs`): `Promise`\<[`Lock`](../interfaces/Lock.md) \| `undefined`\>

Acquires the lock of a key without waiting.

#### Parameters

##### key

`string`

The key of the lock.

##### ttlMs

`number`

The time to live of the lock in milliseconds. The lock is released automatically when it expires.

#### Returns

`Promise`\<[`Lock`](../interfaces/Lock.md) \| `undefined`\>

The lock, or `undefined` when another owner holds it.

#### Implementation of

[`LockStore`](../interfaces/LockStore.md).[`acquire`](../interfaces/LockStore.md#acquire)
