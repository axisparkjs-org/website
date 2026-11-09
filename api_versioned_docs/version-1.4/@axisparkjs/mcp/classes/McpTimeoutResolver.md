# Class: McpTimeoutResolver

A resolver for handling MCP request timeouts. It throws an McpError when a timeout occurs.

## Implements

- [`TimeoutResolver`](../../engine/interfaces/TimeoutResolver.md)

## Constructors

### Constructor

> **new McpTimeoutResolver**(): `McpTimeoutResolver`

#### Returns

`McpTimeoutResolver`

## Methods

### resolve()

> **resolve**(`timeout`): `Promise`\<`void`\>

Resolves a timeout definition based on the execution transport.

#### Parameters

##### timeout

[`TimeoutDefinition`](../../engine/classes/TimeoutDefinition.md)

The timeout definition to resolve.

#### Returns

`Promise`\<`void`\>

A promise resolving when the timeout has been resolved or void if synchronous.

#### Implementation of

[`TimeoutResolver`](../../engine/interfaces/TimeoutResolver.md).[`resolve`](../../engine/interfaces/TimeoutResolver.md#resolve)
