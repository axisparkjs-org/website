# Abstract Class: HealthIndicator

An abstract class for defining custom health checks. Classes extending `HealthIndicator` and decorated with `@HealthCheck` are discovered automatically and run by the `HealthEngine` every time the health of the application is checked.
Plugins can also register their own indicators with `HealthEngine.register()`.

## Extended by

- [`DataSourceHealthIndicator`](../../data/classes/DataSourceHealthIndicator.md)
- [`KafkaHealthIndicator`](../../kafka/classes/KafkaHealthIndicator.md)
- [`RabbitMQHealthIndicator`](../../rabbitmq/classes/RabbitMQHealthIndicator.md)
- [`RedisHealthIndicator`](../../redis/classes/RedisHealthIndicator.md)

## Constructors

### Constructor

> **new HealthIndicator**(): `HealthIndicator`

#### Returns

`HealthIndicator`

## Methods

### check()

> `abstract` **check**(): `Promise`\<[`HealthCheckResult`](../interfaces/HealthCheckResult.md)\>

Checks the health of a dependency. If the method throws an error or exceeds its timeout, the check is reported as `Unhealthy`.

#### Returns

`Promise`\<[`HealthCheckResult`](../interfaces/HealthCheckResult.md)\>

A promise resolving to the result of the health check.
