# Interface: ExecutionContext

An interface representing the execution context for a request of any kind. It extends the `ExecutionHandler` interface and includes additional properties such as `error`, `transport`, `scopedContainer` and `signal`. The `error` property is optional and can hold an error object if an error occurred during execution. The `transport` property indicates the transport mechanism used for the execution, and the `scopedContainer` property provides access to a scoped dependency injection container for managing dependencies within the execution context.

## Extends

- [`ExecutionHandler`](ExecutionHandler.md)

## Extended by

- [`HttpContext`](../../http/interfaces/HttpContext.md)
- [`McpContext`](../../mcp/interfaces/McpContext.md)
- [`SecurityContext`](../../security/interfaces/SecurityContext.md)
- [`WebSocketContext`](../../websocket/interfaces/WebSocketContext.md)

## Properties

### error?

> `optional` **error?**: `Error`

***

### propertyKey

> **propertyKey**: `string` \| `symbol`

#### Inherited from

[`ExecutionHandler`](ExecutionHandler.md).[`propertyKey`](ExecutionHandler.md#propertykey)

***

### scopedContainer

> **scopedContainer**: [`ScopedContainer`](../../di/classes/ScopedContainer.md)

***

### signal

> **signal**: `AbortSignal`

Aborted when the execution times out (with an `ExecutionTimeoutError` as reason) or its client stops waiting (with the reason given by the transport, such as a `ClientDisconnectedError`). Pass it to `fetch`, database drivers or your own loops to stop the work of a handler that nobody will read. Handlers receive it with `@Signal()`.

The transport can give its own signal in this property when it creates the context: the `ExecutionEngine` replaces it with a signal of the execution that is also aborted when the signal of the transport is aborted.

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`ExecutionHandler`](ExecutionHandler.md).[`target`](ExecutionHandler.md#target)

***

### transport

> **transport**: [`ExecutionTransport`](../enumerations/ExecutionTransport.md)
