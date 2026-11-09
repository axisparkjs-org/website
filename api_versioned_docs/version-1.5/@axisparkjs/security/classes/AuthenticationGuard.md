# Class: AuthenticationGuard

Global guard that rejects unauthenticated executions marked with
`@Secured()` metadata. Public executions are allowed through this guard.

Its normal priority makes it run before the authorization guard, so callers
receive an authentication failure before an authorization failure.

## Constructors

### Constructor

> **new AuthenticationGuard**(): `AuthenticationGuard`

#### Returns

`AuthenticationGuard`

## Methods

### checkAuthentication()

> **checkAuthentication**(`context`): `Promise`\<`void`\>

#### Parameters

##### context

[`SecurityContext`](../interfaces/SecurityContext.md)

Security state produced for the current execution.

#### Returns

`Promise`\<`void`\>
