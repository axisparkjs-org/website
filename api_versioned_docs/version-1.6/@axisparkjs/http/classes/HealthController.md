# Class: HealthController

A controller for handling health check endpoints.

## Constructors

### Constructor

> **new HealthController**(`healthEngine`): `HealthController`

#### Parameters

##### healthEngine

[`HealthEngine`](../../core/classes/HealthEngine.md)

#### Returns

`HealthController`

## Methods

### getHealth()

> **getHealth**(`response`): `Promise`\<[`HandledResult`](../../engine/classes/HandledResult.md)\>

Gets the health status of the application.

#### Parameters

##### response

[`HttpResponse`](../interfaces/HttpResponse.md)

The HTTP response object.

#### Returns

`Promise`\<[`HandledResult`](../../engine/classes/HandledResult.md)\>

A promise resolving to the handled result.

***

### getLiveness()

> **getLiveness**(): `Promise`\<\{ `status`: [`HealthStatus`](../../core/enumerations/HealthStatus.md); `timestamp`: `string`; \}\>

Gets the liveness status of the application.

#### Returns

`Promise`\<\{ `status`: [`HealthStatus`](../../core/enumerations/HealthStatus.md); `timestamp`: `string`; \}\>

A promise resolving to the liveness status.

***

### getReadiness()

> **getReadiness**(): `Promise`\<\{ `status`: [`HealthStatus`](../../core/enumerations/HealthStatus.md); `timestamp`: `string`; \}\>

Gets the readiness status of the application.

#### Returns

`Promise`\<\{ `status`: [`HealthStatus`](../../core/enumerations/HealthStatus.md); `timestamp`: `string`; \}\>

A promise resolving to the readiness status.
