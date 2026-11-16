# Class: McpHttpTransport

An MCP transport that serves the Streamable HTTP protocol on a path. It opens its own HTTP server, or mounts the endpoint on an existing one.

## Implements

- [`McpTransport`](../interfaces/McpTransport.md)

## Constructors

### Constructor

> **new McpHttpTransport**(`provider`, `options`): `McpHttpTransport`

#### Parameters

##### provider

[`McpServerProvider`](../type-aliases/McpServerProvider.md)

##### options

[`McpHttpTransportOptions`](../interfaces/McpHttpTransportOptions.md)

#### Returns

`McpHttpTransport`

## Accessors

### endpoint

#### Get Signature

> **get** **endpoint**(): `string`

The path of the MCP endpoint.

##### Returns

`string`

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
