# Interface: WebSocketRateLimitOptions

Options for configuring the rate limits of the WebSocket events.

## Properties

### by?

> `optional` **by?**: [`WebSocketRateLimitBy`](../type-aliases/WebSocketRateLimitBy.md)

How the clients are identified. Defaults to `'address'`, falling back to the connection id when the adapter does not know the address.

***

### limit?

> `optional` **limit?**: `number`

The maximum number of events allowed in the window, per client and event handler. Defaults to 100.

***

### message?

> `optional` **message?**: `string` \| ((`retryAfterMs`) => `string`)

The error message when a client exceeds the limit. The function receives the milliseconds until it can send the event again.

***

### store?

> `optional` **store?**: [`StoreFactory`](../../store/type-aliases/StoreFactory.md)\<`"rate-limit"`\>

The provider of the store that counts the events, called when the plugin starts. Defaults to `MemoryStore()`, which keeps the counters
in the process. Use a shared provider, such as `RedisStore('NAME')` from `@axisparkjs/redis`, to share the limits between instances.

***

### ttl?

> `optional` **ttl?**: `number`

The sliding time window in milliseconds. Defaults to 60000.
