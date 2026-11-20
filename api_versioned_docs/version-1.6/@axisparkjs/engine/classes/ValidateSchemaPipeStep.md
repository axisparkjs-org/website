# Class: ValidateSchemaPipeStep

A pipe-step that validates a parameter against the class declared as its type, with the `class-validator` decorators of the class. The
class is read from the `design:paramtypes` metadata once per handler and parameter, and kept for the next validations.

## Implements

- [`PipeStep`](../interfaces/PipeStep.md)\<`unknown`, `object`\>

## Constructors

### Constructor

> **new ValidateSchemaPipeStep**(): `ValidateSchemaPipeStep`

#### Returns

`ValidateSchemaPipeStep`

## Methods

### execute()

> **execute**(`parameter`, `config?`): `Promise`\<`any`\>

#### Parameters

##### parameter

[`ParameterDefinition`](ParameterDefinition.md)

##### config?

[`ValidateSchemaPipeStepConfig`](../interfaces/ValidateSchemaPipeStepConfig.md)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`PipeStep`](../interfaces/PipeStep.md).[`execute`](../interfaces/PipeStep.md#execute)
