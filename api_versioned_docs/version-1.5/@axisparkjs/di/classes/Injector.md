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
