# Class: PipeProcessor

A processor for executing pipe definitions.

## Implements

- [`Processable`](../../common/interfaces/Processable.md)

## Constructors

### Constructor

> **new PipeProcessor**(`injector`): `PipeProcessor`

#### Parameters

##### injector

[`Injector`](../../di/classes/Injector.md)

#### Returns

`PipeProcessor`

## Methods

### process()

> **process**(`pipes`, `context`): `Promise`\<`any`[]\>

Processes an array of pipe definitions using the provided execution context. When a step returns `PipeStepSkip`, the rest of the steps of its parameter are skipped and the parameter is `undefined`.

#### Parameters

##### pipes

[`PipeDefinition`](PipeDefinition.md)[]

An array of `PipeDefinition` instances to process.

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context containing relevant information for processing.

#### Returns

`Promise`\<`any`[]\>

A promise resolving to an array of the processed results.

#### Implementation of

[`Processable`](../../common/interfaces/Processable.md).[`process`](../../common/interfaces/Processable.md#process)
