# Class: AuthenticationMiddleware

Global middleware that invokes the authentication engine for enabled
transports. Credential parsing and validation remain the responsibility of
the application's authenticator implementations.

## Constructors

### Constructor

> **new AuthenticationMiddleware**(`securityOptions`, `authenticationEngine`): `AuthenticationMiddleware`

#### Parameters

##### securityOptions

[`SecurityPluginOptions`](../interfaces/SecurityPluginOptions.md)

Effective plugin options, including the transports
on which authentication should run.

##### authenticationEngine

[`AuthenticationEngine`](AuthenticationEngine.md)

Engine that resolves and runs authenticators.

#### Returns

`AuthenticationMiddleware`

## Methods

### authenticate()

> **authenticate**(`context`): `Promise`\<`void`\>

#### Parameters

##### context

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

Current transport execution context.

#### Returns

`Promise`\<`void`\>
