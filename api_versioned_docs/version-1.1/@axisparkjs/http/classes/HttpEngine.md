# Class: HttpEngine

A class for handling HTTP engine operations.

## Implements

- [`Executable`](../../common/interfaces/Executable.md)

## Constructors

### Constructor

> **new HttpEngine**(`executionEngine`, `versionGenerator`, `versionProcessor`): `HttpEngine`

#### Parameters

##### executionEngine

[`ExecutionEngine`](../../engine/classes/ExecutionEngine.md)

##### versionGenerator

[`VersionGenerator`](VersionGenerator.md)

##### versionProcessor

[`VersionProcessor`](VersionProcessor.md)

#### Returns

`HttpEngine`

## Methods

### execute()

> **execute**(`context`): `Promise`\<`void`\>

Executes the HTTP engine with the provided context.

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

The HTTP context for execution.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)

***

### versionMapping()

> **versionMapping**(`routes`, `context`): `Promise`\<`void`\>

Maps the provided routes based on the versioning information in the context.

#### Parameters

##### routes

[`RouteDefinition`](RouteDefinition.md)[]

The array of route definitions to map.

##### context

`Pick`\<[`HttpContext`](../interfaces/HttpContext.md), `"request"` \| `"response"` \| `"session"`\>

The HTTP context containing request, response, and session information.

#### Returns

`Promise`\<`void`\>
