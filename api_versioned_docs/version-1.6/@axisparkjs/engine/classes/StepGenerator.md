# Class: StepGenerator

A generator for creating step definitions based on metadata. The global steps are read from the `ClassRegistry` once, the first time a
plan is generated, also when the application has no global steps.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`StepDefinition`](StepDefinition.md)[]\>

## Constructors

### Constructor

> **new StepGenerator**(): `StepGenerator`

#### Returns

`StepGenerator`

## Methods

### generate()

> **generate**(`context`): [`StepDefinition`](StepDefinition.md)[]

Generates step definitions based on the provided execution context.

#### Parameters

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context containing relevant information for step generation.

#### Returns

[`StepDefinition`](StepDefinition.md)[]

An array of generated step definitions.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)
