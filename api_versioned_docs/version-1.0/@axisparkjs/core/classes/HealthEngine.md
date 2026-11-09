# Class: HealthEngine

A class for managing and checking the health of the application and its plugins. It provides methods to check the health status of all registered plugins and the overall application health. The health status is represented using the `HealthData` interface, which includes information about each component's health, such as its name, current status, timestamp, and optional details. The class uses the `PluginRegistry` to access all registered plugins and determine their health based on their lifecycle state.

Methods:
- `checkAll()`: Checks the health status of all registered plugins and returns an array of `HealthData` objects representing the health of each component, including the overall application health.
- `checkApp()`: Checks the overall health status of the application and returns a single `HealthData` object representing the application's health.
- `mapPluginStateToHealthData(pluginState: PluginLifecycle | undefined)`: A private method that maps a plugin's lifecycle state to a corresponding `HealthStatus` value, allowing for standardized representation of plugin health.

The `HealthEngine` class is designed to be used in applications that require monitoring and reporting of component health, providing a structured way to assess the state of the application and its plugins.

## Constructors

### Constructor

> **new HealthEngine**(`config`, `plugins`): `HealthEngine`

#### Parameters

##### config

[`AxiSparkConfig`](../interfaces/AxiSparkConfig.md)

##### plugins

[`PluginRegistry`](PluginRegistry.md)

#### Returns

`HealthEngine`

## Methods

### checkAll()

> **checkAll**(): [`HealthData`](../interfaces/HealthData.md)[]

Checks the health status of all registered plugins and returns an array of `HealthData` objects representing the health of each component, including the overall application health. The method iterates through all registered plugins, retrieves their lifecycle state, and maps it to a corresponding `HealthStatus`. It also constructs an overall application health status based on the individual plugin statuses.

#### Returns

[`HealthData`](../interfaces/HealthData.md)[]

An array of `HealthData` objects representing the health status of each component, including the overall application health.

***

### checkApp()

> **checkApp**(): [`HealthData`](../interfaces/HealthData.md)

Checks the health status of the application and returns a `HealthData` object representing the overall application health.

#### Returns

[`HealthData`](../interfaces/HealthData.md)

A `HealthData` object representing the overall application health.
