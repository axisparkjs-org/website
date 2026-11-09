# Class: ScopedContainer

ScopedContainer is a specialized container that manages scoped instances of providers. It allows for resolving dependencies within a specific scope, ensuring that instances are isolated and have a limited lifetime. The ScopedContainer works in conjunction with the main Container and the ClassResolver to provide scoped resolution of dependencies.

## Constructors

### Constructor

> **new ScopedContainer**(`container`, `resolver`): `ScopedContainer`

Creates a new instance of ScopedContainer.

#### Parameters

##### container

[`Container`](Container.md)

The main container associated with this scoped container.

##### resolver

[`ClassResolver`](ClassResolver.md)

The class resolver used for resolving dependencies.

#### Returns

`ScopedContainer`

## Methods

### resolve()

> **resolve**\<`T`\>(`provider`): `Promise`\<`T`\>

Resolves a provider within the scoped container, returning an instance of the associated class or the result of a factory function. The method manages the resolution process for scoped instances, ensuring that they are isolated and have a limited lifetime.

#### Type Parameters

##### T

`T`

The type of the instance being resolved.

#### Parameters

##### provider

[`ClassProvider`](../interfaces/ClassProvider.md)\<`T`\> \| [`FactoryProvider`](../interfaces/FactoryProvider.md)\<`T`\>

The provider to resolve.

#### Returns

`Promise`\<`T`\>

A promise that resolves to an instance of the class or the result of the factory function associated with the provided token.
