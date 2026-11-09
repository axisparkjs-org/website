# Function: redisConnectionToken()

> **redisConnectionToken**(`name`): [`InjectionToken`](../../di/classes/InjectionToken.md)

Creates the injection token of a named Redis connection.

## Parameters

### name

`string`

The name of the connection, as configured in the plugin options.

## Returns

[`InjectionToken`](../../di/classes/InjectionToken.md)

The `REDIS_CONNECTION_<name>` token.
