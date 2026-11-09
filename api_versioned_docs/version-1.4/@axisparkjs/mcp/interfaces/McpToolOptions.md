# Interface: McpToolOptions

Options of the `@McpTool` decorator.

## Extended by

- [`McpToolMetadata`](McpToolMetadata.md)

## Properties

### annotations?

> `optional` **annotations?**: [`McpToolAnnotations`](McpToolAnnotations.md)

Hints about the behavior of the tool.

***

### description?

> `optional` **description?**: `string`

A description of what the tool does, used by the clients and the models to decide when to call it.

***

### inputSchema?

> `optional` **inputSchema?**: [`JsonSchema`](JsonSchema.md)

A JSON Schema for the tool input. It replaces the schema generated from the `@McpArgs()` class.

***

### title?

> `optional` **title?**: `string`

A human-readable title for the tool.
