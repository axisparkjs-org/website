# Class: HostProcessor

Resolves the request host and stores it in the host definition.

## Implements

- [`Processable`](../../common/interfaces/Processable.md)

## Constructors

### Constructor

> **new HostProcessor**(): `HostProcessor`

#### Returns

`HostProcessor`

## Methods

### process()

> **process**(`host`, `context`): `void`

#### Parameters

##### host

[`HostDefinition`](HostDefinition.md) \| `undefined`

##### context

`Pick`\<[`HttpContext`](../interfaces/HttpContext.md), `"request"`\>

#### Returns

`void`

#### Implementation of

[`Processable`](../../common/interfaces/Processable.md).[`process`](../../common/interfaces/Processable.md#process)
