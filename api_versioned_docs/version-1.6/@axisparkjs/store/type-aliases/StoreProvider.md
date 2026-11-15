# Type Alias: StoreProvider\<K\>

> **StoreProvider**\<`K`\> = [`UnionToIntersection`](UnionToIntersection.md)\<`K` *extends* [`StoreKind`](StoreKind.md) ? [`StoreFactory`](StoreFactory.md)\<`K`\> : `never`\>

Creates the store of the requested kind. Plugins call the provider when they start, with the kind of store they need.

`K` is the set of kinds that the provider supports: the provider has one signature per kind, so passing a provider
where an unsupported kind is required is a compile error. A function that creates a single kind of store,
such as `() => new MyRateLimitStore()`, is also a valid `StoreProvider<'rate-limit'>`.

## Type Parameters

### K

`K` *extends* [`StoreKind`](StoreKind.md) = [`StoreKind`](StoreKind.md)
