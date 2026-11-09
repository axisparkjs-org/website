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

### serveClient?

> `optional` **serveClient?**: `boolean`

Whether to serve the client files. Default is true. If set to false, the client files will not be served.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`serveClient`](../../websocket/interfaces/WebSocketPluginOptions.md#serveclient)

***

### useHttpPluginServer

> **useHttpPluginServer**: `boolean`

Whether to use the built-in HTTP server for WebSockets. Default is false. If set to true, the WebSocket server will be created using the built-in HTTP server.

#### Inherited from

[`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md).[`useHttpPluginServer`](../../websocket/interfaces/WebSocketPluginOptions.md#usehttppluginserver)
