# Class: OpenApiDocumentGenerator

A generator for creating OpenAPI document definitions based on route definitions and metadata.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`OpenApiDocumentDefinition`](OpenApiDocumentDefinition.md)\>

## Constructors

### Constructor

> **new OpenApiDocumentGenerator**(`options`, `parameterGenerator`): `OpenApiDocumentGenerator`

#### Parameters

##### options

[`OpenApiPluginOptions`](../interfaces/OpenApiPluginOptions.md)

##### parameterGenerator

[`ParameterGenerator`](../../engine/classes/ParameterGenerator.md)

#### Returns

`OpenApiDocumentGenerator`

## Methods

### generate()

> **generate**(`routes`): [`OpenApiDocumentDefinition`](OpenApiDocumentDefinition.md)

Generates an OpenAPI document definition based on the provided route definitions.

#### Parameters

##### routes

readonly [`RouteDefinition`](../../http/classes/RouteDefinition.md)[]

An array of route definitions for which to generate OpenAPI documentation.

#### Returns

[`OpenApiDocumentDefinition`](OpenApiDocumentDefinition.md)

An `OpenApiDocumentDefinition` instance representing the generated OpenAPI document.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)

***

### extractTypeFromMetadata()

> `static` **extractTypeFromMetadata**(`target`, `propertyKey`, `parameterIndex?`): `"string"` \| `"number"` \| `"boolean"` \| [`ClassType`](../../common/type-aliases/ClassType.md) \| `"array"`

#### Parameters

##### target

[`ClassType`](../../common/type-aliases/ClassType.md)

##### propertyKey

`string` \| `symbol`

##### parameterIndex?

`number`

#### Returns

`"string"` \| `"number"` \| `"boolean"` \| [`ClassType`](../../common/type-aliases/ClassType.md) \| `"array"`
