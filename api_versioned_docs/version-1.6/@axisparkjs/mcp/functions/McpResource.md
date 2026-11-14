# Function: McpResource()

> **McpResource**(`uri`, `options?`): `MethodDecorator`

A method decorator that exposes a method as an MCP resource. The URI can be a fixed URI (`config://app`) or a URI template (`users://{id}`); the variables of a template are received with `@McpParam(name)`.

## Parameters

### uri

`string`

The URI or URI template of the resource.

### options?

[`McpResourceOptions`](../interfaces/McpResourceOptions.md) = `{}`

The options of the resource.

## Returns

`MethodDecorator`

A method decorator.
