# Class: AuthorizationMiddleware

Global middleware that evaluates authorization policies after authentication
middleware has populated the security context.

## Constructors

### Constructor

> **new AuthorizationMiddleware**(`authorizationEngine`): `AuthorizationMiddleware`

#### Parameters

##### authorizationEngine

[`AuthorizationEngine`](AuthorizationEngine.md)

Engine that evaluates the policies attached to the target.

#### Returns

`AuthorizationMiddleware`

## Methods

### authenticate()

> **authenticate**(`context`): `Promise`\<`void`\>

#### Parameters

##### context

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

Current transport execution context.

#### Returns

`Promise`\<`void`\>
