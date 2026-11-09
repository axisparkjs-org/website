# Class: McpResultsStatic

A static class for creating MCP results.

## Constructors

### Constructor

> **new McpResultsStatic**(): `McpResultsStatic`

#### Returns

`McpResultsStatic`

## Methods

### Audio()

> **Audio**(`data`, `mimeType`): [`ContentMcpResult`](ContentMcpResult.md)

Creates an audio result.

#### Parameters

##### data

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The audio data, or a string already encoded in base64.

##### mimeType

`string`

The MIME type of the audio, such as `audio/wav`.

#### Returns

[`ContentMcpResult`](ContentMcpResult.md)

***

### Content()

> **Content**(`content`, `structuredContent?`): [`ContentMcpResult`](ContentMcpResult.md)

Creates a result from a list of content blocks.

#### Parameters

##### content

[`McpContent`](../type-aliases/McpContent.md)[]

The content blocks.

##### structuredContent?

`Record`\<`string`, `unknown`\>

The structured content of a tool result.

#### Returns

[`ContentMcpResult`](ContentMcpResult.md)

***

### Error()

> **Error**(`error`): [`ErrorMcpResult`](ErrorMcpResult.md)

Creates an error result.

#### Parameters

##### error

`string` \| [`McpError`](McpError.md)

The error or its message.

#### Returns

[`ErrorMcpResult`](ErrorMcpResult.md)

***

### Image()

> **Image**(`data`, `mimeType`): [`ContentMcpResult`](ContentMcpResult.md)

Creates an image result.

#### Parameters

##### data

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The image data, or a string already encoded in base64.

##### mimeType

`string`

The MIME type of the image, such as `image/png`.

#### Returns

[`ContentMcpResult`](ContentMcpResult.md)

***

### Json()

> **Json**(`value`): [`ContentMcpResult`](ContentMcpResult.md)

Creates a JSON result. Tools also send the value as structured content when it is an object.

#### Parameters

##### value

`unknown`

#### Returns

[`ContentMcpResult`](ContentMcpResult.md)

***

### Messages()

> **Messages**(`messages`, `description?`): [`MessagesMcpResult`](MessagesMcpResult.md)

Creates a prompt result from a list of messages.

#### Parameters

##### messages

[`McpPromptMessage`](../interfaces/McpPromptMessage.md)[]

The prompt messages.

##### description?

`string`

The description of the prompt result.

#### Returns

[`MessagesMcpResult`](MessagesMcpResult.md)

***

### Ok()

> **Ok**(`value`): [`OkMcpResult`](OkMcpResult.md)\<`unknown`\>

Creates a result from any value. It is converted as if the handler returned it.

#### Parameters

##### value

`unknown`

#### Returns

[`OkMcpResult`](OkMcpResult.md)\<`unknown`\>

***

### Raw()

> **Raw**(`result`): [`RawMcpResult`](RawMcpResult.md)

Creates a result that is sent to the client as it is.

#### Parameters

##### result

`Record`\<`string`, `unknown`\>

The MCP result, such as `{ content: [...] }` for a tool.

#### Returns

[`RawMcpResult`](RawMcpResult.md)

***

### Resource()

> **Resource**(`uri`, `contents`, `mimeType?`): [`ContentMcpResult`](ContentMcpResult.md)

Creates a result with an embedded resource.

#### Parameters

##### uri

`string`

The URI of the resource.

##### contents

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The text or the binary contents of the resource.

##### mimeType?

`string`

The MIME type of the resource.

#### Returns

[`ContentMcpResult`](ContentMcpResult.md)

***

### ResourceLink()

> **ResourceLink**(`uri`, `name`, `options?`): [`ContentMcpResult`](ContentMcpResult.md)

Creates a result with a link to a resource that the client can read later.

#### Parameters

##### uri

`string`

The URI of the resource.

##### name

`string`

The name of the resource.

##### options?

The title, description and MIME type of the resource.

###### description?

`string`

###### mimeType?

`string`

###### title?

`string`

#### Returns

[`ContentMcpResult`](ContentMcpResult.md)

***

### Text()

> **Text**(`text`): [`ContentMcpResult`](ContentMcpResult.md)

Creates a text result.

#### Parameters

##### text

`string`

#### Returns

[`ContentMcpResult`](ContentMcpResult.md)
