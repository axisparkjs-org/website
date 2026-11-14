# Class: RedisConnectionManager

A manager for creating and managing named connections to Redis.

## Constructors

### Constructor

> **new RedisConnectionManager**(`redisPluginOptions`, `logger`): `RedisConnectionManager`

#### Parameters

##### redisPluginOptions

[`RedisPluginOptions`](../interfaces/RedisPluginOptions.md)

##### logger

[`Logger`](../../logger/classes/Logger.md)

#### Returns

`RedisConnectionManager`

## Methods

### createConnections()

> **createConnections**(): `Promise`\<`void`\>

Creates and connects a client for each configured connection.

The clients connect in the background, so the application starts even when Redis is not available: the errors are logged
and the clients keep reconnecting with their reconnect strategy until they are ready.

#### Returns

`Promise`\<`void`\>

#### Throws

An error when two connections have the same name.

***

### destroyConnections()

> **destroyConnections**(): `Promise`\<`void`\>

Closes every connection. Open connections wait for their pending commands, and the clients that are reconnecting stop reconnecting.

#### Returns

`Promise`\<`void`\>

***

### getAllConnections()

> **getAllConnections**(): `Map`\<`string`, `RedisClientType`\>

#### Returns

`Map`\<`string`, `RedisClientType`\>

***

### getConnection()

> **getConnection**(`name`): `RedisClientType` \| `undefined`

#### Parameters

##### name

`string`

#### Returns

`RedisClientType` \| `undefined`
