# Interface: CacheResolver

Builds the cache key of a request from the context of a specific transport, such as the method, host, path and query of an HTTP request.
`CacheProcessor` adds the transport, the handler and its generation to the key, so the resolver only describes the request.
Returning `undefined` does not cache the request, for example an HTTP `POST`.

## Extends

- [`Resolver`](../../common/interfaces/Resolver.md)\<`string` \| `undefined`\>

## Methods

### resolve()

> **resolve**(`context`, `definition`): `string` \| `Promise`\<`string` \| `undefined`\> \| `undefined`

Resolves the key of the request.

#### Parameters

##### context

[`ExecutionContext`](ExecutionContext.md)

The execution context of the request.

##### definition

[`CacheDefinition`](../classes/CacheDefinition.md)

The cache of the handler. When it has a custom `key`, the resolver uses it instead of its own key.

#### Returns

`string` \| `Promise`\<`string` \| `undefined`\> \| `undefined`

The key, or `undefined` when the request cannot be cached.

#### Overrides

[`Resolver`](../../common/interfaces/Resolver.md).[`resolve`](../../common/interfaces/Resolver.md#resolve)
