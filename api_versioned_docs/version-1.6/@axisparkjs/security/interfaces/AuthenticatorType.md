# Interface: AuthenticatorType\<T\>

Constructor type for an [Authenticator](../classes/Authenticator.md), including its transport
declaration. The engine uses the static transport list before resolving the
class from dependency injection.

## Type Parameters

### T

`T` *extends* [`Authenticator`](../classes/Authenticator.md) = [`Authenticator`](../classes/Authenticator.md)

Concrete authenticator instance type.

## Constructors

### Constructor

> **new AuthenticatorType**(...`args`): `T`

#### Parameters

##### args

...`any`[]

#### Returns

`T`

## Properties

### transports

> `readonly` **transports**: readonly [`ExecutionTransport`](../../engine/enumerations/ExecutionTransport.md)[]
