# Class: WsConnectionResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<[`WebSocketConnection`](../interfaces/WebSocketConnection.md)\>

## Constructors

### Constructor

> **new WsConnectionResolver**(): `WsConnectionResolver`

#### Returns

`WsConnectionResolver`

## Methods

### resolve()

> **resolve**(`webSocketContext`): [`WebSocketConnection`](../interfaces/WebSocketConnection.md)

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### webSocketContext

[`WebSocketContext`](../interfaces/WebSocketContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

[`WebSocketConnection`](../interfaces/WebSocketConnection.md)

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
