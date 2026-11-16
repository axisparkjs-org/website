# Type Alias: WebSocketEventHandler

> **WebSocketEventHandler** = (`context`) => `void` \| `Promise`\<`void`\>

A type representing a route handler function.

## Parameters

### context

`Pick`\<[`WebSocketContext`](../interfaces/WebSocketContext.md), `"message"` \| `"connection"`\>

The WebSocket context containing information.

## Returns

`void` \| `Promise`\<`void`\>

A promise that resolves when the route handling is complete.
