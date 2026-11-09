# Function: NotEmpty()

> **NotEmpty**(): *typeof* [`NotEmptyPipeStep`](../classes/NotEmptyPipeStep.md)

A decorator for applying the `NotEmptyPipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that validates the parameter value against the specified minimum length. If the length is less than the defined minimum, a `PipeStepValidationError` is thrown. This allows the decorated method parameter to enforce length constraints on string values, ensuring that they meet the specified minimum requirement.

## Returns

*typeof* [`NotEmptyPipeStep`](../classes/NotEmptyPipeStep.md)

A pipe decorator that applies the `NotEmptyPipeStep`.
