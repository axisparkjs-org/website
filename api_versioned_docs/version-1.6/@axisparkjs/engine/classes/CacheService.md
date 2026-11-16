# Class: CacheService

Evicts the cached results of the handlers decorated with `@Cache()`. Inject it in the services that change the data:
```ts
await this.cache.evict(ProductController, 'find'); // every entry of the handler
await this.cache.evict(ProductController, 'find', key); // one entry
```

## Constructors

### Constructor

> **new CacheService**(`processor`): `CacheService`

#### Parameters

##### processor

[`CacheProcessor`](CacheProcessor.md)

#### Returns

`CacheService`

## Methods

### evict()

> **evict**\<`T`\>(`target`, `propertyKey`, `key?`): `Promise`\<`void`\>

Evicts the cached results of a handler in every transport.

#### Type Parameters

##### T

`T`

#### Parameters

##### target

[`ClassType`](../../common/type-aliases/ClassType.md)\<`T`\>

The class of the handler, such as a controller.

##### propertyKey

`symbol` \| keyof `T` & `string`

The name of the method of the handler.

##### key?

`string`

The key of one request, as returned by the resolver of the transport or the custom `key` of `@Cache()`.
Without it, every result of the handler is evicted. The old entries are never read again and expire with their time to live.

#### Returns

`Promise`\<`void`\>
