# Class: InMemoryRateLimitStore

Keeps the rate limit buckets in memory with a sliding window. The buckets are local to the application process,
and the expired ones are removed every 256 checks.

## Implements

- [`RateLimitStore`](../interfaces/RateLimitStore.md)

## Constructors

### Constructor

> **new InMemoryRateLimitStore**(): `InMemoryRateLimitStore`

#### Returns

`InMemoryRateLimitStore`

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

The number of buckets that are currently stored.

##### Returns

`number`

## Methods

### consume()

> **consume**(`key`, `policy`): [`RateLimitDecision`](../interfaces/RateLimitDecision.md)

Counts a request in the bucket of the key when the limit of the policy allows it.

#### Parameters

##### key

`string`

The bucket key, which identifies the transport, the client and the handler.

##### policy

[`RateLimitPolicy`](../interfaces/RateLimitPolicy.md)

The time window (`ttl`) and the maximum number of requests (`limit`).

#### Returns

[`RateLimitDecision`](../interfaces/RateLimitDecision.md)

Whether the request is allowed and, when it is not, the milliseconds until the oldest request leaves the window.

#### Implementation of

[`RateLimitStore`](../interfaces/RateLimitStore.md).[`consume`](../interfaces/RateLimitStore.md#consume)
