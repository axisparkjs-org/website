# Class: ExpressHttpAdapter

An HTTP adapter for integrating Express.js with the HTTP Plugin.

## Implements

- [`HttpAdapter`](../../http/interfaces/HttpAdapter.md)

## Constructors

### Constructor

> **new ExpressHttpAdapter**(`options`): `ExpressHttpAdapter`

#### Parameters

##### options

[`ExpressHttpPluginOptions`](../interfaces/ExpressHttpPluginOptions.md)

#### Returns

`ExpressHttpAdapter`

## Methods

### getRegisteredRoutes()

> **getRegisteredRoutes**(): readonly [`RouteDefinition`](../../http/classes/RouteDefinition.md)[]

Retrieves the registered routes from the adapter.

#### Returns

readonly [`RouteDefinition`](../../http/classes/RouteDefinition.md)[]

An array of route definitions that have been registered with the adapter.

#### Implementation of

[`HttpAdapter`](../../http/interfaces/HttpAdapter.md).[`getRegisteredRoutes`](../../http/interfaces/HttpAdapter.md#getregisteredroutes)

***

### registerRoutes()

> **registerRoutes**(`routes`): `void`

Registers the provided routes with the adapter.

#### Parameters

##### routes

readonly [`RouteDefinition`](../../http/classes/RouteDefinition.md)[]

An array of route definitions to be registered.

#### Returns

`void`

A promise that resolves when the routes have been registered, or void if the operation is synchronous.

#### Implementation of

[`HttpAdapter`](../../http/interfaces/HttpAdapter.md).[`registerRoutes`](../../http/interfaces/HttpAdapter.md#registerroutes)

***

### start()

> **start**(): `void`

Starts the HTTP adapter.

#### Returns

`void`

A promise that resolves when the adapter has been started, or void if the operation is synchronous.

#### Implementation of

[`HttpAdapter`](../../http/interfaces/HttpAdapter.md).[`start`](../../http/interfaces/HttpAdapter.md#start)

***

### stop()

> **stop**(): `void`

Stops the HTTP adapter.

#### Returns

`void`

A promise that resolves when the adapter has been stopped, or void if the operation is synchronous.

#### Implementation of

[`HttpAdapter`](../../http/interfaces/HttpAdapter.md).[`stop`](../../http/interfaces/HttpAdapter.md#stop)
