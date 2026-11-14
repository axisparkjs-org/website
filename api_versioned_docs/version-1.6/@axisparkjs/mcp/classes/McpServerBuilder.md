# Class: McpServerBuilder

A builder of the protocol servers of the MCP plugin. The transports create a server for each connection or request, and every server dispatches the requests to the handlers of the MCP definitions.

## Constructors

### Constructor

> **new McpServerBuilder**(`logger`): `McpServerBuilder`

#### Parameters

##### logger

[`Logger`](../../logger/classes/Logger.md)

#### Returns

`McpServerBuilder`

## Methods

### build()

> **build**(`transport`): `Server`

Creates a protocol server with the request handlers of the configured definitions. Only the capabilities with at least one definition are declared.

#### Parameters

##### transport

`"stdio"` \| `"http"`

The transport that serves the server.

#### Returns

`Server`

The protocol server.

***

### configure()

> **configure**(`info`, `definitions`): `void`

Configures the information and the capabilities of the servers created by the builder.

#### Parameters

##### info

[`McpServerInfo`](../interfaces/McpServerInfo.md)

The information of the server sent to the clients.

##### definitions

[`McpDefinitions`](../interfaces/McpDefinitions.md)

The tools, resources and prompts of the application.

#### Returns

`void`
