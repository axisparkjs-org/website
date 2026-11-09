# Function: McpParam()

> **McpParam**(`name?`): `ParameterDecorator`

A parameter decorator for injecting a variable of the URI template of a resource. Without a name, it injects every variable.

## Parameters

### name?

`string`

The name of the variable, such as `id` in `users://{id}`.

## Returns

`ParameterDecorator`

A parameter decorator.
