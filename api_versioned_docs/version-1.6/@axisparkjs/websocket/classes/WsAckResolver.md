# Class: WsAckResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<((`response?`) => `void`) \| `undefined`\>

## Constructors

### Constructor

> **new WsAckResolver**(): `WsAckResolver`

#### Returns

`WsAckResolver`

## Methods

### resolve()

> **resolve**(`webSocketContext`): ((`response?`) => `void`) \| `undefined`

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### webSocketContext

[`WebSocketContext`](../interfaces/WebSocketContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

((`response?`) => `void`) \| `undefined`

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
