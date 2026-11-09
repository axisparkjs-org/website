# Class: AxiSparkCore

A class representing the core of the Axispark framework. It implements the `Lifecycle` interface, which includes methods for initialization, running, and destruction of the application. The `AxiSparkCore` class manages the lifecycle of the application, including initializing the context, running the application, and handling shutdown signals.

The `AxiSparkCore` class provides methods to register plugins, retrieve used plugins, and resolve dependencies from the dependency injection container. It serves as the main entry point for managing the application's lifecycle and coordinating various components and services within the Axispark framework.

## Implements

- [`Lifecycle`](../../common/interfaces/Lifecycle.md)

## Constructors

### Constructor

> **new AxiSparkCore**(`axisparkContext`): `AxiSparkCore`

#### Parameters

##### axisparkContext

[`AxiSparkContext`](AxiSparkContext.md)

#### Returns

`AxiSparkCore`

## Accessors

### config

#### Get Signature

> **get** **config**(): [`AxiSparkConfig`](../interfaces/AxiSparkConfig.md)

##### Returns

[`AxiSparkConfig`](../interfaces/AxiSparkConfig.md)

## Methods

### destroy()

> **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Lifecycle`](../../common/interfaces/Lifecycle.md).[`destroy`](../../common/interfaces/Lifecycle.md#destroy)

***

### get()

> **get**\<`T`\>(`token`): `Promise`\<`T`\>

#### Type Parameters

##### T

`T`

#### Parameters

##### token

`Token`\<`T`\>

#### Returns

`Promise`\<`T`\>

***

### init()

> **init**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Lifecycle`](../../common/interfaces/Lifecycle.md).[`init`](../../common/interfaces/Lifecycle.md#init)

***

### run()

> **run**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Lifecycle`](../../common/interfaces/Lifecycle.md).[`run`](../../common/interfaces/Lifecycle.md#run)

***

### use()

> **use**(`plugin`, `options?`): `this`

#### Parameters

##### plugin

[`PluginType`](../interfaces/PluginType.md)

##### options?

[`PluginOptions`](../interfaces/PluginOptions.md)

#### Returns

`this`

***

### used()

> **used**(): readonly `object`[]

#### Returns

readonly `object`[]
