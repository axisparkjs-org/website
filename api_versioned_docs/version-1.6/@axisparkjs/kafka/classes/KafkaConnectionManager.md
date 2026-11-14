# Class: KafkaConnectionManager

A manager for creating and managing connections to Kafka.

## Constructors

### Constructor

> **new KafkaConnectionManager**(`kafkaPluginOptions`, `logger`): `KafkaConnectionManager`

#### Parameters

##### kafkaPluginOptions

[`KafkaPluginOptions`](../interfaces/KafkaPluginOptions.md)

##### logger

`Logger`

#### Returns

`KafkaConnectionManager`

## Methods

### createConnections()

> **createConnections**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### createConsumer()

> **createConsumer**(`name`): `Promise`\<`Consumer` \| `undefined`\>

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`Consumer` \| `undefined`\>

***

### createProducer()

> **createProducer**(`name`): `Promise`\<`Producer` \| `undefined`\>

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`Producer` \| `undefined`\>

***

### destroyConnections()

> **destroyConnections**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### getAllConnections()

> **getAllConnections**(): `Map`\<`string`, `Kafka`\>

#### Returns

`Map`\<`string`, `Kafka`\>

***

### getAllConsumers()

> **getAllConsumers**(): `Map`\<`string`, `Consumer`\>

#### Returns

`Map`\<`string`, `Consumer`\>

***

### getAllProducers()

> **getAllProducers**(): `Map`\<`string`, `Producer`\>

#### Returns

`Map`\<`string`, `Producer`\>

***

### getConnection()

> **getConnection**(`name`): `Kafka` \| `undefined`

#### Parameters

##### name

`string`

#### Returns

`Kafka` \| `undefined`

***

### getConsumer()

> **getConsumer**(`name`): `Consumer` \| `undefined`

#### Parameters

##### name

`string`

#### Returns

`Consumer` \| `undefined`

***

### getProducer()

> **getProducer**(`name`): `Producer` \| `undefined`

#### Parameters

##### name

`string`

#### Returns

`Producer` \| `undefined`
