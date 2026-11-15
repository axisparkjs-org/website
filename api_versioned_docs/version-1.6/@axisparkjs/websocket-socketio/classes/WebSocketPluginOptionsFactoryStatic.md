# Class: WebSocketPluginOptionsFactoryStatic

A factory class for creating default Socket.IO WebSocket plugin options. This class implements the Factory interface and provides a method to create an instance of SocketIOWebSocketPluginOptions with default values, allowing for optional overrides.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`SocketIOWebSocketPluginOptions`](../interfaces/SocketIOWebSocketPluginOptions.md)\>

## Constructors

### Constructor

> **new WebSocketPluginOptionsFactoryStatic**(): `WebSocketPluginOptionsFactoryStatic`

#### Returns

`WebSocketPluginOptionsFactoryStatic`

## Methods

### create()

> **create**(`options?`): [`SocketIOWebSocketPluginOptions`](../interfaces/SocketIOWebSocketPluginOptions.md)

#### Parameters

##### options?

`Partial`\<`Omit`\<[`SocketIOWebSocketPluginOptions`](../interfaces/SocketIOWebSocketPluginOptions.md), `"adapter"` \| `"plugin"`\>\>

#### Returns

[`SocketIOWebSocketPluginOptions`](../interfaces/SocketIOWebSocketPluginOptions.md)

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
