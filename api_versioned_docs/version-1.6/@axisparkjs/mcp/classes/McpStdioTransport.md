# Class: McpStdioTransport

An MCP transport that communicates with a client through the standard input and output of the process. Nothing else may write to the standard output while it is running.

## Implements

- [`McpTransport`](../interfaces/McpTransport.md)

## Constructors

### Constructor

> **new McpStdioTransport**(`provider`, `onError?`): `McpStdioTransport`

#### Parameters

##### provider

[`McpServerProvider`](../type-aliases/McpServerProvider.md)

##### onError?

(`error`) => `void`

#### Returns

`McpStdioTransport`

## Methods

### start()

> **start**(): `Promise`\<`void`\>

Starts receiving requests.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`McpTransport`](../interfaces/McpTransport.md).[`start`](../interfaces/McpTransport.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Stops receiving requests and closes the open connections and sessions.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`McpTransport`](../interfaces/McpTransport.md).[`stop`](../interfaces/McpTransport.md#stop)
