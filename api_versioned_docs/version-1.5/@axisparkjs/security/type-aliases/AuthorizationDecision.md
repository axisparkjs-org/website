# Type Alias: AuthorizationDecision

> **AuthorizationDecision** = \{ `authorized`: `true`; `policy`: [`ClassType`](../../common/type-aliases/ClassType.md)\<[`AuthorizationPolicy`](../classes/AuthorizationPolicy.md)\>; \} \| \{ `authorized`: `false`; `policy`: [`ClassType`](../../common/type-aliases/ClassType.md)\<[`AuthorizationPolicy`](../classes/AuthorizationPolicy.md)\>; `reason`: `string`; \}

Result returned by a policy. A denial must include a human-readable reason;
successful decisions need only identify the policy and the allow result.

## Union Members

### Type Literal

\{ `authorized`: `true`; `policy`: [`ClassType`](../../common/type-aliases/ClassType.md)\<[`AuthorizationPolicy`](../classes/AuthorizationPolicy.md)\>; \}

The policy permits the current execution.

***

### Type Literal

\{ `authorized`: `false`; `policy`: [`ClassType`](../../common/type-aliases/ClassType.md)\<[`AuthorizationPolicy`](../classes/AuthorizationPolicy.md)\>; `reason`: `string`; \}

The policy denies the current execution and explains why.
