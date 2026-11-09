# Class: PipeDefinition

A definition for a pipe that consists of a parameter and an array of pipe steps.
It encapsulates the parameter to be processed and the sequence of pipe steps to be applied to it.

## Constructors

### Constructor

> **new PipeDefinition**(`parameter`, `steps`): `PipeDefinition`

#### Parameters

##### parameter

[`ParameterDefinition`](ParameterDefinition.md)

##### steps

`object`[]

#### Returns

`PipeDefinition`

## Properties

### parameter

> `readonly` **parameter**: [`ParameterDefinition`](ParameterDefinition.md)

***

### steps

> `readonly` **steps**: `object`[]

#### pipeStep

> **pipeStep**: [`ClassType`](../../common/type-aliases/ClassType.md)\<[`PipeStep`](../interfaces/PipeStep.md)\<`unknown`, `unknown`\>\>

#### pipeStepConfig?

> `optional` **pipeStepConfig?**: [`PipeStepConfig`](../type-aliases/PipeStepConfig.md)
