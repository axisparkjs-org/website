# Function: ParseInt()

> **ParseInt**(`radix?`): `object`

A decorator for applying the `ParseIntPipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that attempts to parse the parameter value as an integer. If the value cannot be parsed as an integer, a `PipeStepParsingError` is thrown. This allows the decorated method parameter to enforce integer constraints, ensuring that it is a valid integer value.

## Parameters

### radix?

`number`

The base of the number system to use for parsing (default is 10).

## Returns

`object`

A pipe decorator that applies the `ParseIntPipeStep`.

### pipeStep

> **pipeStep**: *typeof* [`ParseIntPipeStep`](../classes/ParseIntPipeStep.md) = `ParseIntPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`ParseIntPipeStepConfig`](../interfaces/ParseIntPipeStepConfig.md)
