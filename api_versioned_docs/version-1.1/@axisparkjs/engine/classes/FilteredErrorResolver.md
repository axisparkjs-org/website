# Class: FilteredErrorResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../interfaces/ParameterResolver.md)\<`Error`\>

## Constructors

### Constructor

> **new FilteredErrorResolver**(): `FilteredErrorResolver`

#### Returns

`FilteredErrorResolver`

## Methods

### resolve()

> **resolve**(`executionContext`): `Error`

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### executionContext

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

`Error`

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../interfaces/ParameterResolver.md).[`resolve`](../interfaces/ParameterResolver.md#resolve)
