# Class: VersionGuard

A guard for validating versions.

## Constructors

### Constructor

> **new VersionGuard**(): `VersionGuard`

#### Returns

`VersionGuard`

## Methods

### failedCheckVersion()

> **failedCheckVersion**(`context`): `Promise`\<`void`\>

Checks if the requested version is accepted.

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

The HTTP context.

#### Returns

`Promise`\<`void`\>

A promise resolving to a boolean indicating if the version is accepted.
