# Class: ClassResolver\<T\>

ClassResolver is responsible for resolving class providers and factory providers. It handles the instantiation of classes, resolving their dependencies in parallel, and managing scopes. It also detects circular dependencies and scope violations during the resolution process. The only state of the resolver is the cache of the constructor tokens of each class: the classes that are being resolved are kept in the resolution chain of each resolution, so concurrent resolutions never see the dependencies of each other.

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

> **resolve**\<`T`\>(`provider`, `container`, `scopedContainer?`, `chain?`): `Promise`\<`T`\>

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

##### chain?

[`ResolutionChain`](ResolutionChain.md) = `...`

The resolution chain of the classes that depend on the provider. A new chain is started when it is not given.

#### Returns

`Promise`\<`T`\>

A promise that resolves to an instance of the class or the result of the factory function.

#### Throws

If a circular dependency is detected during resolution.

#### Throws

If a scope violation is detected during resolution.

#### Implementation of

[`Resolver`](../../common/interfaces/Resolver.md).[`resolve`](../../common/interfaces/Resolver.md#resolve)

***

### tokensOf()

> **tokensOf**(`classType`): [`Token`](../type-aliases/Token.md)[]

Returns the tokens of the constructor dependencies of a class: the `@Inject()` token of each parameter, or its `design:paramtypes`
type. They are read from the metadata the first time and kept by class (in this resolver, so each container has its own
cache), so instantiating a known class does not read metadata.

#### Parameters

##### classType

[`ClassType`](../../common/type-aliases/ClassType.md)

The class whose dependencies are returned.

#### Returns

[`Token`](../type-aliases/Token.md)[]

The tokens, in the order of the constructor parameters.
