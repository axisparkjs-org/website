# Class: McpSessionResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<[`McpSession`](../interfaces/McpSession.md)\>

## Constructors

### Constructor

> **new McpSessionResolver**(): `McpSessionResolver`

#### Returns

`McpSessionResolver`

## Methods

### resolve()

> **resolve**(`context`): [`McpSession`](../interfaces/McpSession.md)

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### context

[`McpContext`](../interfaces/McpContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

[`McpSession`](../interfaces/McpSession.md)

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
