# Class: SocketIOWebSocketConnection

Represents a WebSocket connection, including the connection details and methods to interact with it.

## Implements

- [`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md)

## Constructors

### Constructor

> **new SocketIOWebSocketConnection**(`socket`, `trustProxy?`): `SocketIOWebSocketConnection`

#### Parameters

##### socket

`Socket`

The Socket.IO socket.

##### trustProxy?

`TrustProxyFunction`

The function that decides which proxies are trusted to resolve the client address from the `X-Forwarded-For`
header of the handshake. Without it, the address is the address of the socket.

#### Returns

`SocketIOWebSocketConnection`

## Accessors

### connected

#### Get Signature

> **get** **connected**(): `boolean`

Whether the underlying transport connection is still open.

##### Returns

`boolean`

Whether the underlying transport connection is still open.

#### Implementation of

[`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md).[`connected`](../../websocket/interfaces/WebSocketConnection.md#connected)

***

### id

#### Get Signature

> **get** **id**(): `string`

Unique identifier for this connection.

##### Returns

`string`

Unique identifier for this connection.

#### Implementation of

[`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md).[`id`](../../websocket/interfaces/WebSocketConnection.md#id)

***

### namespace

#### Get Signature

> **get** **namespace**(): `string` \| `undefined`

Namespace this connection belongs to, if the adapter supports namespaces.

##### Returns

`string` \| `undefined`

Namespace this connection belongs to, if the adapter supports namespaces.

#### Implementation of

[`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md).[`namespace`](../../websocket/interfaces/WebSocketConnection.md#namespace)

***

### remoteAddress

#### Get Signature

> **get** **remoteAddress**(): `string` \| `undefined`

The address of the remote client, if the adapter knows it. Behind a proxy, it is resolved from the `X-Forwarded-For` header only
when the proxy is trusted with the `trustProxy` option of the plugin. Unlike `id`, it does not change when the client reconnects.

##### Returns

`string` \| `undefined`

The address of the remote client, if the adapter knows it. Behind a proxy, it is resolved from the `X-Forwarded-For` header only
when the proxy is trusted with the `trustProxy` option of the plugin. Unlike `id`, it does not change when the client reconnects.

#### Implementation of

[`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md).[`remoteAddress`](../../websocket/interfaces/WebSocketConnection.md#remoteaddress)

***

### rooms

#### Get Signature

> **get** **rooms**(): readonly `string`[]

Rooms/channels this connection currently belongs to, if the adapter supports them.

##### Returns

readonly `string`[]

Rooms/channels this connection currently belongs to, if the adapter supports them.

#### Implementation of

[`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md).[`rooms`](../../websocket/interfaces/WebSocketConnection.md#rooms)

## Methods

### broadcast()

> **broadcast**\<`TData`\>(`room`, `event`, `data?`): `void`

Broadcasts an event to a room (excluding or including self, per adapter convention).

#### Type Parameters

##### TData

`TData` = `unknown`

#### Parameters

##### room

`string`

##### event

`string`

##### data?

`TData`

#### Returns

`void`

#### Implementation of

[`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md).[`broadcast`](../../websocket/interfaces/WebSocketConnection.md#broadcast)

***

### close()

> **close**(`_code?`, `_reason?`): `void`

Closes the connection, optionally with a reason code/message.

#### Parameters

##### \_code?

`number`

##### \_reason?

`string`

#### Returns

`void`

#### Implementation of

[`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md).[`close`](../../websocket/interfaces/WebSocketConnection.md#close)

***

### emit()

> **emit**\<`TData`\>(`event`, `data?`): `void`

Sends an event with a payload to this connection only.

#### Type Parameters

##### TData

`TData` = `unknown`

#### Parameters

##### event

`string`

##### data?

`TData`

#### Returns

`void`

#### Implementation of

[`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md).[`emit`](../../websocket/interfaces/WebSocketConnection.md#emit)

***

### join()

> **join**(`room`): `void`

Joins a room/channel, if supported by the underlying adapter.

#### Parameters

##### room

`string`

#### Returns

`void`

#### Implementation of

[`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md).[`join`](../../websocket/interfaces/WebSocketConnection.md#join)

***

### leave()

> **leave**(`room`): `void`

Leaves a room/channel, if supported by the underlying adapter.

#### Parameters

##### room

`string`

#### Returns

`void`

#### Implementation of

[`WebSocketConnection`](../../websocket/interfaces/WebSocketConnection.md).[`leave`](../../websocket/interfaces/WebSocketConnection.md#leave)
