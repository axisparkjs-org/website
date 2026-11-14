# Function: clientDisconnectSignal()

> **clientDisconnectSignal**(`response`): `AbortSignal`

Creates a signal that is aborted with a `ClientDisconnectedError` when the connection of a response is closed before the response is sent. It is used by the HTTP adapters to implement `HttpRequest.signal`.

The listener is added once to the response, which is created for each request, and runs when the response is closed, so no listener is left on keep-alive connections.

## Parameters

### response

[`ClosableResponse`](../interfaces/ClosableResponse.md)

The Node.js response of the request.

## Returns

`AbortSignal`

The signal of the client.
