# Function: Max()

> **Max**(`value`): `object`

A decorator for applying the `MaxPipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that validates the parameter value against the specified maximum. If the value exceeds the defined maximum, a `PipeStepValidationError` is thrown. This allows the decorated method parameter to enforce numeric constraints, ensuring that it does not exceed the specified limit.

## Parameters

### value

`number`

The maximum value allowed for the parameter.

## Returns

`object`

A pipe decorator that applies the `MaxPipeStep` with the specified maximum value.

### pipeStep

> **pipeStep**: *typeof* [`MaxPipeStep`](../classes/MaxPipeStep.md) = `MaxPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`MaxPipeStepConfig`](../interfaces/MaxPipeStepConfig.md)
