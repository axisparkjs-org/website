# Function: RedisStore()

> **RedisStore**(`connection`, `options?`): `StoreFactory`\<`"rate-limit"`\> & `StoreFactory`\<`"lock"`\> & `StoreFactory`\<`"cache"`\>

Creates the provider of the stores that keep their data in a Redis connection of the `RedisPlugin`, so every instance
of the application connected to the same Redis shares them.

```ts
const redis = RedisStore('MAIN', { prefix: 'myapp:' });

app.use(HttpPlugin, HttpPluginOptionsFactory.create({ rateLimit: true, rateLimitOptions: { ttl: 60_000, limit: 100, store: redis } }));
app.use(SchedulePlugin, SchedulePluginOptionsFactory.create({ lockStore: redis }));
```

The plugins call the provider when they start, after the `RedisPlugin` has registered its connections, so the order of the plugins does not matter.
The stores use the connection but never open or close it: the `RedisPlugin` manages it.

## Parameters

### connection

`string`

The name of a connection configured in the `RedisPlugin`.

### options?

[`RedisStoreOptions`](../interfaces/RedisStoreOptions.md) = `{}`

The options of the stores.

## Returns

`StoreFactory`\<`"rate-limit"`\> & `StoreFactory`\<`"lock"`\> & `StoreFactory`\<`"cache"`\>

A provider of rate limit, lock and cache stores.
