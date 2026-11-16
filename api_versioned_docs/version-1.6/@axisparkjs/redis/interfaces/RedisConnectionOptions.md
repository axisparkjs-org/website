# Interface: RedisConnectionOptions

The configuration of a named Redis connection.

## Properties

### name

> **name**: `string`

The name of the connection. This name is used to inject the connection and to identify it in logs and health checks. It should be unique for each connection configuration.
Use CONSTANT_CASE for the name to ensure consistency and avoid conflicts with other connection names.

***

### options?

> `optional` **options?**: `Omit`\<`RedisClientOptions`\<`RedisModules`, `RedisFunctions`, `RedisScripts`, `3`, `TypeMapping`, `RedisSocketOptions`\>, `"url"`\>

The client options passed to `createClient`, such as the socket, TLS, database or reconnect strategy settings.
The `url` of the connection takes precedence over the `url` of these options.

***

### url

> **url**: `string`

The connection URL, such as `redis://user:password@host:6379/0`, or `rediss://` for TLS.
