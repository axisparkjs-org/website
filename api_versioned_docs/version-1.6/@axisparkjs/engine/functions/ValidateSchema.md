# Function: ValidateSchema()

> **ValidateSchema**(`options?`): `object`

A decorator for applying the `ValidateSchemaPipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that validates the parameter value against the class declared as the parameter type, using the `class-validator` decorators of that class. The class is inferred from the reflected parameter metadata, so it must be a class (interfaces, generics and union types are not supported). If validation fails, a `PipeStepValidationError` is thrown. On success, an instance of the declared class is passed to the next pipe step.

## Parameters

### options?

[`ValidatorOptions`](../interfaces/ValidatorOptions.md)

The `class-validator` options to use during validation.

## Returns

`object`

A pipe decorator that applies the `ValidateSchemaPipeStep`.

### pipeStep

> **pipeStep**: *typeof* [`ValidateSchemaPipeStep`](../classes/ValidateSchemaPipeStep.md) = `ValidateSchemaPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`ValidateSchemaPipeStepConfig`](../interfaces/ValidateSchemaPipeStepConfig.md)
