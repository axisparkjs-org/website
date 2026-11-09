# Type Alias: McpResponse

> **McpResponse** = \{ `error?`: `undefined`; `result`: `Record`\<`string`, `unknown`\>; \} \| \{ `error`: [`McpError`](../classes/McpError.md); `result?`: `undefined`; \}

The outcome of an MCP request after it has run through the execution engine. It holds either the MCP result sent to the client or the error returned as a protocol error.
