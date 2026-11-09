# Class: McpResultConverterStatic

A static class that converts the values returned by MCP handlers into the result of each kind of request.

## Constructors

### Constructor

> **new McpResultConverterStatic**(): `McpResultConverterStatic`

#### Returns

`McpResultConverterStatic`

## Methods

### fromContent()

> **fromContent**(`content`, `structuredContent`, `context`): `Record`\<`string`, `unknown`\>

Converts a list of content blocks.

#### Parameters

##### content

[`McpContent`](../type-aliases/McpContent.md)[]

The content blocks.

##### structuredContent

`Record`\<`string`, `unknown`\> \| `undefined`

The structured content of a tool result.

##### context

[`McpContext`](../interfaces/McpContext.md)

The context of the request.

#### Returns

`Record`\<`string`, `unknown`\>

The MCP result.

***

### fromMessages()

> **fromMessages**(`messages`, `description`, `context`): `Record`\<`string`, `unknown`\>

Converts a list of prompt messages.

#### Parameters

##### messages

[`McpPromptMessage`](../interfaces/McpPromptMessage.md)[]

The prompt messages.

##### description

`string` \| `undefined`

The description of the prompt result. Defaults to the description of the prompt.

##### context

[`McpContext`](../interfaces/McpContext.md)

The context of the request.

#### Returns

`Record`\<`string`, `unknown`\>

The MCP result.

***

### fromValue()

> **fromValue**(`value`, `context`): `Record`\<`string`, `unknown`\>

Converts the value returned by a handler. A string becomes a text content, an object becomes JSON, binary data becomes a blob and `undefined` an empty result.

#### Parameters

##### value

`unknown`

The value returned by the handler.

##### context

[`McpContext`](../interfaces/McpContext.md)

The context of the request.

#### Returns

`Record`\<`string`, `unknown`\>

The MCP result.
