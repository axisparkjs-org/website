# Class: SocketIOWebSocketAdapter

A Socket.IO adapter for integrating Socket.IO with the HTTP Plugin.

## Implements

- [`WebSocketAdapter`](../../websocket/interfaces/WebSocketAdapter.md)

## Constructors

### Constructor

> **new SocketIOWebSocketAdapter**(`options`): `SocketIOWebSocketAdapter`

#### Parameters

##### options

[`SocketIOWebSocketPluginOptions`](../interfaces/SocketIOWebSocketPluginOptions.md)

#### Returns

`SocketIOWebSocketAdapter`

## Methods

### getRegisteredEvents()

> **getRegisteredEvents**(): readonly [`WebSocketEventDefinition`](../../websocket/classes/WebSocketEventDefinition.md)[]

Retrieves the registered events from the adapter.

#### Returns

readonly [`WebSocketEventDefinition`](../../websocket/classes/WebSocketEventDefinition.md)[]

An array of event definitions that have been registered with the adapter.

#### Implementation of

[`WebSocketAdapter`](../../websocket/interfaces/WebSocketAdapter.md).[`getRegisteredEvents`](../../websocket/interfaces/WebSocketAdapter.md#getregisteredevents)

***

### initialize()?

> `optional` **initialize**(`server?`): `void` \| `Promise`\<`void`\>

Initializes the WebSocket adapter.

#### Parameters

##### server?

[`HttpServer`](../../common/type-aliases/HttpServer.md)

The HTTP server to use for the WebSocket connection. If not provided, the adapter will create its own.

#### Returns

`void` \| `Promise`\<`void`\>

A promise that resolves when the adapter has been initialized, or void if the operation is synchronous.

#### Implementation of

[`WebSocketAdapter`](../../websocket/interfaces/WebSocketAdapter.md).[`initialize`](../../websocket/interfaces/WebSocketAdapter.md#initialize)

***

### registerEvents()

> **registerEvents**(`events`): `void`

Registers the provided events with the adapter.

#### Parameters

##### events

readonly [`WebSocketEventDefinition`](../../websocket/classes/WebSocketEventDefinition.md)[]

An array of event definitions to be registered.

#### Returns

`void`

A promise that resolves when the events have been registered, or void if the operation is synchronous.

#### Implementation of

[`WebSocketAdapter`](../../websocket/interfaces/WebSocketAdapter.md).[`registerEvents`](../../websocket/interfaces/WebSocketAdapter.md#registerevents)

***

### start()

> **start**(): `Promise`\<`void`\>

Starts the WebSocket adapter.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the adapter has been started, or void if the operation is synchronous.

#### Implementation of

[`WebSocketAdapter`](../../websocket/interfaces/WebSocketAdapter.md).[`start`](../../websocket/interfaces/WebSocketAdapter.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Stops the WebSocket adapter.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the adapter has been stopped, or void if the operation is synchronous.

#### Implementation of

[`WebSocketAdapter`](../../websocket/interfaces/WebSocketAdapter.md).[`stop`](../../websocket/interfaces/WebSocketAdapter.md#stop)
