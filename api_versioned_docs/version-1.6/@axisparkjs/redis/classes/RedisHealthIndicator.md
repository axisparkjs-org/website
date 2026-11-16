# Class: RedisHealthIndicator

A health indicator that checks that a Redis connection answers a `PING`.

## Extends

- [`HealthIndicator`](../../core/classes/HealthIndicator.md)

## Constructors

### Constructor

> **new RedisHealthIndicator**(`connection`): `RedisHealthIndicator`

#### Parameters

##### connection

`RedisClientType`

#### Returns

`RedisHealthIndicator`

#### Overrides

[`HealthIndicator`](../../core/classes/HealthIndicator.md).[`constructor`](../../core/classes/HealthIndicator.md#constructor)

## Methods

### check()

> **check**(): `Promise`\<[`HealthCheckResult`](../../core/interfaces/HealthCheckResult.md)\>

Sends a `PING` and reports its latency. The `PING` is not sent when the client is not ready, because node-redis would queue it until the client reconnects.

#### Returns

`Promise`\<[`HealthCheckResult`](../../core/interfaces/HealthCheckResult.md)\>

A promise resolving to the result of the health check.

#### Overrides

[`HealthIndicator`](../../core/classes/HealthIndicator.md).[`check`](../../core/classes/HealthIndicator.md#check)
