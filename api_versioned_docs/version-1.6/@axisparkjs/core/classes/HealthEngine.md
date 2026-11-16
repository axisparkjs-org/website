# Class: HealthEngine

A class for managing and checking the health of the application, its plugins and its health checks. It provides methods to check the health status of all registered plugins and health checks, and the overall application health. The health status is represented using the `HealthData` interface, which includes information about each component's health, such as its name, current status, timestamp, and optional details. The class uses the `PluginRegistry` to access all registered plugins and determine their health based on their lifecycle state, and runs the health checks decorated with `@HealthCheck` or registered by plugins.

Methods:
- `register(indicator, options)`: Registers a health indicator, typically from a plugin, so that it is run with every health check.
- `checkAll()`: Checks the health status of all registered plugins and health checks and returns an array of `HealthData` objects representing the health of each component, including the overall application health.
- `checkApp()`: Checks the overall health status of the application and returns a single `HealthData` object representing the application's health.

The `HealthEngine` class is designed to be used in applications that require monitoring and reporting of component health, providing a structured way to assess the state of the application, its plugins and its external dependencies.

## Constructors

### Constructor

> **new HealthEngine**(`config`, `plugins`, `container`): `HealthEngine`

#### Parameters

##### config

[`AxiSparkConfig`](../interfaces/AxiSparkConfig.md)

##### plugins

[`PluginRegistry`](PluginRegistry.md)

##### container

`Container`

#### Returns

`HealthEngine`

## Methods

### checkAll()

> **checkAll**(): `Promise`\<[`HealthData`](../interfaces/HealthData.md)[]\>

Checks the health status of all registered plugins and health checks and returns an array of `HealthData` objects representing the health of each component, including the overall application health. The health checks are run in parallel, each one with its timeout. The application is `Unhealthy` if any plugin or critical health check is unhealthy.

#### Returns

`Promise`\<[`HealthData`](../interfaces/HealthData.md)[]\>

A promise resolving to an array of `HealthData` objects representing the health status of each component, including the overall application health.

***

### checkApp()

> **checkApp**(): `Promise`\<[`HealthData`](../interfaces/HealthData.md)\>

Checks the health status of the application and returns a `HealthData` object representing the overall application health.

#### Returns

`Promise`\<[`HealthData`](../interfaces/HealthData.md)\>

A promise resolving to a `HealthData` object representing the overall application health.

***

### register()

> **register**(`indicator`, `options?`): `void`

Registers a health indicator so that it is run every time the health of the application is checked. It is used by plugins to register the checks of their connections.

#### Parameters

##### indicator

[`HealthIndicator`](HealthIndicator.md)

The health indicator to register.

##### options?

[`HealthCheckOptions`](../interfaces/HealthCheckOptions.md)

The options of the health check.

#### Returns

`void`
