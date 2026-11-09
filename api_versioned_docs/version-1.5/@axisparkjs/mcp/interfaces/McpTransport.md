# Interface: McpTransport

An interface representing an MCP transport, which receives the requests of the clients and hands them to the protocol servers.

## Methods

### start()

> **start**(): `Promise`\<`void`\>

Starts receiving requests.

#### Returns

`Promise`\<`void`\>

***

### stop()

> **stop**(): `Promise`\<`void`\>

Stops receiving requests and closes the open connections and sessions.

#### Returns

`Promise`\<`void`\>
