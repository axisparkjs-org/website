# Class: PipeGenerator

A generator for creating pipe definitions based on metadata.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`PipeDefinition`](PipeDefinition.md)[]\>

## Constructors

### Constructor

> **new PipeGenerator**(): `PipeGenerator`

#### Returns

`PipeGenerator`

## Methods

### generate()

> **generate**(`parameters`, `handler`): `Promise`\<[`PipeDefinition`](PipeDefinition.md)[]\>

Generates an array of `PipeDefinition` instances based on the provided parameters and execution handler.

#### Parameters

##### parameters

[`ParameterDefinition`](ParameterDefinition.md)[]

An array of `ParameterDefinition` instances representing the parameters to be processed.

##### handler

[`ExecutionHandler`](../interfaces/ExecutionHandler.md)

The execution handler that provides metadata for the pipes.

#### Returns

`Promise`\<[`PipeDefinition`](PipeDefinition.md)[]\>

An array of `PipeDefinition` instances representing the generated pipes.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)
