# Class: ResultProcessor

A processor for handling results in the execution context.
It processes results based on their type and the associated execution transport.

## Implements

- [`Processable`](../../common/interfaces/Processable.md)

## Constructors

### Constructor

> **new ResultProcessor**(): `ResultProcessor`

#### Returns

`ResultProcessor`

## Methods

### process()

> **process**(`result`, `context`): `Promise`\<`void`\>

Processes a result based on its type and the provided execution context.
If the result is an instance of `ResultDefinition`, it directly processes it.
Otherwise, it resolves the result using the registered resolver for the specified transport and then processes it.

#### Parameters

##### result

`unknown`

The result to be processed, which can be of any type or an instance of `ResultDefinition`.

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context containing relevant information for processing.

#### Returns

`Promise`\<`void`\>

A promise resolving when the result has been processed.

#### Implementation of

[`Processable`](../../common/interfaces/Processable.md).[`process`](../../common/interfaces/Processable.md#process)

***

### registerResult()

> `static` **registerResult**(`transport`, `resolver`): `void`

Registers a result resolver for a specific execution transport.

#### Parameters

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

The execution transport for which to register the resolver.

##### resolver

[`ResultResolver`](ResultResolver.md)

The result resolver to register.

#### Returns

`void`
