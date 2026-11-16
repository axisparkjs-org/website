# Class: RabbitMQHealthIndicator

A health indicator that checks that a RabbitMQ connection is open.

## Extends

- [`HealthIndicator`](../../core/classes/HealthIndicator.md)

## Constructors

### Constructor

> **new RabbitMQHealthIndicator**(`connection`): `RabbitMQHealthIndicator`

#### Parameters

##### connection

`IAmqpConnectionManager`

#### Returns

`RabbitMQHealthIndicator`

#### Overrides

[`HealthIndicator`](../../core/classes/HealthIndicator.md).[`constructor`](../../core/classes/HealthIndicator.md#constructor)

## Methods

### check()

> **check**(): `Promise`\<[`HealthCheckResult`](../../core/interfaces/HealthCheckResult.md)\>

Checks that the connection is open and reports its number of channels.

#### Returns

`Promise`\<[`HealthCheckResult`](../../core/interfaces/HealthCheckResult.md)\>

A promise resolving to the result of the health check.

#### Overrides

[`HealthIndicator`](../../core/classes/HealthIndicator.md).[`check`](../../core/classes/HealthIndicator.md#check)
