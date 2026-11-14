# Class: HttpEngine

A class for handling HTTP engine operations.

## Implements

- [`Executable`](../../common/interfaces/Executable.md)

## Constructors

### Constructor

> **new HttpEngine**(`executionEngine`, `hostProcessor`, `versionProcessor`, `hostMatcher`, `versionMatcher`, `scopedContainerManager`, `logger`, `options`): `HttpEngine`

#### Parameters

##### executionEngine

[`ExecutionEngine`](../../engine/classes/ExecutionEngine.md)

##### hostProcessor

[`HostProcessor`](HostProcessor.md)

##### versionProcessor

[`VersionProcessor`](VersionProcessor.md)

##### hostMatcher

[`HostMatcher`](HostMatcher.md)

##### versionMatcher

[`VersionMatcher`](VersionMatcher.md)

##### scopedContainerManager

[`ScopedContainerManager`](../../di/classes/ScopedContainerManager.md)

##### logger

`Logger`

##### options

[`HttpPluginOptions`](../interfaces/HttpPluginOptions.md)

#### Returns

`HttpEngine`

## Methods

### execute()

> **execute**(`context`, `routes`): `Promise`\<`void`\>

Executes the HTTP engine with the provided context.

#### Parameters

##### context

`Pick`\<[`HttpContext`](../interfaces/HttpContext.md), `"request"` \| `"response"` \| `"session"`\>

The HTTP context for execution.

##### routes

[`RouteDefinition`](RouteDefinition.md)[]

The routes to map which will be executed.
The errors that happen after the handler and the filters, while the response is sent (such as a stream that fails), are logged with the route instead of being thrown to the adapter. When the response has not started yet, it is answered with `500`.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)
