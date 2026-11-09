# Class: AuthenticationEngine

Runs the configured authenticators against an execution context and records
the first successful result in its [SecurityContext](../interfaces/SecurityContext.md).

The engine also marks the context as secured when it finds `@Secured()`
metadata on the target class or method. This lets the guards enforce
authentication even when no authorization policies are configured.

Authentication is attempted in configured order. An authenticator succeeds
only when it returns a truthy value; `undefined`, `null`, `false`, `0`, and
the empty string are treated as failure. The first truthy value becomes
`context.data`, and no later authenticator is called.

## Implements

- [`Executable`](../../common/interfaces/Executable.md)

## Constructors

### Constructor

> **new AuthenticationEngine**(`securityOptions`, `injector`): `AuthenticationEngine`

#### Parameters

##### securityOptions

[`SecurityPluginOptions`](../interfaces/SecurityPluginOptions.md)

Effective configuration supplied by the security
plugin.

##### injector

[`Injector`](../../di/classes/Injector.md)

Container used to resolve authenticator instances and
their dependencies.

#### Returns

`AuthenticationEngine`

## Methods

### execute()

> **execute**(`context`): `Promise`\<`void`\>

Detect whether the target is secured, select compatible authenticators,
and authenticate the current execution.

`strategy: 'selected'` uses only the classes in `selected`. The `all`
strategy discovers injectable classes that extend [Authenticator](Authenticator.md).
A class is considered only when its static `transports` includes the
current transport or `ExecutionTransport.All`.

#### Parameters

##### context

[`SecurityContext`](../interfaces/SecurityContext.md)

Execution context enriched with security state.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)
