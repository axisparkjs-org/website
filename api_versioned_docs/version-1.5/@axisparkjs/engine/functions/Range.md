# Function: Range()

> **Range**(`min`, `max`): `object`

A decorator for applying the `RangePipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that validates the parameter value against the specified range. If the value is outside the defined range, a `PipeStepValidationError` is thrown. This allows the decorated method parameter to enforce numeric constraints, ensuring that it meets the specified range requirement.

## Parameters

### min

`number`

The minimum value allowed for the parameter.

### max

`number`

The maximum value allowed for the parameter.

## Returns

`object`

A pipe decorator that applies the `RangePipeStep` with the specified range.

### pipeStep

> **pipeStep**: *typeof* [`RangePipeStep`](../classes/RangePipeStep.md) = `RangePipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`RangePipeStepConfig`](../interfaces/RangePipeStepConfig.md)
