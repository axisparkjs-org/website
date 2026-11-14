# Interface: McpContext

Represents the context of an MCP request. Extends the ExecutionContext from the engine module.

## Extends

- [`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

## Properties

### client

> **client**: [`McpClientInfo`](McpClientInfo.md) \| `undefined`

The client that sent the request, if it declared itself.

***

### definition

> **definition**: [`McpCapabilityDefinition`](../type-aliases/McpCapabilityDefinition.md)

The definition of the tool, resource or prompt that handles the request.

***

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

> **request**: [`McpRequest`](McpRequest.md)

The request being handled.

***

### response?

> `optional` **response?**: [`McpResponse`](../type-aliases/McpResponse.md)

The outcome of the request, set when the result of the handler is processed.

***

### scopedContainer

> **scopedContainer**: [`ScopedContainer`](../../di/classes/ScopedContainer.md)

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`scopedContainer`](../../engine/interfaces/ExecutionContext.md#scopedcontainer)

***

### session

> **session**: [`McpSession`](McpSession.md)

The session or connection that carries the request.

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
