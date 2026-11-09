# Interface: RateLimitOptions

Options for configuring HTTP rate limiting.

## Properties

### limit

> **limit**: `number`

The maximum number of requests allowed in the window.

***

### message?

> `optional` **message?**: `string` \| ((`time`) => `string`)

The response message when a client exceeds the limit. The function receives milliseconds until the oldest request expires.

***

### ttl

> **ttl**: `number`

The sliding time window in milliseconds.
