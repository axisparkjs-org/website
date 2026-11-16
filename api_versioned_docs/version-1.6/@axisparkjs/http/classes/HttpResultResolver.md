# Class: HttpResultResolver

A resolver for creating HTTP results from unknown values.

## Implements

- [`ResultResolver`](../../engine/classes/ResultResolver.md)

## Constructors

### Constructor

> **new HttpResultResolver**(): `HttpResultResolver`

#### Returns

`HttpResultResolver`

## Methods

### resolve()

> **resolve**(`result`, `context`): [`ResultDefinition`](../../engine/classes/ResultDefinition.md)

Resolves an unknown value into an HTTP result.

#### Parameters

##### result

`unknown`

The unknown value to resolve.

##### context

[`HttpContext`](../interfaces/HttpContext.md)

The HTTP context.

#### Returns

[`ResultDefinition`](../../engine/classes/ResultDefinition.md)

The resolved HTTP result.

#### Implementation of

[`ResultResolver`](../../engine/classes/ResultResolver.md).[`resolve`](../../engine/classes/ResultResolver.md#resolve)
