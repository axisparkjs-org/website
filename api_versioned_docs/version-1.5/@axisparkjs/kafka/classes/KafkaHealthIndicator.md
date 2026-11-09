# Class: KafkaHealthIndicator

A health indicator that checks the connection to the Kafka brokers with the admin client.

## Extends

- [`HealthIndicator`](../../core/classes/HealthIndicator.md)

## Constructors

### Constructor

> **new KafkaHealthIndicator**(`connection`): `KafkaHealthIndicator`

#### Parameters

##### connection

`Kafka`

#### Returns

`KafkaHealthIndicator`

#### Overrides

[`HealthIndicator`](../../core/classes/HealthIndicator.md).[`constructor`](../../core/classes/HealthIndicator.md#constructor)

## Methods

### check()

> **check**(): `Promise`\<[`HealthCheckResult`](../../core/interfaces/HealthCheckResult.md)\>

Connects an admin client without retries and describes the cluster.

#### Returns

`Promise`\<[`HealthCheckResult`](../../core/interfaces/HealthCheckResult.md)\>

A promise resolving to the result of the health check.

#### Overrides

[`HealthIndicator`](../../core/classes/HealthIndicator.md).[`check`](../../core/classes/HealthIndicator.md#check)
