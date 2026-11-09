# Interface: RedisPluginOptions

Interface representing the options for configuring the Redis plugin.

## Extends

- [`PluginOptions`](../../core/interfaces/PluginOptions.md)

## Properties

### connections

> **connections**: [`RedisConnectionOptions`](RedisConnectionOptions.md)[]

An array of named connection configurations for Redis.

***

### healthChecks?

> `optional` **healthChecks?**: `boolean`

Whether a health check is registered in the `HealthEngine` for each connection. Defaults to `true`.

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)
