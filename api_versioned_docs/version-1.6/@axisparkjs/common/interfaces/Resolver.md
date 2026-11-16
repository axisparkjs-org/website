# Interface: Resolver\<T\>

An interface representing a resolver that can resolve a value of type T. It defines a `resolve` method that can be called with any number of arguments of unknown types and returns either a value of type T or a Promise that resolves to a value of type T.

## Extended by

- [`CacheResolver`](../../engine/interfaces/CacheResolver.md)
- [`ParameterResolver`](../../engine/interfaces/ParameterResolver.md)
- [`RateLimitResolver`](../../engine/interfaces/RateLimitResolver.md)
- [`TimeoutResolver`](../../engine/interfaces/TimeoutResolver.md)

## Type Parameters

### T

`T`

The type of the value resolved by the resolver.

## Methods

### resolve()

> **resolve**(...`args`): `T` \| `Promise`\<`T`\>

#### Parameters

##### args

...`unknown`[]

#### Returns

`T` \| `Promise`\<`T`\>
