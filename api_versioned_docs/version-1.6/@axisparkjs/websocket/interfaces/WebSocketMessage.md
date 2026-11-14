# Interface: WebSocketMessage\<T\>

Represents a single incoming WebSocket event/message being processed.

## Type Parameters

### T

`T` = `unknown`

## Properties

### ack?

> `optional` **ack?**: (`response?`) => `void`

Optional acknowledgement callback, if the underlying adapter supports it (e.g. socket.io).

#### Parameters

##### response?

`unknown`

#### Returns

`void`

***

### data

> **data**: `T`

Payload sent with the event, already parsed/deserialized.

***

### event

> **event**: `string`

Name of the event received (e.g. 'chat:send', 'user:typing').

***

### raw?

> `optional` **raw?**: `unknown`

Raw, unparsed payload as received from the underlying adapter, if available.
