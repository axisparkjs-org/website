# Interface: RateLimitDecision

The result of checking a request against a rate limit.

## Properties

### allowed

> **allowed**: `boolean`

Whether the request is allowed.

***

### retryAfterMs

> **retryAfterMs**: `number`

Milliseconds until the oldest counted request leaves the window. `0` when the request is allowed.
