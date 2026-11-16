# Class: SessionResolver

An interface for resolving parameter values based on the execution context.

## Implements

- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)\<`any`\>

## Constructors

### Constructor

> **new SessionResolver**(): `SessionResolver`

#### Returns

`SessionResolver`

## Methods

### resolve()

> **resolve**(`httpContext`): [`HttpSession`](../interfaces/HttpSession.md)\<`Record`\<`string`, `unknown`\>\> \| `undefined`

Resolves the value of a parameter based on the provided execution context and parameter definition.

#### Parameters

##### httpContext

[`HttpContext`](../interfaces/HttpContext.md)

The execution context containing relevant information for parameter resolution.

#### Returns

[`HttpSession`](../interfaces/HttpSession.md)\<`Record`\<`string`, `unknown`\>\> \| `undefined`

The resolved value of the parameter.

#### Implementation of

[`ParameterResolver`](../../engine/interfaces/ParameterResolver.md).[`resolve`](../../engine/interfaces/ParameterResolver.md#resolve)
