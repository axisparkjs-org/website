# Interface: SecurityContext\<T\>

Security state carried alongside an AxiSpark execution.

Authentication engines write `authenticated`, `authenticationMethod`, and
`data`; authorization engines write `authorized` and
`authorizationDecisions`. The context extends the transport-neutral
[ExecutionContext](../../engine/interfaces/ExecutionContext.md), so the same authenticator and policy abstractions
work across HTTP, messaging, jobs, and other supported transports. The
application chooses the shape and meaning of `data`.

## Extends

- [`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

## Type Parameters

### T

`T` = `unknown`

Shape of the application-defined identity/claims value.

## Properties

### authenticated

> **authenticated**: `boolean`

Whether an authenticator has returned a truthy identity value.

***

### authenticationMethod?

> `optional` **authenticationMethod?**: [`ClassType`](../../common/type-aliases/ClassType.md)\<[`Authenticator`](../classes/Authenticator.md)\>

Class of the authenticator whose truthy result authenticated this execution.

***

### authorizationDecisions?

> `optional` **authorizationDecisions?**: [`AuthorizationDecision`](../type-aliases/AuthorizationDecision.md)[]

Decisions returned by each evaluated policy, in evaluation order.

***

### authorized

> **authorized**: `boolean`

Whether all configured policies allowed this execution.

***

### data?

> `optional` **data?**: `T`

Application-defined identity, principal, or claims returned by an authenticator.

***

### error?

> `optional` **error?**: `Error`

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`error`](../../engine/interfaces/ExecutionContext.md#error)

***

### propertyKey

> **propertyKey**: `string` \| `symbol`

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`propertyKey`](../../engine/interfaces/ExecutionContext.md#propertykey)

***

### scopedContainer

> **scopedContainer**: [`ScopedContainer`](../../di/classes/ScopedContainer.md)

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`scopedContainer`](../../engine/interfaces/ExecutionContext.md#scopedcontainer)

***

### securedMethod

> **securedMethod**: `boolean`

True when the target class or method has `@Secured()` metadata.

***

### signal

> **signal**: `AbortSignal`

Aborted when the execution times out (with an `ExecutionTimeoutError` as reason) or its client stops waiting (with the reason given by the transport, such as a `ClientDisconnectedError`). Pass it to `fetch`, database drivers or your own loops to stop the work of a handler that nobody will read. Handlers receive it with `@Signal()`.

The transport can give its own signal in this property when it creates the context: the `ExecutionEngine` replaces it with a signal of the execution that is also aborted when the signal of the transport is aborted.

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`signal`](../../engine/interfaces/ExecutionContext.md#signal)

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`target`](../../engine/interfaces/ExecutionContext.md#target)

***

### transport

> **transport**: [`ExecutionTransport`](../../engine/enumerations/ExecutionTransport.md)

#### Inherited from

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md).[`transport`](../../engine/interfaces/ExecutionContext.md#transport)
