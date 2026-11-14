# Function: ParseBoolean()

> **ParseBoolean**(): *typeof* [`ParseBooleanPipeStep`](../classes/ParseBooleanPipeStep.md)

A decorator for applying the `ParseBooleanPipeStep` to a method parameter. It uses the `Pipe` decorator to define a pipe step that attempts to parse the parameter value as a boolean. If the value cannot be parsed as a boolean, a `PipeStepParsingError` is thrown. This allows the decorated method parameter to enforce boolean constraints, ensuring that it is a valid boolean value.

## Returns

*typeof* [`ParseBooleanPipeStep`](../classes/ParseBooleanPipeStep.md)

A pipe decorator that applies the `ParseBooleanPipeStep`.
