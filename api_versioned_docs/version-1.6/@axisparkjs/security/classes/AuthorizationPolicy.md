# Abstract Class: AuthorizationPolicy

Base class for application-defined authorization rules.

A policy receives the full [SecurityContext](../interfaces/SecurityContext.md), including any identity
data returned by the successful authenticator. Implementations can enforce
roles, permissions, ownership, tenant boundaries, resource state, or any
other application rule. Mark implementations injectable so constructor
dependencies can be resolved.

## Constructors

### Constructor

> **new AuthorizationPolicy**(): `AuthorizationPolicy`

#### Returns

`AuthorizationPolicy`

## Methods

### authorize()

> `abstract` **authorize**(`securityContext`): `Promise`\<[`AuthorizationDecision`](../type-aliases/AuthorizationDecision.md)\>

Evaluates this policy for the current execution.

The engine runs policies in class-then-method order and combines them
with logical AND: every policy must return `authorized: true`. It keeps
evaluating after a denial so the complete decision list is available to
error handlers.

#### Parameters

##### securityContext

[`SecurityContext`](../interfaces/SecurityContext.md)

Current execution, authenticated identity data,
and accumulated security state.

#### Returns

`Promise`\<[`AuthorizationDecision`](../type-aliases/AuthorizationDecision.md)\>

Decision identifying this policy and whether it allows access.
