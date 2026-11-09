# Class: RateLimitProcessor

Dispatches rate limit definitions to resolvers registered for each transport.

## Implements

- [`Processable`](../../common/interfaces/Processable.md)

## Constructors

### Constructor

> **new RateLimitProcessor**(): `RateLimitProcessor`

#### Returns

`RateLimitProcessor`

## Methods

### process()

> **process**(`definition`, `context`): `Promise`\<[`RateLimitDecision`](../interfaces/RateLimitDecision.md) \| `undefined`\>

Resolves a definition using the resolver for the execution transport.

#### Parameters

##### definition

[`RateLimitDefinition`](RateLimitDefinition.md) \| `undefined`

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

#### Returns

`Promise`\<[`RateLimitDecision`](../interfaces/RateLimitDecision.md) \| `undefined`\>

#### Implementation of

[`Processable`](../../common/interfaces/Processable.md).[`process`](../../common/interfaces/Processable.md#process)

***

### registerRateLimit()

> `static` **registerRateLimit**(`transport`, `resolver?`): `void`

Registers a transport-specific rate limit resolver. Passing undefined removes it.

#### Parameters

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

##### resolver?

[`RateLimitResolver`](../interfaces/RateLimitResolver.md)

#### Returns

`void`
