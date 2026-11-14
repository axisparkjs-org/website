# Class: RouteValidator

Validates the declared routes and applies the configured action to each conflict found.

## Constructors

### Constructor

> **new RouteValidator**(`options`, `logger`): `RouteValidator`

#### Parameters

##### options

[`HttpPluginOptions`](../interfaces/HttpPluginOptions.md)

##### logger

`Logger`

#### Returns

`RouteValidator`

## Methods

### validate()

> **validate**(`routes`): `Promise`\<`void`\>

Compares every pair of declared routes, expanding grouped dispatch routes into the routes they group.
Conflicts configured as 'warn' are logged, and conflicts configured as 'error' are thrown together.

#### Parameters

##### routes

readonly [`RouteDefinition`](RouteDefinition.md)[]

The routes generated for the HTTP plugin.

#### Returns

`Promise`\<`void`\>
