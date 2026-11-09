# Class: ResponseResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<[`HttpResponse`](../interfaces/HttpResponse.md)\>

## Constructors

### Constructor

> **new ResponseResolver**(): `ResponseResolver`

#### Returns

`ResponseResolver`

## Methods

### resolve()

> **resolve**(`httpContext`): [`HttpResponse`](../interfaces/HttpResponse.md)

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### httpContext

[`HttpContext`](../interfaces/HttpContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

[`HttpResponse`](../interfaces/HttpResponse.md)

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
