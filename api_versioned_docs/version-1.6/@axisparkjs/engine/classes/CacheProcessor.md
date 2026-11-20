# Class: CacheProcessor

Caches the results of the handlers with the same algorithm for every transport. The resolver registered for the transport builds the key
of the request, and the results are kept in the `CacheStore` registered for the transport with the key
`<transport>:<Class>.<method>:<generation>:<key>`, so two handlers never share entries. `<Class>` is the `ClassIdentifier` of the class, so
two classes with the same name never share entries either.

The generation of a handler is a counter kept in the store with the key `gen:<Class>.<method>`. `evict()` increments it, so the old
entries are never read again and expire with their time to live. It works with every `CacheStore`, without deleting keys by prefix.
The generation read from each store is kept in memory for one second by default (see `setGenerationTtl()`), so a cache hit costs one
store read instead of two. `evict()` updates the generation kept in memory immediately, so the process that evicts never reads the old
entries; other processes that share the store (such as replicas with Redis) read the new generation when their copy expires.

When several requests of the same process miss the same key at the same time, only the first one invokes the handler, and the others
wait for it and receive its result (single-flight), so a popular entry that expires does not run the handler once per request. When the
first invocation fails or its result is not cached, the waiting requests invoke the handler themselves.

The cache is an optimization: when the store fails, the handler runs as if the result was not cached, and a warning is logged at most
once a minute for each transport.

## Implements

- [`Processable`](../../common/interfaces/Processable.md)

## Constructors

### Constructor

> **new CacheProcessor**(`logger`): `CacheProcessor`

#### Parameters

##### logger

`Logger`

#### Returns

`CacheProcessor`

## Methods

### evict()

> **evict**(`target`, `propertyKey`, `key?`): `Promise`\<`void`\>

Evicts the cached results of a handler from the stores of every transport.

#### Parameters

##### target

[`ClassType`](../../common/type-aliases/ClassType.md)

The class of the handler.

##### propertyKey

`string` \| `symbol`

The method of the handler.

##### key?

`string`

The key of one request, as returned by the resolver of the transport or the custom `key` of `@Cache()`.
Without it, every result of the handler is evicted by incrementing its generation.

#### Returns

`Promise`\<`void`\>

***

### process()

> **process**(`definition`, `context`, `invoke`): `Promise`\<`unknown`\>

Returns the cached result of the request of the context or, when there is none, invokes the handler and caches its result.
Only plain results are cached: `undefined`, the `ResultDefinition` instances (such as files, streams or redirects) and the errors are not.

#### Parameters

##### definition

[`CacheDefinition`](CacheDefinition.md) \| `undefined`

The cache of the handler, or `undefined` when it is not cached.

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context of the request.

##### invoke

() => `Promise`\<`unknown`\>

Invokes the handler and returns its result.

#### Returns

`Promise`\<`unknown`\>

The cached result, or the result of the handler.

#### Implementation of

[`Processable`](../../common/interfaces/Processable.md).[`process`](../../common/interfaces/Processable.md#process)

***

### registerCache()

> `static` **registerCache**(`transport`, `resolver?`): `void`

Registers the resolver that builds the cache keys of a transport. Passing undefined removes it.

#### Parameters

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

##### resolver?

[`CacheResolver`](../interfaces/CacheResolver.md)

#### Returns

`void`

***

### registerCacheStore()

> `static` **registerCacheStore**(`transport`, `store?`): `void`

Sets the store of the cached results of a transport. The plugins call it when they start, with the store created by the
`StoreProvider` of their options, which is `MemoryStore()` by default. Each transport keeps its own store, and the keys start
with the transport, so two transports that share a store never share entries. Passing undefined removes it.

#### Parameters

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

##### store?

`CacheStore`

#### Returns

`void`

***

### setGenerationTtl()

> `static` **setGenerationTtl**(`ttl`): `void`

Sets how long, in milliseconds, the generation of a handler read from a store is kept in memory before it is read again. It is
the longest time that another process that shares the store keeps reading the entries evicted by `evict()` without a key. `0`
reads the generation from the store on every request. The default is `1000`.

#### Parameters

##### ttl

`number`

The time to live of the generations kept in memory, in milliseconds.

#### Returns

`void`
