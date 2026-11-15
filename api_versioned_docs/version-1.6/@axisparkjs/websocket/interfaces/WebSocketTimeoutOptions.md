# Interface: WebSocketTimeoutOptions

Options for configuring the timeouts of the WebSocket events.

## Properties

### message?

> `optional` **message?**: `string` \| ((`time`) => `string`)

The message sent to the client when a timeout occurs. By default, it is `Request timed out after <time>ms`.

***

### time?

> `optional` **time?**: `number`

The default timeout duration in milliseconds. Defaults to 5000 with the options factory, or to the default timeout of the engine without it.
