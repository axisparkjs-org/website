# Interface: McpResourceMetadata

Options of the `@McpResource` decorator.

## Extends

- [`MetadataFromMethod`](../../common/interfaces/MetadataFromMethod.md)
- [`McpResourceOptions`](McpResourceOptions.md)

## Properties

### description?

> `optional` **description?**: `string`

A description of the resource.

#### Inherited from

[`McpResourceOptions`](McpResourceOptions.md).[`description`](McpResourceOptions.md#description)

***

### mimeType?

> `optional` **mimeType?**: `string`

The MIME type of the resource contents.

#### Inherited from

[`McpResourceOptions`](McpResourceOptions.md).[`mimeType`](McpResourceOptions.md#mimetype)

***

### name

> **name**: `string`

The name of the resource. Defaults to the method name.

#### Overrides

[`McpResourceOptions`](McpResourceOptions.md).[`name`](McpResourceOptions.md#name)

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

A human-readable title for the resource.

#### Inherited from

[`McpResourceOptions`](McpResourceOptions.md).[`title`](McpResourceOptions.md#title)

***

### uri

> **uri**: `string`
