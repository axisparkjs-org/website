# Class: WsMessageResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<[`WebSocketMessage`](../interfaces/WebSocketMessage.md) \| `undefined`\>

## Constructors

### Constructor

> **new WsMessageResolver**(): `WsMessageResolver`

#### Returns

`WsMessageResolver`

## Methods

### resolve()

> **resolve**(`webSocketContext`): [`WebSocketMessage`](../interfaces/WebSocketMessage.md)\<`unknown`\> \| `undefined`

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### webSocketContext

[`WebSocketContext`](../interfaces/WebSocketContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

[`WebSocketMessage`](../interfaces/WebSocketMessage.md)\<`unknown`\> \| `undefined`

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
