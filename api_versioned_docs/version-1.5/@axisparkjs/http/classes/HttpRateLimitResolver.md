# Class: HttpRateLimitResolver

Identifies the HTTP clients by their IP address. `RateLimitProcessor` counts the requests per client and handler,
so every request to a route shares the same limit, whatever the values of its path parameters and its query string.

## Implements

- [`RateLimitResolver`](../../engine/interfaces/RateLimitResolver.md)

## Constructors

### Constructor

> **new HttpRateLimitResolver**(): `HttpRateLimitResolver`

#### Returns

`HttpRateLimitResolver`

## Methods

### resolve()

> **resolve**(`context`): `string` \| `undefined`

#### Parameters

##### context

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

#### Returns

`string` \| `undefined`

#### Implementation of

[`RateLimitResolver`](../../engine/interfaces/RateLimitResolver.md).[`resolve`](../../engine/interfaces/RateLimitResolver.md#resolve)
