# Interface: McpPluginOptions

Options for configuring the MCP plugin.

## Extends

- [`PluginOptions`](../../core/interfaces/PluginOptions.md)

## Properties

### allowedHosts?

> `optional` **allowedHosts?**: `string`[]

The host names accepted in the `Host` header by the HTTP transport, such as `['localhost', '127.0.0.1']`. Set it to protect local servers against DNS rebinding attacks. All hosts are accepted when it is not set.

***

### allowedOrigins?

> `optional` **allowedOrigins?**: `string`[]

The host names accepted in the `Origin` header by the HTTP transport. All origins are accepted when it is not set.

***

### instructions?

> `optional` **instructions?**: `string`

Instructions that describe how to use the server, which clients can add to the context of the model.

***

### name?

> `optional` **name?**: `string`

The name of the server sent to the clients. Defaults to the application name.

***

### path?

> `optional` **path?**: `string`

The path of the endpoint for the HTTP transport. When the endpoint is mounted on the HTTP plugin server, the base path of the HTTP plugin is prepended. Defaults to `/mcp`.

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)

***

### port?

> `optional` **port?**: `number`

The port of the standalone HTTP server, used when `useHttpPluginServer` is false. Defaults to 3000.

***

### timeout?

> `optional` **timeout?**: `number`

A default timeout in milliseconds for every tool, resource and prompt. Handlers can override it with `@Timeout()`.

***

### transport

> **transport**: [`McpTransportType`](../type-aliases/McpTransportType.md)

The transport used to communicate with the clients.

***

### useHttpPluginServer?

> `optional` **useHttpPluginServer?**: `boolean`

Whether to mount the HTTP endpoint on the HTTP plugin server instead of opening its own port. It requires the HTTP plugin.

***

### version?

> `optional` **version?**: `string`

The version of the server sent to the clients. Defaults to the version in the `package.json` of the application.
