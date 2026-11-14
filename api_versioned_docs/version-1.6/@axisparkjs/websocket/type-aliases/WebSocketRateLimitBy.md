# Type Alias: WebSocketRateLimitBy

> **WebSocketRateLimitBy** = `"address"` \| `"connection"` \| ((`context`) => `string` \| `Promise`\<`string`\>)

How the rate limits identify the clients of the WebSocket events: by `'address'` (the remote address of the connection), by
`'connection'` (the connection id), or with a function, for example to count the events per authenticated user.
