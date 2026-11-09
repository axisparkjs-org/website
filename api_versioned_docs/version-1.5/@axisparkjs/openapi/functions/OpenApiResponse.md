# Function: OpenApiResponse()

> **OpenApiResponse**(`metadata`): `MethodDecorator`

Decorator for adding OpenAPI response metadata to class methods.

## Parameters

### metadata

`number` \| `"default"` \| [`DistributiveOmit`](../type-aliases/DistributiveOmit.md)\<[`OpenApiResponseMetadata`](../type-aliases/OpenApiResponseMetadata.md), `"propertyKey"` \| `"target"`\>

The metadata for the OpenAPI response.

## Returns

`MethodDecorator`

A method decorator.
