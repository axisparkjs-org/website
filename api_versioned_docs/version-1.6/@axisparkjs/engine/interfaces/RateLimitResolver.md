# Interface: RateLimitResolver

Identifies the client of a request from the context of a specific transport, such as the IP address for HTTP.
`RateLimitProcessor` uses the identifier to build the bucket key, so the transport does not implement buckets or windows.
Returning `undefined` counts the request in a bucket shared by every client without an identifier.

## Extends

- [`Resolver`](../../common/interfaces/Resolver.md)\<`string` \| `undefined`\>

## Methods

### resolve()

> **resolve**(`context`): `string` \| `Promise`\<`string` \| `undefined`\> \| `undefined`

#### Parameters

##### context

[`ExecutionContext`](ExecutionContext.md)

#### Returns

`string` \| `Promise`\<`string` \| `undefined`\> \| `undefined`

#### Overrides

[`Resolver`](../../common/interfaces/Resolver.md).[`resolve`](../../common/interfaces/Resolver.md#resolve)
