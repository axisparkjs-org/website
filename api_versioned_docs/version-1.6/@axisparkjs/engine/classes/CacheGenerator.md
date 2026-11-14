# Class: CacheGenerator

Generates the cache of a handler from its `@Cache()` and `@NoCache()` metadata and the default time to live of the transport.
The metadata of the method takes precedence over the metadata of its class. Without metadata, the handler is not cached.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`CacheDefinition`](CacheDefinition.md) \| `undefined`\>

## Constructors

### Constructor

> **new CacheGenerator**(): `CacheGenerator`

#### Returns

`CacheGenerator`

## Methods

### generate()

> **generate**(`context`): [`CacheDefinition`](CacheDefinition.md) \| `undefined`

Generates the cache of the handler of the context.

#### Parameters

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

#### Returns

[`CacheDefinition`](CacheDefinition.md) \| `undefined`

The cache definition, or `undefined` when the handler is not cached.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)

***

### registerCache()

> `static` **registerCache**(`transport`, `options?`): `void`

Registers the default time to live of the cached results of one transport. Passing undefined removes it.

#### Parameters

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

##### options?

`Pick`\<[`CacheConfiguration`](../interfaces/CacheConfiguration.md), `"ttl"`\>

#### Returns

`void`
