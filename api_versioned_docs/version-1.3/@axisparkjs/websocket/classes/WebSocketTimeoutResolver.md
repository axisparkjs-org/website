# Class: WebSocketTimeoutResolver

A resolver for handling WebSocket request timeouts. It throws a RequestTimeoutError with a custom message when a timeout occurs.

## Implements

- [`TimeoutResolver`](../../engine/interfaces/TimeoutResolver.md)

## Constructors

### Constructor

> **new WebSocketTimeoutResolver**(): `WebSocketTimeoutResolver`

#### Returns

`WebSocketTimeoutResolver`

## Methods

### resolve()

> **resolve**(`timeout`): `Promise`\<`void`\>

Resolves a timeout definition based on the execution transport.

#### Parameters

##### timeout

[`TimeoutDefinition`](../../engine/classes/TimeoutDefinition.md)

The timeout definition to resolve.

#### Returns

`Promise`\<`void`\>

A promise resolving when the timeout has been resolved or void if synchronous.

#### Implementation of

[`TimeoutResolver`](../../engine/interfaces/TimeoutResolver.md).[`resolve`](../../engine/interfaces/TimeoutResolver.md#resolve)
