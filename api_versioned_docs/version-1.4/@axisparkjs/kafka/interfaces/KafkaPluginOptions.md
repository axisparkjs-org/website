# Interface: KafkaPluginOptions

Interface representing the options for configuring the Kafka plugin.

## Extends

- [`PluginOptions`](../../core/interfaces/PluginOptions.md)

## Properties

### connections

> **connections**: `object`[]

An array of Kafka client configurations and optional producer/consumer settings.

#### autoInitialize?

> `optional` **autoInitialize?**: `boolean` \| \{ `autoInitializeConsumers?`: `boolean`; `autoInitializeProducers?`: `boolean`; \}

Controls whether consumers and producers are connected automatically. A boolean applies to both; an object selects each independently.
When omitted, both are initialized. Set false to create them on demand.

#### config

> **config**: `KafkaConfig`

The connection configuration for Kafka, which includes the necessary settings to establish a connection to the Kafka broker(s).
This configuration is passed to the Kafka constructor from the kafkajs library.

#### consumerConfig?

> `optional` **consumerConfig?**: `Partial`\<`ConsumerConfig`\>

The configuration for the Kafka consumer.

#### name

> **name**: `string`

The name of the connection. This name is used to identify the connection in logs and error messages. It should be unique for each connection configuration.
Use CONSTANT_CASE for the name to ensure consistency and avoid conflicts with other connection names.

#### producerConfig?

> `optional` **producerConfig?**: `ProducerConfig`

The configuration for the Kafka producer.

***

### healthChecks?

> `optional` **healthChecks?**: `boolean`

Whether a health check is registered in the `HealthEngine` for each connection. Defaults to `true`.

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)
