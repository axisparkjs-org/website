# Interface: CacheVaryMetadata

The request headers added to the cache key of a controller or route by `@CacheVary()`.

## Extends

- [`MetadataFromClassOrMethod`](../../common/type-aliases/MetadataFromClassOrMethod.md)

## Properties

### headers

> **headers**: `string`[]

The names of the headers, in lower case.

***

### propertyKey?

> `optional` **propertyKey?**: `string` \| `symbol`

#### Inherited from

[`HttpCodeMetadata`](HttpCodeMetadata.md).[`propertyKey`](HttpCodeMetadata.md#propertykey)

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`ControllerMetadata`](ControllerMetadata.md).[`target`](ControllerMetadata.md#target)
