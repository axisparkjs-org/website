# Class: RedisStoreConnection

The Redis connection used by the stores of a `RedisStore`, with the prefix of their keys.
The connection is created and closed by the `RedisPlugin`: the stores never open or close it.

## Constructors

### Constructor

> **new RedisStoreConnection**(`name`, `client`, `prefix`): `RedisStoreConnection`

#### Parameters

##### name

`string`

The name of the connection, used in the error messages.

##### client

`RedisClientType`

The client of the connection.

##### prefix

`string`

The prefix added to every key of the store.

#### Returns

`RedisStoreConnection`

## Properties

### name

> `readonly` **name**: `string`

The name of the connection, used in the error messages.

***

### prefix

> `readonly` **prefix**: `string`

The prefix added to every key of the store.

## Methods

### key()

> **key**(`key`): `string`

Adds the prefix of the store to a key.

#### Parameters

##### key

`string`

#### Returns

`string`

***

### ready()

> **ready**(): `RedisClientType`

Returns the client when it is ready. The operations are rejected while the client reconnects, because node-redis would queue them
until the connection is available again and the callers, such as HTTP requests, would wait indefinitely.

#### Returns

`RedisClientType`

#### Throws

When the client is not ready.
