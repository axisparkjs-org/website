# Function: McpServer()

> **McpServer**(`options?`): `ClassDecorator`

A class decorator that marks a class as a group of MCP capabilities: tools, resources and prompts. The class is resolved through the dependency injection container.

## Parameters

### options?

[`McpServerOptions`](../interfaces/McpServerOptions.md) = `{}`

The options of the group.

## Returns

`ClassDecorator`

A class decorator.
