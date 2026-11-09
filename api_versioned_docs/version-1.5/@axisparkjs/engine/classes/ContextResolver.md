# Class: ContextResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../interfaces/ParameterResolver.md)\<[`ExecutionContext`](../interfaces/ExecutionContext.md)\>

## Constructors

### Constructor

> **new ContextResolver**(): `ContextResolver`

#### Returns

`ContextResolver`

## Methods

### resolve()

> **resolve**(`executionContext`): [`ExecutionContext`](../interfaces/ExecutionContext.md)

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### executionContext

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../interfaces/ParameterResolver.md).[`resolve`](../interfaces/ParameterResolver.md#resolve)
