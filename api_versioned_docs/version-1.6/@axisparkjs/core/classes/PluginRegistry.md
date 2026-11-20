# Class: PluginRegistry

A registry for managing plugins and their lifecycle. The plugins are grouped by level of the dependency graph: the first level has the
plugins without dependencies, and each next level has the plugins whose dependencies are in the previous levels. The plugins of a level
run `onRegister` and `onStart` at the same time, after the previous level ends. `onStop` runs one plugin at a time, in the reverse of the
dependency order, because a plugin can use the connections of another one without declaring it (such as a shared store).

## Implements

- [`Lifecycle`](../../common/interfaces/Lifecycle.md)

## Constructors

### Constructor

> **new PluginRegistry**(`options?`): `PluginRegistry`

Creates a new plugin registry.

#### Parameters

##### options?

[`PluginRegistryOptions`](../interfaces/PluginRegistryOptions.md) = `{}`

The options of the registry.

#### Returns

`PluginRegistry`

## Methods

### destroy()

> **destroy**(`context`): `Promise`\<`void`\>

Destroys the registered plugins by executing their `onStop` lifecycle method one by one, in the reverse of the dependency order.

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
