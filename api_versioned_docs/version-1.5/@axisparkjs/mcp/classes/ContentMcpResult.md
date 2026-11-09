# Class: ContentMcpResult

A result made of content blocks, such as texts, images or embedded resources.

## Extends

- [`McpResult`](McpResult.md)\<\{ `content`: [`McpContent`](../type-aliases/McpContent.md)[]; `structuredContent?`: `Record`\<`string`, `unknown`\>; \}\>

## Constructors

### Constructor

> **new ContentMcpResult**(`value`, `rc?`): `ContentMcpResult`

#### Parameters

##### value

###### content

[`McpContent`](../type-aliases/McpContent.md)[]

###### structuredContent?

`Record`\<`string`, `unknown`\>

##### rc?

`number` = `0`

#### Returns

`ContentMcpResult`

#### Inherited from

[`McpResult`](McpResult.md).[`constructor`](McpResult.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`McpResult`](McpResult.md).[`rc`](McpResult.md#rc)

***

### value

> `readonly` **value**: `object`

#### content

> **content**: [`McpContent`](../type-aliases/McpContent.md)[]

#### structuredContent?

> `optional` **structuredContent?**: `Record`\<`string`, `unknown`\>

#### Inherited from

[`McpResult`](McpResult.md).[`value`](McpResult.md#value)

## Methods

### process()

> **process**(`context`): `Promise`\<`void`\>

Processes the result using the provided execution context.

#### Parameters

##### context

[`McpContext`](../interfaces/McpContext.md)

The execution context containing relevant information for processing.

#### Returns

`Promise`\<`void`\>

A promise resolving when the result has been processed.

#### Overrides

[`McpResult`](McpResult.md).[`process`](McpResult.md#process)
