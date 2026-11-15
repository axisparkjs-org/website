# Function: HealthCheck()

> **HealthCheck**(`options?`): `ClassDecorator`

A decorator for defining custom health checks. The decorated class must extend `HealthIndicator`. It is discovered automatically, resolved through the dependency injection container and run by the `HealthEngine`.

## Parameters

### options?

[`HealthCheckOptions`](../interfaces/HealthCheckOptions.md)

The options of the health check.

## Returns

`ClassDecorator`

A class decorator.
