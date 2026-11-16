# Class: McpReturnErrorFilter

A global filter for returning the errors of the MCP handlers to the clients. Validation and parsing errors of the pipes are returned as invalid params.

## Constructors

### Constructor

> **new McpReturnErrorFilter**(): `McpReturnErrorFilter`

#### Returns

`McpReturnErrorFilter`

## Methods

### error()

> **error**(`error`, `context`): `Promise`\<[`ErrorMcpResult`](ErrorMcpResult.md)\>

Handles errors by returning them as MCP error results.

#### Parameters

##### error

`Error`

The error to handle.

##### context

[`McpContext`](../interfaces/McpContext.md)

The MCP context of the request.

#### Returns

`Promise`\<[`ErrorMcpResult`](ErrorMcpResult.md)\>

An ErrorMcpResult.
