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

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`target`](../../engine/interfaces/ExecutionContext.md#target)

***

### transport

> **transport**: [`ExecutionTransport`](../../engine/enumerations/ExecutionTransport.md)

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`transport`](../../engine/interfaces/ExecutionContext.md#transport)
