# Class: RateLimitGenerator

Generates rate limit policies from metadata and transport defaults.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`RateLimitDefinition`](RateLimitDefinition.md) \| `undefined`\>

## Constructors

### Constructor

> **new RateLimitGenerator**(): `RateLimitGenerator`

#### Returns

`RateLimitGenerator`

## Methods

### generate()

> **generate**(`context`): [`RateLimitDefinition`](RateLimitDefinition.md) \| `undefined`

Generates the policy for the current method, class, or transport.

#### Parameters

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

#### Returns

[`RateLimitDefinition`](RateLimitDefinition.md) \| `undefined`

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)

***

### registerRateLimit()

> `static` **registerRateLimit**(`transport`, `options?`): `void`

Registers the default rate limit policy for one transport.

#### Parameters

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

##### options?

[`RateLimitConfiguration`](../interfaces/RateLimitConfiguration.md)

#### Returns

`void`
