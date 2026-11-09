# Class: HttpCacheResolver

Builds the cache key of the HTTP requests. Only `GET` and `HEAD` requests are cached, and the key is made of the method, the host,
the path, the sorted query string and the headers of `@CacheVary()`.

The requests with an `Authorization` or `Cookie` header are not cached, so the response of one user is never returned to another one.
A custom `key` in `@Cache()`, such as `(ctx) => ctx.session.userId`, replaces the method, host, path and query of the key, and enables
the cache of these requests explicitly.

## Implements

- [`CacheResolver`](../../engine/interfaces/CacheResolver.md)

## Constructors

### Constructor

> **new HttpCacheResolver**(): `HttpCacheResolver`

#### Returns

`HttpCacheResolver`

## Methods

### resolve()

> **resolve**(`context`, `definition`): `Promise`\<`string` \| `undefined`\>

Resolves the key of the request.

#### Parameters

##### context

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

The execution context of the request.

##### definition

[`CacheDefinition`](../../engine/classes/CacheDefinition.md)

The cache of the handler. When it has a custom `key`, the resolver uses it instead of its own key.

#### Returns

`Promise`\<`string` \| `undefined`\>

The key, or `undefined` when the request cannot be cached.

#### Implementation of

[`CacheResolver`](../../engine/interfaces/CacheResolver.md).[`resolve`](../../engine/interfaces/CacheResolver.md#resolve)
