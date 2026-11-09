# Interface: TimeoutResolver

An interface representing a timeout resolver.
It defines the contract for resolving timeout definitions based on the execution transport.

## Extends

- [`Resolver`](../../common/interfaces/Resolver.md)\<`void`\>

## Methods

### resolve()

> **resolve**(`timeout`): `void` \| `Promise`\<`void`\>

Resolves a timeout definition based on the execution transport.

#### Parameters

##### timeout

[`TimeoutDefinition`](../classes/TimeoutDefinition.md)

The timeout definition to resolve.

#### Returns

`void` \| `Promise`\<`void`\>

A promise resolving when the timeout has been resolved or void if synchronous.

#### Overrides

[`Resolver`](../../common/interfaces/Resolver.md).[`resolve`](../../common/interfaces/Resolver.md#resolve)
