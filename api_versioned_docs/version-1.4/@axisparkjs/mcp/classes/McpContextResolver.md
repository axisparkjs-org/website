# Class: McpContextResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<[`McpContext`](../interfaces/McpContext.md)\>

## Constructors

### Constructor

> **new McpContextResolver**(): `McpContextResolver`

#### Returns

`McpContextResolver`

## Methods

### resolve()

> **resolve**(`context`): [`McpContext`](../interfaces/McpContext.md)

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### context

[`McpContext`](../interfaces/McpContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

[`McpContext`](../interfaces/McpContext.md)

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
