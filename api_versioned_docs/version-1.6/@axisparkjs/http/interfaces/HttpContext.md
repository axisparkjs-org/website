# Interface: HttpContext

Represents the context of an HTTP request, including request, response, session, host, and version information. Extends the ExecutionContext from the engine module.

## Extends

- [`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

## Properties

### error?

> `optional` **error?**: `Error`

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`error`](../../engine/interfaces/ExecutionContext.md#error)

***

### host

> **host**: [`HostDefinition`](../classes/HostDefinition.md) \| `undefined`

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

### signal

> **signal**: `AbortSignal`

Aborted when the execution times out (with an `ExecutionTimeoutError` as reason) or its client stops waiting (with the reason given by the transport, such as a `ClientDisconnectedError`). Pass it to `fetch`, database drivers or your own loops to stop the work of a handler that nobody will read. Handlers receive it with `@Signal()`.

The transport can give its own signal in this property when it creates the context: the `ExecutionEngine` replaces it with a signal of the execution that is also aborted when the signal of the transport is aborted.

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`signal`](../../engine/interfaces/ExecutionContext.md#signal)

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
