# Class: HttpRateLimitResolver

Resolves HTTP rate limits using the client IP and endpoint as the bucket key.

## Implements

- [`RateLimitResolver`](../../engine/interfaces/RateLimitResolver.md)

## Constructors

### Constructor

> **new HttpRateLimitResolver**(): `HttpRateLimitResolver`

#### Returns

`HttpRateLimitResolver`

## Methods

### resolve()

> **resolve**(`definition`, `context`): [`RateLimitDecision`](../interfaces/RateLimitDecision.md)

#### Parameters

##### definition

[`RateLimitDefinition`](../../engine/classes/RateLimitDefinition.md)

##### context

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

#### Returns

[`RateLimitDecision`](../interfaces/RateLimitDecision.md)

#### Implementation of

[`RateLimitResolver`](../../engine/interfaces/RateLimitResolver.md).[`resolve`](../../engine/interfaces/RateLimitResolver.md#resolve)
