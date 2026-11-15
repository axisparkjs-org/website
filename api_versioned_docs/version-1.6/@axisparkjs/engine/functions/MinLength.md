# Function: MinLength()

> **MinLength**(`value`): `object`

A decorator for applying the `MinLengthPipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that validates the length of the parameter value against the specified minimum length. If the length is less than the defined minimum, a `PipeStepValidationError` is thrown. This allows the decorated method parameter to enforce length constraints on string values, ensuring that they meet the specified minimum requirement.

## Parameters

### value

`number`

The minimum length allowed for the parameter value.

## Returns

`object`

A pipe decorator that applies the `MinLengthPipeStep` with the specified minimum length.

### pipeStep

> **pipeStep**: *typeof* [`MinLengthPipeStep`](../classes/MinLengthPipeStep.md) = `MinLengthPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`MinLengthPipeStepConfig`](../interfaces/MinLengthPipeStepConfig.md)
