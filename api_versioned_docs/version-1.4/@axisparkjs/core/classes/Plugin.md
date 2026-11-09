# Abstract Class: Plugin

Represents the base class for all plugins.

## Extended by

- [`DataPlugin`](../../data/classes/DataPlugin.md)
- [`HttpPlugin`](../../http/classes/HttpPlugin.md)
- [`KafkaPlugin`](../../kafka/classes/KafkaPlugin.md)
- [`McpPlugin`](../../mcp/classes/McpPlugin.md)
- [`OpenApiPlugin`](../../openapi/classes/OpenApiPlugin.md)
- [`RabbitMQPlugin`](../../rabbitmq/classes/RabbitMQPlugin.md)
- [`SchedulePlugin`](../../schedule/classes/SchedulePlugin.md)
- [`SecurityPlugin`](../../security/classes/SecurityPlugin.md)
- [`WebSocketPlugin`](../../websocket/classes/WebSocketPlugin.md)

## Constructors

### Constructor

> **new Plugin**(): `Plugin`

#### Returns

`Plugin`

## Properties

### options?

> `protected` `optional` **options?**: [`PluginOptions`](../interfaces/PluginOptions.md)

***

### state

> `protected` **state**: [`PluginLifecycle`](../enumerations/PluginLifecycle.md) = `PluginLifecycle.Created`

***

### stateError?

> `protected` `optional` **stateError?**: `Error`

***

### dependencies?

> `readonly` `static` `optional` **dependencies?**: ([`PluginType`](../interfaces/PluginType.md)\<`Plugin`\> \| \{ `optional`: `boolean`; `plugin`: [`PluginType`](../interfaces/PluginType.md); \})[]

## Methods

### getState()

> **getState**(): [`PluginLifecycle`](../enumerations/PluginLifecycle.md)

Retrieves the current lifecycle state of the plugin.

#### Returns

[`PluginLifecycle`](../enumerations/PluginLifecycle.md)

The current lifecycle state of the plugin.

***

### getStateError()

> **getStateError**(): `Error` \| `undefined`

Retrieves the error state of the plugin, if any.

#### Returns

`Error` \| `undefined`

The error that caused the plugin to enter the error state, or `undefined` if no error occurred.

***

### onRegister()?

> `optional` **onRegister**(`context`, `options?`): `void` \| `Promise`\<`void`\>

Lifecycle method called when the plugin is registered.

#### Parameters

##### context

[`AxiSparkContext`](AxiSparkContext.md)

The AxiSparkContext to be passed to the plugin during registration.

##### options?

[`PluginOptions`](../interfaces/PluginOptions.md)

The options for the plugin.

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStart()?

> `optional` **onStart**(): `void` \| `Promise`\<`void`\>

Lifecycle method called when the plugin is started.

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStop()?

> `optional` **onStop**(): `void` \| `Promise`\<`void`\>

Lifecycle method called when the plugin is stopped.

#### Returns

`void` \| `Promise`\<`void`\>

***

### setState()

> **setState**(`state`): `void`

Sets the lifecycle state of the plugin.

#### Parameters

##### state

[`PluginLifecycle`](../enumerations/PluginLifecycle.md)

The new lifecycle state of the plugin.

#### Returns

`void`

***

### setStateError()

> **setStateError**(`error`): `void`

Sets the error state of the plugin.

#### Parameters

##### error

`Error`

The error that caused the plugin to enter the error state.

#### Returns

`void`
