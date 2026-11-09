# Interface: Lock

A lock acquired from a `LockStore`. The lock is identified by a random token, so an owner never releases or extends
a lock that expired and was acquired by another owner.

## Properties

### key

> `readonly` **key**: `string`

The key of the lock.

***

### token

> `readonly` **token**: `string`

The random token of the owner of the lock.

## Methods

### extend()

> **extend**(`ttlMs`): `Promise`\<`boolean`\>

Sets a new expiration for the lock if it is still owned by this lock.

#### Parameters

##### ttlMs

`number`

The new time to live of the lock in milliseconds, counted from now.

#### Returns

`Promise`\<`boolean`\>

`true` when the lock was extended, or `false` when it had expired or was owned by another owner.

***

### release()

> **release**(): `Promise`\<`boolean`\>

Releases the lock if it is still owned by this lock.

#### Returns

`Promise`\<`boolean`\>

`true` when the lock was released, or `false` when it had expired or was owned by another owner.
