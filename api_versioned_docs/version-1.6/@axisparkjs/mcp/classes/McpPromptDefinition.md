# Class: McpPromptDefinition

A class representing the definition of an MCP prompt.

## Constructors

### Constructor

> **new McpPromptDefinition**(`target`, `propertyKey`, `name`, `description`, `title`, `promptArguments`, `handler`): `McpPromptDefinition`

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

##### promptArguments

[`McpPromptArgument`](../interfaces/McpPromptArgument.md)[]

##### handler

[`McpHandler`](../type-aliases/McpHandler.md)

#### Returns

`McpPromptDefinition`

## Properties

### arguments

> `readonly` **arguments**: [`McpPromptArgument`](../interfaces/McpPromptArgument.md)[]

The arguments accepted by the prompt.

***

### description

> `readonly` **description**: `string` \| `undefined`

***

### handler

> `readonly` **handler**: [`McpHandler`](../type-aliases/McpHandler.md)

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
