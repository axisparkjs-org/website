# Class: SignalResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../interfaces/ParameterResolver.md)\<`AbortSignal`\>

## Constructors

### Constructor

> **new SignalResolver**(): `SignalResolver`

#### Returns

`SignalResolver`

## Methods

### resolve()

> **resolve**(`executionContext`): `AbortSignal`

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### executionContext

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

`AbortSignal`

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../interfaces/ParameterResolver.md).[`resolve`](../interfaces/ParameterResolver.md#resolve)
