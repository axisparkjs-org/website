# Class: HostGuard

A guard that validates a controller's host against the current HTTP request.

## Constructors

### Constructor

> **new HostGuard**(): `HostGuard`

#### Returns

`HostGuard`

## Methods

### failedCheckHost()

> **failedCheckHost**(`context`): `Promise`\<`void`\>

Ensures that the request host matches the selected controller's host definition.

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

#### Returns

`Promise`\<`void`\>
