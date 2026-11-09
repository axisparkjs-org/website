# Class: CookieResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<`string` \| `undefined`\>

## Constructors

### Constructor

> **new CookieResolver**(): `CookieResolver`

#### Returns

`CookieResolver`

## Methods

### resolve()

> **resolve**(`httpContext`, `parameter`): `string` \| `undefined`

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### httpContext

[`HttpContext`](../interfaces/HttpContext.md)

The execution context containing relevant information for parameter resolution.

##### parameter

[`ParameterDefinition`](../../engine/classes/ParameterDefinition.md)

The parameter definition that provides metadata and context for resolution.

#### Returns

`string` \| `undefined`

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
