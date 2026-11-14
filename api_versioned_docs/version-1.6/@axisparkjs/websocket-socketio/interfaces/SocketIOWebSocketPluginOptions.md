# Interface: SocketIOWebSocketPluginOptions

An interface extending the base WebSocketPluginOptions to include additional configuration options specific to the Socket.IO WebSocket plugin.

## Extends

- [`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md)

## Properties

### adapter

> **adapter**: [`WebSocketAdapterClass`](../../websocket/type-aliases/WebSocketAdapterClass.md)

The WebSocket adapter to use. Express or Fastify are supported.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`adapter`](../../websocket/interfaces/WebSocketPluginOptions.md#adapter)

***

### connectTimeout?

> `optional` **connectTimeout?**: `number`

The number of ms before disconnecting a client that has not successfully joined a namespace.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`connectTimeout`](../../websocket/interfaces/WebSocketPluginOptions.md#connecttimeout)

***

### path?

> `optional` **path?**: `string`

It is the name of the path that is captured on the server side.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`path`](../../websocket/interfaces/WebSocketPluginOptions.md#path)

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`plugin`](../../websocket/interfaces/WebSocketPluginOptions.md#plugin)

***

### port?

> `optional` **port?**: `number`

The port on which the WebSocket server will listen. Default is 3000.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`port`](../../websocket/interfaces/WebSocketPluginOptions.md#port)

***

### rateLimit?

> `optional` **rateLimit?**: `boolean`

Whether to apply rate limits to the WebSocket events. Defaults to false. `@RateLimit()` and `@NoRateLimit()` override the default
limits on a class or event.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`rateLimit`](../../websocket/interfaces/WebSocketPluginOptions.md#ratelimit)

***

### rateLimitOptions?

> `optional` **rateLimitOptions?**: [`WebSocketRateLimitOptions`](../../websocket/interfaces/WebSocketRateLimitOptions.md)

The default rate limits of the WebSocket events and their store.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`rateLimitOptions`](../../websocket/interfaces/WebSocketPluginOptions.md#ratelimitoptions)

***

### serveClient?

> `optional` **serveClient?**: `boolean`

Whether to serve the client files. Default is true. If set to false, the client files will not be served.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`serveClient`](../../websocket/interfaces/WebSocketPluginOptions.md#serveclient)

***

### timeout?

> `optional` **timeout?**: `boolean`

Whether every WebSocket event has a default timeout. Defaults to false. The `@Timeout()` of an event works even when it is disabled, and `@NoTimeout()` disables the default timeout of an event.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`timeout`](../../websocket/interfaces/WebSocketPluginOptions.md#timeout)

***

### timeoutOptions?

> `optional` **timeoutOptions?**: [`WebSocketTimeoutOptions`](../../websocket/interfaces/WebSocketTimeoutOptions.md)

Options for configuring the timeouts of the WebSocket events.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`timeoutOptions`](../../websocket/interfaces/WebSocketPluginOptions.md#timeoutoptions)

***

### trustProxy?

> `optional` **trustProxy?**: [`TrustProxyOption`](../../http/type-aliases/TrustProxyOption.md)

The proxies trusted to resolve the client address of a connection from the `X-Forwarded-For` header of its handshake, used by
`connection.remoteAddress` and the rate limits. It accepts the same values as the `trustProxy` option of the HTTP plugin. Defaults to
`false`, or to the `trustProxy` option of the HTTP plugin when `useHttpPluginServer` is enabled.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`trustProxy`](../../websocket/interfaces/WebSocketPluginOptions.md#trustproxy)

***

### useHttpPluginServer

> **useHttpPluginServer**: `boolean`

Whether to use the built-in HTTP server for WebSockets. Default is false. If set to true, the WebSocket server will be created using the built-in HTTP server.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`useHttpPluginServer`](../../websocket/interfaces/WebSocketPluginOptions.md#usehttppluginserver)
