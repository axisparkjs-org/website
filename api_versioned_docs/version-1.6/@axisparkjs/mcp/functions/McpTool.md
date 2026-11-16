# Function: McpTool()

## Call Signature

> **McpTool**(`name?`, `options?`): `MethodDecorator`

A method decorator that exposes a method as an MCP tool. The tool input is received with `@McpArgs()`, and its JSON Schema is generated from the `class-validator` class of that parameter.

### Parameters

#### name?

`string`

The name of the tool. Defaults to the method name.

#### options?

[`McpToolOptions`](../interfaces/McpToolOptions.md)

The options of the tool.

### Returns

`MethodDecorator`

A method decorator.

## Call Signature

> **McpTool**(`options`): `MethodDecorator`

A method decorator that exposes a method as an MCP tool named after the method.

### Parameters

#### options

[`McpToolOptions`](../interfaces/McpToolOptions.md)

The options of the tool.

### Returns

`MethodDecorator`

A method decorator.
