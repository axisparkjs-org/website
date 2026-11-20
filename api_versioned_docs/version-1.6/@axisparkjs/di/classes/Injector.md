# Class: Injector

A class that provides dependency injection functionality.

## Constructors

### Constructor

> **new Injector**(`container`): `Injector`

#### Parameters

##### container

[`Container`](Container.md)

#### Returns

`Injector`

## Methods

### get()

> **get**\<`T`\>(`token`, `scopedContainer?`): `Promise`\<`T`\>

Resolves a dependency for the given token.

#### Type Parameters

##### T

`T`

#### Parameters

##### token

[`Token`](../type-aliases/Token.md)\<`T`\>

The token for which to resolve the dependency.

##### scopedContainer?

[`ScopedContainer`](ScopedContainer.md)

The scoped container to use for resolution.

#### Returns

`Promise`\<`T`\>

A promise resolving to the resolved dependency.

***

### isSingleton()

> **isSingleton**(`token`): `boolean`

Checks whether a token always resolves to the same instance, so the instance can be kept and reused.

#### Parameters

##### token

[`Token`](../type-aliases/Token.md)

The token to check.

#### Returns

`boolean`

`true` when the token is bound to a singleton or a value.

***

### tryGet()

> **tryGet**\<`T`\>(`token`): `T` \| `undefined`

Returns the instance of a token synchronously when it is already available (a value, or a singleton that is already created), without
creating it. Use it in hot paths and fall back to `get()` when it returns `undefined`.

#### Type Parameters

##### T

`T`

#### Parameters

##### token

[`Token`](../type-aliases/Token.md)\<`T`\>

The token of the instance.

#### Returns

`T` \| `undefined`

The instance, or `undefined` when it is not available without a resolution.
