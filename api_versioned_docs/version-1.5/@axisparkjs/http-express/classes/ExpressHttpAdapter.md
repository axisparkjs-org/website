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

### getHttpServer()

> **getHttpServer**(): [`HttpServer`](../../common/type-aliases/HttpServer.md)

Retrieves the underlying HTTP server instance used by the adapter.

#### Returns

[`HttpServer`](../../common/type-aliases/HttpServer.md)

The HTTP server instance, which can be of type `http.Server`, `https.Server`, `http2.Http2Server`, or `http2.Http2SecureServer`.

#### Implementation of

[`HttpAdapter`](../../http/interfaces/HttpAdapter.md).[`getHttpServer`](../../http/interfaces/HttpAdapter.md#gethttpserver)

***

### getRegisteredRoutes()

> **getRegisteredRoutes**(): readonly [`RouteDefinition`](../../http/classes/RouteDefinition.md)[]

Retrieves the registered routes from the adapter.

#### Returns

readonly [`RouteDefinition`](../../http/classes/RouteDefinition.md)[]

An array of route definitions that have been registered with the adapter.

#### Implementation of

[`HttpAdapter`](../../http/interfaces/HttpAdapter.md).[`getRegisteredRoutes`](../../http/interfaces/HttpAdapter.md#getregisteredroutes)

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Initializes the HTTP adapter.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the adapter has been initialized, or void if the operation is synchronous.

#### Implementation of

[`HttpAdapter`](../../http/interfaces/HttpAdapter.md).[`initialize`](../../http/interfaces/HttpAdapter.md#initialize)

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

> **start**(): `Promise`\<`void`\>

Starts listening on the configured port.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the server is listening, and rejects with the `listen` error, such as `EADDRINUSE`.

#### Implementation of

[`HttpAdapter`](../../http/interfaces/HttpAdapter.md).[`start`](../../http/interfaces/HttpAdapter.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Stops the server. The idle keep-alive connections are closed immediately, and the connections that are still
handling a request are closed after 10 seconds.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the server is closed.

#### Implementation of

[`HttpAdapter`](../../http/interfaces/HttpAdapter.md).[`stop`](../../http/interfaces/HttpAdapter.md#stop)
