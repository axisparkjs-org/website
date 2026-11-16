# Class: WsRateLimitGuard

Applies the rate limits of the WebSocket events and raises a `WebSocketRateLimitExceededError` when a client exceeds them, so the handler
is not invoked. It only limits the messages: the `connection` event has no message and is not limited.

## Constructors

### Constructor

> **new WsRateLimitGuard**(`rateLimitGenerator`, `rateLimitProcessor`, `options`): `WsRateLimitGuard`

#### Parameters

##### rateLimitGenerator

[`RateLimitGenerator`](../../engine/classes/RateLimitGenerator.md)

##### rateLimitProcessor

[`RateLimitProcessor`](../../engine/classes/RateLimitProcessor.md)

##### options

[`WebSocketPluginOptions`](../interfaces/WebSocketPluginOptions.md)

#### Returns

`WsRateLimitGuard`

## Methods

### failedCheckRateLimit()

> **failedCheckRateLimit**(`context`): `Promise`\<`void`\>

#### Parameters

##### context

[`WebSocketContext`](../interfaces/WebSocketContext.md)

#### Returns

`Promise`\<`void`\>
