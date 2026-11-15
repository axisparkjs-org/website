# Class: McpToolDefinition

A class representing the definition of an MCP tool.

## Constructors

### Constructor

> **new McpToolDefinition**(`target`, `propertyKey`, `name`, `description`, `title`, `inputSchema`, `annotations`, `handler`): `McpToolDefinition`

#### Parameters

##### target

[`ClassType`](../../common/type-aliases/ClassType.md)

##### propertyKey

`string` \| `symbol`

##### name

`string`

##### description

`string` \| `undefined`

##### title

`string` \| `undefined`

##### inputSchema

[`JsonSchema`](../interfaces/JsonSchema.md)

##### annotations

[`McpToolAnnotations`](../interfaces/McpToolAnnotations.md) \| `undefined`

##### handler

[`McpHandler`](../type-aliases/McpHandler.md)

#### Returns

`McpToolDefinition`

## Properties

### annotations

> `readonly` **annotations**: [`McpToolAnnotations`](../interfaces/McpToolAnnotations.md) \| `undefined`

***

### description

> `readonly` **description**: `string` \| `undefined`

***

### handler

> `readonly` **handler**: [`McpHandler`](../type-aliases/McpHandler.md)

***

### inputSchema

> `readonly` **inputSchema**: [`JsonSchema`](../interfaces/JsonSchema.md)

***

### name

> `readonly` **name**: `string`

***

### propertyKey

> `readonly` **propertyKey**: `string` \| `symbol`

***

### target

> `readonly` **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

***

### title

> `readonly` **title**: `string` \| `undefined`
