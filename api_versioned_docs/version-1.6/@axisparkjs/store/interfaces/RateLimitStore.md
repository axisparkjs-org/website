# Interface: RateLimitStore

Stores the requests counted by the rate limits and applies the sliding window of a policy.
Use a shared store, such as `RedisStore` from `@axisparkjs/redis`, to share the limits between several instances of the application.

## Methods

### consume()

> **consume**(`key`, `policy`): [`RateLimitDecision`](RateLimitDecision.md) \| `Promise`\<[`RateLimitDecision`](RateLimitDecision.md)\>

Counts a request in the bucket of the key when the limit of the policy allows it.

#### Parameters

##### key

`string`

The bucket key, which identifies the transport, the client and the handler.

##### policy

[`RateLimitPolicy`](RateLimitPolicy.md)

The time window (`ttl`) and the maximum number of requests (`limit`).

#### Returns

[`RateLimitDecision`](RateLimitDecision.md) \| `Promise`\<[`RateLimitDecision`](RateLimitDecision.md)\>

Whether the request is allowed and, when it is not, the milliseconds until the oldest request leaves the window.
