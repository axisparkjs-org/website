# Interface: WebSocketAdapter

An interface representing a WebSocket adapter.
It defines the contract for handling WebSocket-related operations.

## Methods

### getRegisteredEvents()

> **getRegisteredEvents**(): readonly [`WebSocketEventDefinition`](../classes/WebSocketEventDefinition.md)[]

Retrieves the registered events from the adapter.

#### Returns

readonly [`WebSocketEventDefinition`](../classes/WebSocketEventDefinition.md)[]

An array of event definitions that have been registered with the adapter.

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

***

### registerEvents()

> **registerEvents**(`events`): `void` \| `Promise`\<`void`\>

Registers the provided events with the adapter.

#### Parameters

##### events

readonly [`WebSocketEventDefinition`](../classes/WebSocketEventDefinition.md)[]

An array of event definitions to be registered.

#### Returns

`void` \| `Promise`\<`void`\>

A promise that resolves when the events have been registered, or void if the operation is synchronous.

***

### start()

> **start**(): `void` \| `Promise`\<`void`\>

Starts the WebSocket adapter.

#### Returns

`void` \| `Promise`\<`void`\>

A promise that resolves when the adapter has been started, or void if the operation is synchronous.

***

### stop()

> **stop**(): `void` \| `Promise`\<`void`\>

Stops the WebSocket adapter.

#### Returns

`void` \| `Promise`\<`void`\>

A promise that resolves when the adapter has been stopped, or void if the operation is synchronous.
