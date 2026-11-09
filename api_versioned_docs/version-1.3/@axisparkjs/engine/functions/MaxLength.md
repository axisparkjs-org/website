# Function: MaxLength()

> **MaxLength**(`value`): `object`

A decorator for applying the `MaxLengthPipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that validates the length of the parameter value against the specified maximum length. If the length exceeds the defined maximum, a `PipeStepValidationError` is thrown. This allows the decorated method parameter to enforce length constraints on string values, ensuring that they do not exceed the specified limit.

## Parameters

### value

`number`

The maximum length allowed for the parameter value.

## Returns

`object`

A pipe decorator that applies the `MaxLengthPipeStep` with the specified maximum length.

### pipeStep

> **pipeStep**: *typeof* [`MaxLengthPipeStep`](../classes/MaxLengthPipeStep.md) = `MaxLengthPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`MaxLengthPipeStepConfig`](../interfaces/MaxLengthPipeStepConfig.md)
