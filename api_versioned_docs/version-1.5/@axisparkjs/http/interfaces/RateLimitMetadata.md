# Interface: RateLimitMetadata

A type representing metadata that can come from a class or method.

## Extends

- [`MetadataFromClassOrMethod`](../../common/type-aliases/MetadataFromClassOrMethod.md)

## Properties

### disabled?

> `optional` **disabled?**: `boolean`

***

### options?

> `optional` **options?**: [`RateLimitConfiguration`](../../engine/interfaces/RateLimitConfiguration.md)

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
