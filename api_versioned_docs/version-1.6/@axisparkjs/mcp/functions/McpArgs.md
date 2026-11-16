# Function: McpArgs()

> **McpArgs**(): `ParameterDecorator`

A parameter decorator for injecting the arguments of a tool or a prompt. Combine it with `@Pipe(ValidateSchema())` to validate them; the class of the parameter is also used to generate the tool input schema.

## Returns

`ParameterDecorator`

A parameter decorator.
