# Interface: ParameterResolver\<T\>

An interface for resolving parameter values based on the execution context.

## Extends

- [`Resolver`](../../common/interfaces/Resolver.md)\<`T`\>

## Type Parameters

### T

`T`

## Methods

### resolve()

> **resolve**(`executionContext`, `parameter`): `T`

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### executionContext

[`ExecutionContext`](ExecutionContext.md)

The execution context containing relevant information for parameter resolution.

##### parameter

[`ParameterDefinition`](../classes/ParameterDefinition.md)

The parameter definition that provides metadata and context for resolution.

#### Returns

`T`

The resolved value of the parameter.

#### Overrides

[`Resolver`](../../common/interfaces/Resolver.md).[`resolve`](../../common/interfaces/Resolver.md#resolve)
