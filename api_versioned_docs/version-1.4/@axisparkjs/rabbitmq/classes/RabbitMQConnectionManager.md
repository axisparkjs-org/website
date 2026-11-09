# Class: RabbitMQConnectionManager

A manager for creating and managing connections to RabbitMQ.

## Constructors

### Constructor

> **new RabbitMQConnectionManager**(`rabbitmqPluginOptions`, `logger`): `RabbitMQConnectionManager`

#### Parameters

##### rabbitmqPluginOptions

[`RabbitMQPluginOptions`](../interfaces/RabbitMQPluginOptions.md)

##### logger

[`Logger`](../../logger/classes/Logger.md)

#### Returns

`RabbitMQConnectionManager`

## Methods

### createConnections()

> **createConnections**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### destroyConnections()

> **destroyConnections**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### getAllConnections()

> **getAllConnections**(): `Map`\<`string`, `IAmqpConnectionManager`\>

#### Returns

`Map`\<`string`, `IAmqpConnectionManager`\>

***

### getConnection()

> **getConnection**(`name`): `IAmqpConnectionManager` \| `undefined`

#### Parameters

##### name

`string`

#### Returns

`IAmqpConnectionManager` \| `undefined`
