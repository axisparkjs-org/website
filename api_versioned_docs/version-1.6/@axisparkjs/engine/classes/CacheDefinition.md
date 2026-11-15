# Class: CacheDefinition

The transport-independent cache of a handler: the time to live of its results and an optional custom key.

## Constructors

### Constructor

> **new CacheDefinition**(`ttl`, `key?`): `CacheDefinition`

#### Parameters

##### ttl

`number`

The time to live of the cached results in milliseconds.

##### key?

(`context`) => `string` \| `undefined`

Builds the key from the context, replacing the key of the transport resolver.

#### Returns

`CacheDefinition`

## Properties

### key?

> `readonly` `optional` **key?**: (`context`) => `string` \| `undefined`

Builds the key from the context, replacing the key of the transport resolver.

#### Parameters

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

#### Returns

`string` \| `undefined`

***

### ttl

> `readonly` **ttl**: `number`

The time to live of the cached results in milliseconds.
