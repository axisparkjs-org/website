# Class: SocketIOWebSocketMessage

Represents a single incoming WebSocket event/message being processed.

## Implements

- [`WebSocketMessage`](../../websocket/interfaces/WebSocketMessage.md)

## Constructors

### Constructor

> **new SocketIOWebSocketMessage**(`socketIOEvent`): `SocketIOWebSocketMessage`

#### Parameters

##### socketIOEvent

###### ack?

(`response?`) => `void`

###### data

`any`

###### event

`string`

###### raw?

`unknown`

#### Returns

`SocketIOWebSocketMessage`

## Accessors

### ack

#### Get Signature

> **get** **ack**(): ((`response?`) => `void`) \| `undefined`

Optional acknowledgement callback, if the underlying adapter supports it (e.g. socket.io).

##### Returns

((`response?`) => `void`) \| `undefined`

Optional acknowledgement callback, if the underlying adapter supports it (e.g. socket.io).

#### Implementation of

[`WebSocketMessage`](../../websocket/interfaces/WebSocketMessage.md).[`ack`](../../websocket/interfaces/WebSocketMessage.md#ack)

***

### data

#### Get Signature

> **get** **data**(): `any`

Payload sent with the event, already parsed/deserialized.

##### Returns

`any`

Payload sent with the event, already parsed/deserialized.

#### Implementation of

[`WebSocketMessage`](../../websocket/interfaces/WebSocketMessage.md).[`data`](../../websocket/interfaces/WebSocketMessage.md#data)

***

### event

#### Get Signature

> **get** **event**(): `string`

Name of the event received (e.g. 'chat:send', 'user:typing').

##### Returns

`string`

Name of the event received (e.g. 'chat:send', 'user:typing').

#### Implementation of

[`WebSocketMessage`](../../websocket/interfaces/WebSocketMessage.md).[`event`](../../websocket/interfaces/WebSocketMessage.md#event)

***

### raw

#### Get Signature

> **get** **raw**(): `unknown`

Raw, unparsed payload as received from the underlying adapter, if available.

##### Returns

`unknown`

Raw, unparsed payload as received from the underlying adapter, if available.

#### Implementation of

[`WebSocketMessage`](../../websocket/interfaces/WebSocketMessage.md).[`raw`](../../websocket/interfaces/WebSocketMessage.md#raw)
