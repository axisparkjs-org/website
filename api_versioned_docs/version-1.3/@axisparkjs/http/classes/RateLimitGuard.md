# Class: RateLimitGuard

Applies the HTTP rate limit and raises the standard HTTP error when it is exceeded.

## Constructors

### Constructor

> **new RateLimitGuard**(`rateLimitGenerator`, `rateLimitProcessor`, `options`): `RateLimitGuard`

#### Parameters

##### rateLimitGenerator

[`RateLimitGenerator`](../../engine/classes/RateLimitGenerator.md)

##### rateLimitProcessor

[`RateLimitProcessor`](../../engine/classes/RateLimitProcessor.md)

##### options

[`HttpPluginOptions`](../interfaces/HttpPluginOptions.md)

#### Returns

`RateLimitGuard`

## Methods

### failedCheckRateLimit()

> **failedCheckRateLimit**(`context`): `Promise`\<`void`\>

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

#### Returns

`Promise`\<`void`\>
