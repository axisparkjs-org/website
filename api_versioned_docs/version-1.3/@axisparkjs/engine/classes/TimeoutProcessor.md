# Class: TimeoutProcessor

A processor for handling timeout operations.
It resolves timeout definitions using registered resolvers based on the execution transport.

## Implements

- [`Processable`](../../common/interfaces/Processable.md)

## Constructors

### Constructor

> **new TimeoutProcessor**(): `TimeoutProcessor`

#### Returns

`TimeoutProcessor`

## Methods

### process()

> **process**(`timeout`, `context`): `Promise`\<`void`\>

Processes a timeout definition based on the provided execution context.

#### Parameters

##### timeout

[`TimeoutDefinition`](TimeoutDefinition.md)

The timeout definition to process.

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context containing relevant information for timeout processing.

#### Returns

`Promise`\<`void`\>

A promise resolving when the timeout has been processed.

#### Implementation of

[`Processable`](../../common/interfaces/Processable.md).[`process`](../../common/interfaces/Processable.md#process)

***

### registerTimeout()

> `static` **registerTimeout**(`transport`, `resolver`): `void`

#### Parameters

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

##### resolver

[`TimeoutResolver`](../interfaces/TimeoutResolver.md)

#### Returns

`void`
