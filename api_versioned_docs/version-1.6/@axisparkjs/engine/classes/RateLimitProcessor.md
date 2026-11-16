# Class: RateLimitProcessor

Applies rate limit definitions with the same algorithm for every transport. The resolver registered for the transport
identifies the client, and the requests are counted per transport, client and handler in a `RateLimitStore` with a sliding window.

## Implements

- [`Processable`](../../common/interfaces/Processable.md)

## Constructors

### Constructor

> **new RateLimitProcessor**(): `RateLimitProcessor`

#### Returns

`RateLimitProcessor`

## Methods

### process()

> **process**(`definition`, `context`): `Promise`\<`RateLimitDecision` \| `undefined`\>

Counts the request of the context against the definition.

#### Parameters

##### definition

[`RateLimitDefinition`](RateLimitDefinition.md) \| `undefined`

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

#### Returns

`Promise`\<`RateLimitDecision` \| `undefined`\>

The decision, or `undefined` when there is no definition, or no resolver or no store is registered for the transport.

#### Implementation of

[`Processable`](../../common/interfaces/Processable.md).[`process`](../../common/interfaces/Processable.md#process)

***

### registerRateLimit()

> `static` **registerRateLimit**(`transport`, `resolver?`): `void`

Registers the resolver that identifies the clients of a transport. Passing undefined removes it.

#### Parameters

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

##### resolver?

[`RateLimitResolver`](../interfaces/RateLimitResolver.md)

#### Returns

`void`

***

### registerRateLimitStore()

> `static` **registerRateLimitStore**(`transport`, `store?`): `void`

Sets the store of the rate limit buckets of a transport. The plugins call it when they start, with the store created by the
`StoreProvider` of their options, which is `MemoryStore()` by default. Each transport keeps its own store, so a plugin never
replaces the store of another one, and the keys start with the transport, so two transports that share a store never share buckets.
Passing undefined removes it.

#### Parameters

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

##### store?

`RateLimitStore`

#### Returns

`void`
