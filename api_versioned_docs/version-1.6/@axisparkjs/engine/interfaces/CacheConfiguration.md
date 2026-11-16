# Interface: CacheConfiguration

Configurable parts of the cache of a handler.

## Properties

### key?

> `optional` **key?**: (`context`) => `string` \| `undefined`

Builds the key from the context, replacing the key of the transport resolver. Use it to cache per user, for example.
Returning `undefined` does not cache the request.

#### Parameters

##### context

[`ExecutionContext`](ExecutionContext.md)

#### Returns

`string` \| `undefined`

***

### ttl?

> `optional` **ttl?**: `number`

The time to live of the cached result in milliseconds. Defaults to the `cacheOptions.ttl` of the transport, or 60 seconds.
