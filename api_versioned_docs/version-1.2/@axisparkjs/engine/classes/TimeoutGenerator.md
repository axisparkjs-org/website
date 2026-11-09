# Class: TimeoutGenerator

A generator for creating timeout definitions based on metadata.
It retrieves timeout metadata from the execution context and generates a corresponding `TimeoutDefinition`.
If no specific timeout is defined, it falls back to a default timeout value or a registered timeout for the transport.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`TimeoutDefinition`](TimeoutDefinition.md) \| `undefined`\>

## Constructors

### Constructor

> **new TimeoutGenerator**(): `TimeoutGenerator`

#### Returns

`TimeoutGenerator`

## Methods

### generate()

> **generate**(`context`): [`TimeoutDefinition`](TimeoutDefinition.md) \| `undefined`

Generates a timeout definition based on the provided execution context.

#### Parameters

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context containing relevant information for timeout generation.

#### Returns

[`TimeoutDefinition`](TimeoutDefinition.md) \| `undefined`

A generated timeout definition or undefined if no specific timeout is defined.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)

***

### registerTimeout()

> `static` **registerTimeout**(`transport`, `time?`): `void`

#### Parameters

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

##### time?

`number`

#### Returns

`void`
