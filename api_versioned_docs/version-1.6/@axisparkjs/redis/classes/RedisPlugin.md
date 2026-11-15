# Class: RedisPlugin

A plugin for integrating Redis into the application.

## Extends

- [`Plugin`](../../core/classes/Plugin.md)

## Constructors

### Constructor

> **new RedisPlugin**(`logger`, `injector`): `RedisPlugin`

#### Parameters

##### logger

[`Logger`](../../logger/classes/Logger.md)

##### injector

[`Injector`](../../di/classes/Injector.md)

#### Returns

`RedisPlugin`

#### Overrides

[`Plugin`](../../core/classes/Plugin.md).[`constructor`](../../core/classes/Plugin.md#constructor)

## Properties

### options

> `protected` **options**: [`RedisPluginOptions`](../interfaces/RedisPluginOptions.md)

#### Overrides

[`Plugin`](../../core/classes/Plugin.md).[`options`](../../core/classes/Plugin.md#options)

***

### state

> `protected` **state**: [`PluginLifecycle`](../../core/enumerations/PluginLifecycle.md)

#### Inherited from

[`Plugin`](../../core/classes/Plugin.md).[`state`](../../core/classes/Plugin.md#state)

***

### stateError?

> `protected` `optional` **stateError?**: `Error`

#### Inherited from

[`Plugin`](../../core/classes/Plugin.md).[`stateError`](../../core/classes/Plugin.md#stateerror)

***

### dependencies?

> `readonly` `static` `optional` **dependencies?**: ([`PluginType`](../../core/interfaces/PluginType.md)\<[`Plugin`](../../core/classes/Plugin.md)\> \| \{ `optional`: `boolean`; `plugin`: [`PluginType`](../../core/interfaces/PluginType.md); \})[]

#### Inherited from

[`Plugin`](../../core/classes/Plugin.md).[`dependencies`](../../core/classes/Plugin.md#dependencies)

## Methods

### getState()

> **getState**(): [`PluginLifecycle`](../../core/enumerations/PluginLifecycle.md)

Retrieves the current lifecycle state of the plugin.

#### Returns

[`PluginLifecycle`](../../core/enumerations/PluginLifecycle.md)

The current lifecycle state of the plugin.

#### Inherited from

[`Plugin`](../../core/classes/Plugin.md).[`getState`](../../core/classes/Plugin.md#getstate)

***

### getStateError()

> **getStateError**(): `Error` \| `undefined`

Retrieves the error state of the plugin, if any.

#### Returns

`Error` \| `undefined`

The error that caused the plugin to enter the error state, or `undefined` if no error occurred.

#### Inherited from

[`Plugin`](../../core/classes/Plugin.md).[`getStateError`](../../core/classes/Plugin.md#getstateerror)

***

### onRegister()

> **onRegister**(`context`, `options?`): `Promise`\<`void`\>

Lifecycle method called when the plugin is registered.

#### Parameters

##### context

[`AxiSparkContext`](../../core/classes/AxiSparkContext.md)

The AxiSparkContext to be passed to the plugin during registration.

##### options?

[`RedisPluginOptions`](../interfaces/RedisPluginOptions.md)

The options for the plugin.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Plugin`](../../core/classes/Plugin.md).[`onRegister`](../../core/classes/Plugin.md#onregister)

***

### onStart()

> **onStart**(): `Promise`\<`void`\>

Lifecycle method called when the plugin is started.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Plugin`](../../core/classes/Plugin.md).[`onStart`](../../core/classes/Plugin.md#onstart)

***

### onStop()

> **onStop**(): `Promise`\<`void`\>

Lifecycle method called when the plugin is stopped.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Plugin`](../../core/classes/Plugin.md).[`onStop`](../../core/classes/Plugin.md#onstop)

***

### setState()

> **setState**(`state`): `void`

Sets the lifecycle state of the plugin.

#### Parameters

##### state

[`PluginLifecycle`](../../core/enumerations/PluginLifecycle.md)

The new lifecycle state of the plugin.

#### Returns

`void`

#### Inherited from

[`Plugin`](../../core/classes/Plugin.md).[`setState`](../../core/classes/Plugin.md#setstate)

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

#### Inherited from

[`Plugin`](../../core/classes/Plugin.md).[`setStateError`](../../core/classes/Plugin.md#setstateerror)
