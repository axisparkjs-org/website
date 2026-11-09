# Interface: WebSocketConnection

Represents a WebSocket connection, including the connection details and methods to interact with it.

## Properties

### connected

> `readonly` **connected**: `boolean`

Whether the underlying transport connection is still open.

***

### id

> **id**: `string`

Unique identifier for this connection.

***

### namespace

> **namespace**: `string` \| `undefined`

Namespace this connection belongs to, if the adapter supports namespaces.

***

### remoteAddress

> `readonly` **remoteAddress**: `string` \| `undefined`

The address of the remote client, if the adapter knows it. Behind a proxy, it is resolved from the `X-Forwarded-For` header only
when the proxy is trusted with the `trustProxy` option of the plugin. Unlike `id`, it does not change when the client reconnects.

***

### rooms

> **rooms**: readonly `string`[]

Rooms/channels this connection currently belongs to, if the adapter supports them.

## Methods

### broadcast()

> **broadcast**\<`TData`\>(`room`, `event`, `data?`): `void`

Broadcasts an event to a room (excluding or including self, per adapter convention).

#### Type Parameters

##### TData

`TData` = `unknown`

#### Parameters

##### room

`string`

##### event

`string`

##### data?

`TData`

#### Returns

`void`

***

### close()

> **close**(`code?`, `reason?`): `void`

Closes the connection, optionally with a reason code/message.

#### Parameters

##### code?

`number`

##### reason?

`string`

#### Returns

`void`

***

### emit()

> **emit**\<`TData`\>(`event`, `data?`): `void`

Sends an event with a payload to this connection only.

#### Type Parameters

##### TData

`TData` = `unknown`

#### Parameters

##### event

`string`

##### data?

`TData`

#### Returns

`void`

***

### join()

> **join**(`room`): `void`

Joins a room/channel, if supported by the underlying adapter.

#### Parameters

##### room

`string`

#### Returns

`void`

***

### leave()

> **leave**(`room`): `void`

Leaves a room/channel, if supported by the underlying adapter.

#### Parameters

##### room

`string`

#### Returns

`void`
