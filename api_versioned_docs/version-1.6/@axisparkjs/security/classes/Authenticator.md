# Abstract Class: Authenticator

Base class for application-defined credential authenticators.

Implementations can read credentials from any part of the transport
execution context, validate them with application-specific services, and
return any application-defined principal or claims object. The package does
not impose a token format, user model, session strategy, or persistence
mechanism. Register the implementation as injectable so its dependencies
can be resolved.

## Constructors

### Constructor

> **new Authenticator**(): `Authenticator`

#### Returns

`Authenticator`

## Properties

### transports

> `readonly` `static` **transports**: readonly [`ExecutionTransport`](../../engine/enumerations/ExecutionTransport.md)[]

Transports supported by this authenticator. The default supports every
transport. Override it on a subclass to keep transport-specific logic
from running for unrelated execution types.

## Methods

### authenticate()

> `abstract` **authenticate**(`executionContext`): `Promise`\<`any`\>

Authenticates the current execution using application-defined rules.

Return a truthy principal/claims value for success. Return `undefined`
(or another falsy value) when the credentials are absent or invalid. The
first truthy result from configured authenticators is stored in
`SecurityContext.data`, and later authenticators are skipped.

#### Parameters

##### executionContext

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

Transport-neutral execution data provided by the
AxiSpark engine.

#### Returns

`Promise`\<`any`\>

The application-defined identity data, or a falsy value when
this authenticator does not authenticate the execution.
