# Function: Regex()

> **Regex**(`pattern`): `object`

A decorator for applying the `RegexPipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that validates the parameter value against the specified regular expression. If the value does not match the pattern, a `PipeStepValidationError` is thrown. This allows the decorated method parameter to enforce string format constraints, ensuring that it matches the expected pattern.

## Parameters

### pattern

`RegExp`

The regular expression to use for validation.

## Returns

`object`

A pipe decorator that applies the `RegexPipeStep` with the specified pattern.

### pipeStep

> **pipeStep**: *typeof* [`RegexPipeStep`](../classes/RegexPipeStep.md) = `RegexPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`RegexPipeStepConfig`](../interfaces/RegexPipeStepConfig.md)
