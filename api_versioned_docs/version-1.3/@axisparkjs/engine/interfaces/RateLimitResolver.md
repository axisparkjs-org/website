# Interface: RateLimitResolver

Resolves a rate limit using the identity and state of a specific transport.

## Extends

- [`Resolver`](../../common/interfaces/Resolver.md)\<[`RateLimitDecision`](RateLimitDecision.md)\>

## Methods

### resolve()

> **resolve**(`definition`, `context`): [`RateLimitDecision`](RateLimitDecision.md) \| `Promise`\<[`RateLimitDecision`](RateLimitDecision.md)\>

#### Parameters

##### definition

[`RateLimitDefinition`](../classes/RateLimitDefinition.md)

##### context

[`ExecutionContext`](ExecutionContext.md)

#### Returns

[`RateLimitDecision`](RateLimitDecision.md) \| `Promise`\<[`RateLimitDecision`](RateLimitDecision.md)\>

#### Overrides

[`Resolver`](../../common/interfaces/Resolver.md).[`resolve`](../../common/interfaces/Resolver.md#resolve)
