# Class: AuthorizationEngine

Evaluates the policies attached to a secured class and/or method.

Class policies run first, followed by method policies. Every policy is
resolved through dependency injection and evaluated in sequence. The engine
records every decision and sets `context.authorized` to false if any policy
denies access; it does not stop after the first denial. With no policies,
the context is marked authorized, while `@Secured()` can still require the
authentication guard to find an authenticated identity.

## Implements

- [`Executable`](../../common/interfaces/Executable.md)

## Constructors

### Constructor

> **new AuthorizationEngine**(`injector`): `AuthorizationEngine`

#### Parameters

##### injector

[`Injector`](../../di/classes/Injector.md)

Container used to resolve policy instances and their dependencies.

#### Returns

`AuthorizationEngine`

## Methods

### execute()

> **execute**(`context`): `Promise`\<`void`\>

Evaluates and stores all class-level and method-level policy decisions.

#### Parameters

##### context

[`SecurityContext`](../interfaces/SecurityContext.md)

Execution context enriched with authentication data and
authorization state.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)
