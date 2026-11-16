# Function: connectionCloseSignal()

> **connectionCloseSignal**(`closed`, `onClose`): `AbortSignal`

Creates a signal that is aborted with a `ClientDisconnectedError` when a WebSocket connection is closed. It is used by the WebSocket adapters to implement `WebSocketConnection.signal`.

## Parameters

### closed

`boolean`

Whether the connection is already closed, in which case the signal is returned aborted.

### onClose

(`listener`) => `void`

Registers the listener that is called once when the connection is closed.

## Returns

`AbortSignal`

The signal of the connection.
