# Class: ReturnErrorFilter

A global filter for returning errors as HTTP responses.

## Constructors

### Constructor

> **new ReturnErrorFilter**(): `ReturnErrorFilter`

#### Returns

`ReturnErrorFilter`

## Methods

### error()

> **error**(`error`, `context`): `Promise`\<[`ErrorWebSocketResult`](ErrorWebSocketResult.md)\>

Handles errors by returning them as WebSocket responses.

#### Parameters

##### error

`Error`

The error to handle.

##### context

[`WebSocketContext`](../interfaces/WebSocketContext.md)

#### Returns

`Promise`\<[`ErrorWebSocketResult`](ErrorWebSocketResult.md)\>

A promise resolving to an ErrorWebSocketResult.
