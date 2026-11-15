# Class: WsDataResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<`any`\>

## Constructors

### Constructor

> **new WsDataResolver**(): `WsDataResolver`

#### Returns

`WsDataResolver`

## Methods

### resolve()

> **resolve**(`webSocketContext`): `unknown`

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### webSocketContext

[`WebSocketContext`](../interfaces/WebSocketContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

`unknown`

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
