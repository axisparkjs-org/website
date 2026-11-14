# Interface: McpHttpTransportOptions

Options of the MCP Streamable HTTP transport.

## Properties

### allowedHosts?

> `optional` **allowedHosts?**: `string`[]

The host names accepted in the `Host` header. All hosts are accepted when it is not set.

***

### allowedOrigins?

> `optional` **allowedOrigins?**: `string`[]

The host names accepted in the `Origin` header. All origins are accepted when it is not set.

***

### onError?

> `optional` **onError?**: (`error`) => `void`

A callback for errors that do not reach a handler.

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### path

> **path**: `string`

The path of the MCP endpoint, including the base path of the HTTP plugin when the transport is mounted on its server.

***

### port?

> `optional` **port?**: `number`

The port of the standalone HTTP server. Ignored when `server` is given.

***

### server?

> `optional` **server?**: [`HttpServer`](../../common/type-aliases/HttpServer.md)

An existing HTTP server, such as the HTTP plugin server, where the endpoint is mounted. Other requests are passed to the listeners of that server.
