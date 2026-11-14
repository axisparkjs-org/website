# Interface: WebSocketPluginOptions

Represents the options for a plugin, including the plugin type.
This interface is used to provide configuration options when registering a plugin.
The `plugin` property specifies the type of the plugin being registered.

## Extends

- [`PluginOptions`](../../core/interfaces/PluginOptions.md)

## Extended by

- [`SocketIOWebSocketPluginOptions`](../../websocket-socketio/interfaces/SocketIOWebSocketPluginOptions.md)

## Properties

### adapter

> **adapter**: [`WebSocketAdapterClass`](../type-aliases/WebSocketAdapterClass.md)

The WebSocket adapter to use. Express or Fastify are supported.

***

### connectTimeout?

> `optional` **connectTimeout?**: `number`

The number of ms before disconnecting a client that has not successfully joined a namespace.

***

### path?

> `optional` **path?**: `string`

It is the name of the path that is captured on the server side.

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)

***

### port?

> `optional` **port?**: `number`

The port on which the WebSocket server will listen. Default is 3000.

***

### rateLimit?

> `optional` **rateLimit?**: `boolean`

Whether to apply rate limits to the WebSocket events. Defaults to false. `@RateLimit()` and `@NoRateLimit()` override the default
limits on a class or event.

***

### rateLimitOptions?

> `optional` **rateLimitOptions?**: [`WebSocketRateLimitOptions`](WebSocketRateLimitOptions.md)

The default rate limits of the WebSocket events and their store.

***

### serveClient?

> `optional` **serveClient?**: `boolean`

Whether to serve the client files. Default is true. If set to false, the client files will not be served.

***

### timeout?

> `optional` **timeout?**: `boolean`

Whether every WebSocket event has a default timeout. Defaults to false. The `@Timeout()` of an event works even when it is disabled, and `@NoTimeout()` disables the default timeout of an event.

***

### timeoutOptions?

> `optional` **timeoutOptions?**: [`WebSocketTimeoutOptions`](WebSocketTimeoutOptions.md)

Options for configuring the timeouts of the WebSocket events.

***

### trustProxy?

> `optional` **trustProxy?**: [`TrustProxyOption`](../../http/type-aliases/TrustProxyOption.md)

The proxies trusted to resolve the client address of a connection from the `X-Forwarded-For` header of its handshake, used by
`connection.remoteAddress` and the rate limits. It accepts the same values as the `trustProxy` option of the HTTP plugin. Defaults to
`false`, or to the `trustProxy` option of the HTTP plugin when `useHttpPluginServer` is enabled.

***

### useHttpPluginServer

> **useHttpPluginServer**: `boolean`

Whether to use the built-in HTTP server for WebSockets. Default is false. If set to true, the WebSocket server will be created using the built-in HTTP server.
