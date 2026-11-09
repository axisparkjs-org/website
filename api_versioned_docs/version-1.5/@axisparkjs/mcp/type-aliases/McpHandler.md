# Type Alias: McpHandler

> **McpHandler** = (`input`) => `Promise`\<[`McpResponse`](McpResponse.md) \| `undefined`\>

A function that runs an MCP request through the execution engine and returns its response.

## Parameters

### input

`Pick`\<[`McpContext`](../interfaces/McpContext.md), `"request"` \| `"session"` \| `"client"`\>

The request and the session of the MCP context.

## Returns

`Promise`\<[`McpResponse`](McpResponse.md) \| `undefined`\>

The response of the request, or undefined when no result was processed.
