# Function: ParseFloat()

> **ParseFloat**(): *typeof* [`ParseFloatPipeStep`](../classes/ParseFloatPipeStep.md)

A decorator for applying the `ParseFloatPipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that attempts to parse the parameter value as a float. If the value cannot be parsed as a float, a `PipeStepParsingError` is thrown. This allows the decorated method parameter to enforce float constraints, ensuring that it is a valid float value.

## Returns

*typeof* [`ParseFloatPipeStep`](../classes/ParseFloatPipeStep.md)

A pipe decorator that applies the `ParseFloatPipeStep`.
