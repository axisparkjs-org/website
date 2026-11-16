# Class: McpResourceDefinition

A class representing the definition of an MCP resource, with a fixed URI or a URI template.

## Constructors

### Constructor

> **new McpResourceDefinition**(`target`, `propertyKey`, `uri`, `name`, `description`, `title`, `mimeType`, `handler`): `McpResourceDefinition`

#### Parameters

##### target

[`ClassType`](../../common/type-aliases/ClassType.md)

##### propertyKey

`string` \| `symbol`

##### uri

`string`

##### name

`string`

##### description

`string` \| `undefined`

##### title

`string` \| `undefined`

##### mimeType

`string` \| `undefined`

##### handler

[`McpHandler`](../type-aliases/McpHandler.md)

#### Returns

`McpResourceDefinition`

## Properties

### description

> `readonly` **description**: `string` \| `undefined`

***

### handler

> `readonly` **handler**: [`McpHandler`](../type-aliases/McpHandler.md)

***

### mimeType

> `readonly` **mimeType**: `string` \| `undefined`

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

***

### uri

> `readonly` **uri**: `string`

## Accessors

### isTemplate

#### Get Signature

> **get** **isTemplate**(): `boolean`

Whether the URI of the resource is a URI template, such as `users://{id}`.

##### Returns

`boolean`

## Methods

### match()

> **match**(`uri`): `Record`\<`string`, `string` \| `string`[]\> \| `undefined`

Matches a URI requested by a client against the URI of the resource.

#### Parameters

##### uri

`string`

The requested URI.

#### Returns

`Record`\<`string`, `string` \| `string`[]\> \| `undefined`

The variables of the URI template, an empty object for a fixed URI that matches, or undefined when the URI does not match.
