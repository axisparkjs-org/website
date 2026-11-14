# Class: AuthorizationGuard

Global guard that rejects secured executions denied by one or more policies.
Public executions and secured executions with no denying policies continue.
It runs after [AuthenticationGuard](AuthenticationGuard.md) due to its lower priority.

## Constructors

### Constructor

> **new AuthorizationGuard**(): `AuthorizationGuard`

#### Returns

`AuthorizationGuard`

## Methods

### checkAuthorization()

> **checkAuthorization**(`context`): `Promise`\<`void`\>

#### Parameters

##### context

[`SecurityContext`](../interfaces/SecurityContext.md)

Security state and policy decisions for this execution.

#### Returns

`Promise`\<`void`\>
