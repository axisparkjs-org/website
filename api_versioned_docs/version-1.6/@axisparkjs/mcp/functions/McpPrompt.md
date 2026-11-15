# Function: McpPrompt()

## Call Signature

> **McpPrompt**(`name?`, `options?`): `MethodDecorator`

A method decorator that exposes a method as an MCP prompt. The prompt arguments are received with `@McpArgs()`.

### Parameters

#### name?

`string`

The name of the prompt. Defaults to the method name.

#### options?

[`McpPromptOptions`](../interfaces/McpPromptOptions.md)

The options of the prompt.

### Returns

`MethodDecorator`

A method decorator.

## Call Signature

> **McpPrompt**(`options`): `MethodDecorator`

A method decorator that exposes a method as an MCP prompt named after the method.

### Parameters

#### options

[`McpPromptOptions`](../interfaces/McpPromptOptions.md)

The options of the prompt.

### Returns

`MethodDecorator`

A method decorator.
