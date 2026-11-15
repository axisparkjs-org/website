# Class: McpArgsResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<`Record`\<`string`, `unknown`\>\>

## Constructors

### Constructor

> **new McpArgsResolver**(): `McpArgsResolver`

#### Returns

`McpArgsResolver`

## Methods

### resolve()

> **resolve**(`context`): `Record`\<`string`, `unknown`\>

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### context

[`McpContext`](../interfaces/McpContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

`Record`\<`string`, `unknown`\>

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
