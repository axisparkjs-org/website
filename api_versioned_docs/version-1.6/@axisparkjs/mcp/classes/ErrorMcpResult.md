# Class: ErrorMcpResult

A result for errors. Tools return it as a tool result with `isError: true`, so the model can see the error and recover from it. Resources and prompts return it as a JSON-RPC error.

## Extends

- [`McpResult`](McpResult.md)\<[`McpError`](McpError.md)\>

## Constructors

### Constructor

> **new ErrorMcpResult**(`error`): `ErrorMcpResult`

#### Parameters

##### error

[`McpError`](McpError.md)

#### Returns

`ErrorMcpResult`

#### Overrides

[`McpResult`](McpResult.md).[`constructor`](McpResult.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`McpResult`](McpResult.md).[`rc`](McpResult.md#rc)

***

### value

> `readonly` **value**: [`McpError`](McpError.md)

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
