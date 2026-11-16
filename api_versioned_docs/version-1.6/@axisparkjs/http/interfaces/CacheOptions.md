# Interface: CacheOptions

Options for configuring the cache of the HTTP handlers decorated with `@Cache()`.

## Properties

### store?

> `optional` **store?**: `StoreFactory`\<`"cache"`\>

The provider of the store of the cached results, called when the plugin starts. Defaults to `MemoryStore()`, which keeps the results
in the process. Use a shared provider, such as `RedisStore('NAME')` from `@axisparkjs/redis`, to share the cache between instances.

***

### ttl?

> `optional` **ttl?**: `number`

Default time to live of the cached results in milliseconds, for the handlers whose `@Cache()` has no `ttl`. Defaults to 60 seconds.
