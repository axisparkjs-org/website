# Interface: HttpAdapter

An interface representing an HTTP adapter.
It defines the contract for handling HTTP-related operations.

## Methods

### getRegisteredRoutes()

> **getRegisteredRoutes**(): readonly [`RouteDefinition`](../classes/RouteDefinition.md)[]

Retrieves the registered routes from the adapter.

#### Returns

readonly [`RouteDefinition`](../classes/RouteDefinition.md)[]

An array of route definitions that have been registered with the adapter.

***

### initialize()?

> `optional` **initialize**(): `void` \| `Promise`\<`void`\>

Initializes the HTTP adapter.

#### Returns

`void` \| `Promise`\<`void`\>

A promise that resolves when the adapter has been initialized, or void if the operation is synchronous.

***

### registerRoutes()

> **registerRoutes**(`routes`): `void` \| `Promise`\<`void`\>

Registers the provided routes with the adapter.

#### Parameters

##### routes

readonly [`RouteDefinition`](../classes/RouteDefinition.md)[]

An array of route definitions to be registered.

#### Returns

`void` \| `Promise`\<`void`\>

A promise that resolves when the routes have been registered, or void if the operation is synchronous.

***

### start()

> **start**(): `void` \| `Promise`\<`void`\>

Starts the HTTP adapter.

#### Returns

`void` \| `Promise`\<`void`\>

A promise that resolves when the adapter has been started, or void if the operation is synchronous.

***

### stop()

> **stop**(): `void` \| `Promise`\<`void`\>

Stops the HTTP adapter.

#### Returns

`void` \| `Promise`\<`void`\>

A promise that resolves when the adapter has been stopped, or void if the operation is synchronous.
