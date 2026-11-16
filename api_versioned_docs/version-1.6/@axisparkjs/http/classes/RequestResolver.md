# Class: RequestResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<[`HttpRequest`](../interfaces/HttpRequest.md)\>

## Constructors

### Constructor

> **new RequestResolver**(): `RequestResolver`

#### Returns

`RequestResolver`

## Methods

### resolve()

> **resolve**(`httpContext`): [`HttpRequest`](../interfaces/HttpRequest.md)

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### httpContext

[`HttpContext`](../interfaces/HttpContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

[`HttpRequest`](../interfaces/HttpRequest.md)

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
