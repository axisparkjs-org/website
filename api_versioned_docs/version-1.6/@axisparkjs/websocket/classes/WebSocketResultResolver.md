# Class: WebSocketResultResolver

A resolver for creating WebSocket results from unknown values.

## Implements

- [`ResultResolver`](../../engine/classes/ResultResolver.md)

## Constructors

### Constructor

> **new WebSocketResultResolver**(): `WebSocketResultResolver`

#### Returns

`WebSocketResultResolver`

## Methods

### resolve()

> **resolve**(`result`): [`ResultDefinition`](../../engine/classes/ResultDefinition.md)

Resolves an unknown value into an WebSocket result.

#### Parameters

##### result

`unknown`

The unknown value to resolve.

#### Returns

[`ResultDefinition`](../../engine/classes/ResultDefinition.md)

The resolved WebSocket result.

#### Implementation of

[`ResultResolver`](../../engine/classes/ResultResolver.md).[`resolve`](../../engine/classes/ResultResolver.md#resolve)
