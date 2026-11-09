# Interface: McpPromptMetadata

Options of the `@McpPrompt` decorator.

## Extends

- [`MetadataFromMethod`](../../common/interfaces/MetadataFromMethod.md)
- [`McpPromptOptions`](McpPromptOptions.md)

## Properties

### arguments?

> `optional` **arguments?**: [`McpPromptArgument`](McpPromptArgument.md)[]

The arguments of the prompt. They replace the arguments generated from the `@McpArgs()` class.

#### Inherited from

[`McpPromptOptions`](McpPromptOptions.md).[`arguments`](McpPromptOptions.md#arguments)

***

### description?

> `optional` **description?**: `string`

A description of the prompt.

#### Inherited from

[`McpPromptOptions`](McpPromptOptions.md).[`description`](McpPromptOptions.md#description)

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

A human-readable title for the prompt.

#### Inherited from

[`McpPromptOptions`](McpPromptOptions.md).[`title`](McpPromptOptions.md#title)
