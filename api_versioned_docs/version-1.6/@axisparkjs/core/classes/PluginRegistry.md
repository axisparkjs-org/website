# Class: PluginRegistry

A registry for managing plugins and their lifecycle.

## Implements

- [`Lifecycle`](../../common/interfaces/Lifecycle.md)

## Constructors

### Constructor

> **new PluginRegistry**(): `PluginRegistry`

#### Returns

`PluginRegistry`

## Methods

### destroy()

> **destroy**(`context`): `Promise`\<`void`\>

Destroys the registered plugins by executing their `onStop` lifecycle method in reverse order.

#### Parameters

##### context

[`AxiSparkContext`](AxiSparkContext.md)

The AxiSparkContext to be passed to the plugins during destruction.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Lifecycle`](../../common/interfaces/Lifecycle.md).[`destroy`](../../common/interfaces/Lifecycle.md#destroy)

***

### getAll()

> **getAll**(): readonly `object`[]

Retrieves all registered plugins along with their options and instances.

#### Returns

readonly `object`[]

An array of objects containing the plugin type, options, and instance.

***

### init()

> **init**(`context`): `Promise`\<`void`\>

Initializes the registered plugins by executing their `onRegister` lifecycle method.

#### Parameters

##### context

[`AxiSparkContext`](AxiSparkContext.md)

The AxiSparkContext to be passed to the plugins during initialization.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Lifecycle`](../../common/interfaces/Lifecycle.md).[`init`](../../common/interfaces/Lifecycle.md#init)

***

### register()

> **register**(`plugin`, `options?`): `void`

Registers a new plugin with the registry.

#### Parameters

##### plugin

[`PluginType`](../interfaces/PluginType.md)

The type of the plugin to register.

##### options?

[`PluginOptions`](../interfaces/PluginOptions.md)

The options for the plugin.

#### Returns

`void`

***

### run()

> **run**(`context`): `Promise`\<`void`\>

Starts the registered plugins by executing their `onStart` lifecycle method.

#### Parameters

##### context

[`AxiSparkContext`](AxiSparkContext.md)

The AxiSparkContext to be passed to the plugins during startup.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Lifecycle`](../../common/interfaces/Lifecycle.md).[`run`](../../common/interfaces/Lifecycle.md#run)
