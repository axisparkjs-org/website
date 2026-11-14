# Class: Container

Container is a dependency injection container that manages the registration and resolution of providers. It allows for binding providers, resolving instances, and managing scopes. The container supports singleton, scoped, and transient lifetimes for providers, enabling flexible dependency management in applications.

## Implements

- [`Initializable`](../../common/interfaces/Initializable.md)

## Constructors

### Constructor

> **new Container**(): `Container`

#### Returns

`Container`

## Methods

### bind()

> **bind**\<`T`\>(`provider`): `void`

Binds a provider or class type to the container. If a class type is provided, it is automatically wrapped in a ClassProvider with a singleton scope. The method checks for the presence of the `@Injectable` decorator on the class and throws an error if it is not included. This ensures that only properly decorated classes can be registered with the container.

#### Type Parameters

##### T

`T`

The type of the instance being bound.

#### Parameters

##### provider

[`Provider`](../type-aliases/Provider.md)\<`T`\> \| [`ClassType`](../../common/type-aliases/ClassType.md)\<`T`\>

The provider or class type to bind to the container.

#### Returns

`void`

#### Throws

If the `@Injectable` decorator is not included on the class being bound.

***

### createScopedContainer()

> **createScopedContainer**(): [`ScopedContainer`](ScopedContainer.md)

Creates a new scoped container that is associated with the current container. The scoped container allows for managing scoped instances of providers, enabling the resolution of dependencies within a specific scope. This is useful for scenarios where certain instances need to be isolated or have a limited lifetime.

#### Returns

[`ScopedContainer`](ScopedContainer.md)

A new instance of ScopedContainer that is associated with the current container and uses the specified resolver for dependency resolution.

***

### init()

> **init**(): `void`

Initializes the container by scanning for classes decorated with `@Injectable` and binding them to the container. It retrieves metadata for injectable classes and registers them with their respective tokens and scopes. This method should be called after all providers have been registered to ensure that the container is properly initialized.

#### Returns

`void`

#### Implementation of

[`Initializable`](../../common/interfaces/Initializable.md).[`init`](../../common/interfaces/Initializable.md#init)

***

### resolve()

> **resolve**\<`T`\>(`token`, `scopedContainer?`): `Promise`\<`T`\>

Resolves a provider based on the provided token, returning an instance of the associated class or the result of a factory function. The method handles different scopes (singleton, scoped, transient) and manages the resolution process accordingly. If a scoped container is provided, it is used for resolving scoped instances. If the provider is not found, an error is thrown.

#### Type Parameters

##### T

`T`

The type of the instance being resolved.

#### Parameters

##### token

[`Token`](../type-aliases/Token.md)\<`T`\>

The token for the provider to resolve.

##### scopedContainer?

[`ScopedContainer`](ScopedContainer.md)

An optional scoped container for managing scoped instances during resolution. If not provided, the default resolution process is used.

#### Returns

`Promise`\<`T`\>

A promise that resolves to an instance of the class or the result of the factory function associated with the provided token.

#### Throws

If the provider associated with the provided token is not found in the container.

#### Throws

If a scoped provider is being resolved but no scoped container is provided.

#### Throws

If a chain of `useExisting` providers points back to one of its own tokens.

***

### resolveInChain()

> **resolveInChain**\<`T`\>(`token`, `scopedContainer`, `chain`): `Promise`\<`T`\>

**`Internal`**

Resolves a provider as a dependency of the classes of a resolution chain. Used by the resolver to resolve the dependencies of a class, so each resolution keeps its own chain. Use `resolve()` instead.

#### Type Parameters

##### T

`T`

The type of the instance being resolved.

#### Parameters

##### token

[`Token`](../type-aliases/Token.md)\<`T`\>

The token for the provider to resolve.

##### scopedContainer

[`ScopedContainer`](ScopedContainer.md) \| `undefined`

An optional scoped container for managing scoped instances during resolution.

##### chain

[`ResolutionChain`](ResolutionChain.md)

The resolution chain of the classes that depend on the token.

#### Returns

`Promise`\<`T`\>

A promise that resolves to an instance of the class or the result of the factory function associated with the provided token.

***

### unbind()

> **unbind**\<`T`\>(`token`): `void`

Unbinds a provider from the container based on the provided token. This method removes the binding associated with the specified token, allowing for dynamic management of providers within the container. If the token is not found, no action is taken.

#### Type Parameters

##### T

`T`

The type of the instance being unbound.

#### Parameters

##### token

[`Token`](../type-aliases/Token.md)\<`T`\>

The token for the provider to unbind.

#### Returns

`void`
