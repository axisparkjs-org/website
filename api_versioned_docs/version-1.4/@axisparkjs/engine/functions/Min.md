# Function: Min()

> **Min**(`value`): `object`

A decorator for applying the `MinPipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that validates the parameter value against the specified minimum. If the value is less than the defined minimum, a `PipeStepValidationError` is thrown. This allows the decorated method parameter to enforce numeric constraints, ensuring that it meets the specified minimum requirement.

## Parameters

### value

`number`

The minimum value allowed for the parameter.

## Returns

`object`

A pipe decorator that applies the `MinPipeStep` with the specified minimum value.

### pipeStep

> **pipeStep**: *typeof* [`MinPipeStep`](../classes/MinPipeStep.md) = `MinPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`MinPipeStepConfig`](../interfaces/MinPipeStepConfig.md)
