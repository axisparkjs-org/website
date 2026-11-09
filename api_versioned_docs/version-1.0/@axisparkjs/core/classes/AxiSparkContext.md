# Class: AxiSparkContext

A class representing the context of the Axispark framework. It encapsulates various components and services that are essential for the operation of the framework, including logging, plugin management, dependency injection, configuration, and scanning capabilities.

The `AxiSparkContext` class provides a centralized context for managing the state and behavior of the Axispark framework. It initializes and configures essential services such as logging, plugin registry, dependency injection container, and scanner based on the provided configuration options.

## Constructors

### Constructor

> **new AxiSparkContext**(`config?`, `privateConfig?`): `AxiSparkContext`

#### Parameters

##### config?

[`AxiSparkConfig`](../interfaces/AxiSparkConfig.md)

##### privateConfig?

[`AxiSparkPrivateConfig`](../interfaces/AxiSparkPrivateConfig.md)

#### Returns

`AxiSparkContext`

## Properties

### config

> `readonly` **config**: [`AxiSparkConfig`](../interfaces/AxiSparkConfig.md)

***

### container

> `readonly` **container**: `Container`

***

### logger

> `readonly` **logger**: `Logger`

***

### plugins

> `readonly` **plugins**: [`PluginRegistry`](PluginRegistry.md)

***

### privateConfig

> `readonly` **privateConfig**: [`AxiSparkPrivateConfig`](../interfaces/AxiSparkPrivateConfig.md)

***

### scanner

> `readonly` **scanner**: [`Scanner`](../interfaces/Scanner.md)
