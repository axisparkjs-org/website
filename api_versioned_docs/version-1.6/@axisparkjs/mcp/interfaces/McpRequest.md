# Interface: McpRequest

Represents a single MCP request handled by a tool, a resource or a prompt.

## Properties

### arguments

> **arguments**: `Record`\<`string`, `unknown`\>

The arguments sent by the client. Set for tools and prompts; an empty object for resources.

***

### capability

> **capability**: [`McpCapability`](../enumerations/McpCapability.md)

The kind of capability the request is addressed to.

***

### meta?

> `optional` **meta?**: `Record`\<`string`, `unknown`\>

The `_meta` object sent with the request, if any.

***

### name

> **name**: `string`

The name of the tool, resource or prompt, including the prefix of its `@McpServer`.

***

### params

> **params**: `Record`\<`string`, `string` \| `string`[]\>

The variables extracted from the URI template of a resource. An empty object for tools and prompts.

***

### signal?

> `optional` **signal?**: `AbortSignal`

A signal that is aborted when the client cancels the request or the transport is closed.

***

### uri?

> `optional` **uri?**: `string`

The URI requested by the client. Only set for resources.
