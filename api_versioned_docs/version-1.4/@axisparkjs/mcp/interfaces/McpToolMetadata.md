# Interface: McpToolMetadata

Options of the `@McpTool` decorator.

## Extends

- [`MetadataFromMethod`](../../common/interfaces/MetadataFromMethod.md)
- [`McpToolOptions`](McpToolOptions.md)

## Properties

### annotations?

> `optional` **annotations?**: [`McpToolAnnotations`](McpToolAnnotations.md)

Hints about the behavior of the tool.

#### Inherited from

[`McpToolOptions`](McpToolOptions.md).[`annotations`](McpToolOptions.md#annotations)

***

### description?

> `optional` **description?**: `string`

A description of what the tool does, used by the clients and the models to decide when to call it.

#### Inherited from

[`McpToolOptions`](McpToolOptions.md).[`description`](McpToolOptions.md#description)

***

### inputSchema?

> `optional` **inputSchema?**: [`JsonSchema`](JsonSchema.md)

A JSON Schema for the tool input. It replaces the schema generated from the `@McpArgs()` class.

#### Inherited from

[`McpToolOptions`](McpToolOptions.md).[`inputSchema`](McpToolOptions.md#inputschema)

***

### name

> **name**: `string`

***

### propertyKey

> **propertyKey**: `string` \| `symbol`

#### Inherited from

[`MetadataFromMethod`](../../common/interfaces/MetadataFromMethod.md).[`propertyKey`](../../common/interfaces/MetadataFromMethod.md#propertykey)

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`MetadataFromMethod`](../../common/interfaces/MetadataFromMethod.md).[`target`](../../common/interfaces/MetadataFromMethod.md#target)

***

### title?

> `optional` **title?**: `string`

A human-readable title for the tool.

#### Inherited from

[`McpToolOptions`](McpToolOptions.md).[`title`](McpToolOptions.md#title)
