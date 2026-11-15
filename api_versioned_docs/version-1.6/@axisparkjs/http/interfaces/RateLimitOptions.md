# Interface: RateLimitOptions

Options for configuring HTTP rate limiting.

## Properties

### limit

> **limit**: `number`

The maximum number of requests allowed in the window.

***

### message?

> `optional` **message?**: `string` \| ((`time`) => `string`)

The response message when a client exceeds the limit. The function receives milliseconds until the oldest request expires.

***

### store?

> `optional` **store?**: `StoreFactory`\<`"rate-limit"`\>

The provider of the store that counts the requests, called when the plugin starts. Defaults to `MemoryStore()`, which keeps the
counters in the process. Use a shared provider, such as `RedisStore('NAME')` from `@axisparkjs/redis`, to share the limits between instances.

***

### ttl

> **ttl**: `number`

The sliding time window in milliseconds.
