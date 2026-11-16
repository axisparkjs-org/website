# Class: RedisRateLimitStore

Counts the rate limit requests in Redis with the same sliding window as `InMemoryRateLimitStore`, so every instance of the
application connected to the same Redis shares the limits. The buckets expire with their window.

## Implements

- `RateLimitStore`

## Constructors

### Constructor

> **new RedisRateLimitStore**(`connection`): `RedisRateLimitStore`

#### Parameters

##### connection

[`RedisStoreConnection`](RedisStoreConnection.md)

#### Returns

`RedisRateLimitStore`

## Methods

### consume()

> **consume**(`key`, `policy`): `Promise`\<`RateLimitDecision`\>

#### Parameters

##### key

`string`

##### policy

`RateLimitPolicy`

#### Returns

`Promise`\<`RateLimitDecision`\>

#### Implementation of

`RateLimitStore.consume`
