# Class: MessagesMcpResult

A result made of prompt messages.

## Extends

- [`McpResult`](McpResult.md)\<\{ `description?`: `string`; `messages`: [`McpPromptMessage`](../interfaces/McpPromptMessage.md)[]; \}\>

## Constructors

### Constructor

> **new MessagesMcpResult**(`value`, `rc?`): `MessagesMcpResult`

#### Parameters

##### value

###### description?

`string`

###### messages

[`McpPromptMessage`](../interfaces/McpPromptMessage.md)[]

##### rc?

`number` = `0`

#### Returns

`MessagesMcpResult`

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

#### description?

> `optional` **description?**: `string`

#### messages

> **messages**: [`McpPromptMessage`](../interfaces/McpPromptMessage.md)[]

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
