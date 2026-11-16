# Class: WsRateLimitResolver

Identifies the WebSocket clients with the `rateLimitOptions.by` option of the plugin. `RateLimitProcessor` counts the events per client
and handler:

- `'address'` (default): the remote address of the connection, falling back to the connection id when the adapter does not know it.
  Reconnecting does not reset the limits.
- `'connection'`: the connection id, which changes on every reconnection.
- A function, for example to count the events per authenticated user.

## Implements

- [`RateLimitResolver`](../../engine/interfaces/RateLimitResolver.md)

## Constructors

### Constructor

> **new WsRateLimitResolver**(`options`): `WsRateLimitResolver`

#### Parameters

##### options

[`WebSocketPluginOptions`](../interfaces/WebSocketPluginOptions.md)

#### Returns

`WsRateLimitResolver`

## Methods

### resolve()

> **resolve**(`context`): `Promise`\<`string` \| `undefined`\>

#### Parameters

##### context

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Implementation of

[`RateLimitResolver`](../../engine/interfaces/RateLimitResolver.md).[`resolve`](../../engine/interfaces/RateLimitResolver.md#resolve)
