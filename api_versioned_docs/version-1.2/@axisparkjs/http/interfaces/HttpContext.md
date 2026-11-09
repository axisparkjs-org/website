# Interface: HttpContext

Represents the context of an HTTP request, including request, response, session, and version information. Extends the ExecutionContext from the engine module.

## Extends

- [`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

## Properties

### error?

> `optional` **error?**: `Error`

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`error`](../../engine/interfaces/ExecutionContext.md#error)

***

### propertyKey

> **propertyKey**: `string` \| `symbol`

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`propertyKey`](../../engine/interfaces/ExecutionContext.md#propertykey)

***

### request

> **request**: [`HttpRequest`](HttpRequest.md)

***

### response

> **response**: [`HttpResponse`](HttpResponse.md)

***

### scopedContainer

> **scopedContainer**: [`ScopedContainer`](../../di/classes/ScopedContainer.md)

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`scopedContainer`](../../engine/interfaces/ExecutionContext.md#scopedcontainer)

***

### session

> **session**: [`HttpSession`](HttpSession.md)\<`Record`\<`string`, `unknown`\>\> \| `undefined`

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`target`](../../engine/interfaces/ExecutionContext.md#target)

***

### transport

> **transport**: [`ExecutionTransport`](../../engine/enumerations/ExecutionTransport.md)

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`transport`](../../engine/interfaces/ExecutionContext.md#transport)

***

### version

> **version**: [`VersionDefinition`](../classes/VersionDefinition.md) \| `undefined`
