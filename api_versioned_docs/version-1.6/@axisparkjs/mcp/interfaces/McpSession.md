# Interface: McpSession

Information about the MCP session or connection that carries a request.

## Properties

### authInfo?

> `optional` **authInfo?**: `Readonly`\<`Record`\<`string`, `unknown`\>\>

The validated authentication information of the request, when the HTTP transport provides it.

***

### headers?

> `optional` **headers?**: `Readonly`\<`Record`\<`string`, `string`\>\>

The headers of the HTTP request. Only set for the HTTP transport.

***

### id

> **id**: `string` \| `undefined`

The session identifier assigned by the transport, if the transport uses sessions.

***

### transport

> **transport**: `"stdio"` \| `"http"`

The transport that received the request.
