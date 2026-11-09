# Class: ClassResolver\<T\>

ClassResolver is responsible for resolving class providers and factory providers. It handles the instantiation of classes, resolving their dependencies, and managing scopes. It also detects circular dependencies and scope violations during the resolution process.

## Type Parameters

### T

`T` = `unknown`

The type of the instance being resolved.

## Implements

- [`Resolver`](../../common/interfaces/Resolver.md)\<`T`\>

## Constructors

### Constructor

> **new ClassResolver**\<`T`\>(): `ClassResolver`\<`T`\>

#### Returns

`ClassResolver`\<`T`\>

## Methods

### resolve()

> **resolve**\<`T`\>(`provider`, `container`, `scopedContainer?`): `Promise`\<`T`\>

Resolves a class provider or factory provider, instantiating the class and resolving its dependencies. It manages the resolution process, including handling scopes and detecting circular dependencies.

#### Type Parameters

##### T

`T`

#### Parameters

##### provider

[`ClassProvider`](../interfaces/ClassProvider.md)\<`T`\> \| [`FactoryProvider`](../interfaces/FactoryProvider.md)\<`T`\>

The class provider or factory provider to resolve.

##### container

[`Container`](Container.md)

The container used for resolving dependencies.

##### scopedContainer?

[`ScopedContainer`](ScopedContainer.md)

An optional scoped container for managing scoped instances.

#### Returns

`Promise`\<`T`\>

A promise that resolves to an instance of the class or the result of the factory function.

#### Throws

If a circular dependency is detected during resolution.

#### Throws

If a scope violation is detected during resolution.

#### Implementation of

[`Resolver`](../../common/interfaces/Resolver.md).[`resolve`](../../common/interfaces/Resolver.md#resolve)
