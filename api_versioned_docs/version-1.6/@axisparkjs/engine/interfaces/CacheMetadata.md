# Interface: CacheMetadata

Cache metadata declared on a class or method with `@Cache()` or `@NoCache()`.

## Extends

- [`MetadataFromClassOrMethod`](../../common/type-aliases/MetadataFromClassOrMethod.md)

## Properties

### disabled?

> `optional` **disabled?**: `boolean`

Whether the cache is disabled, as defined by `@NoCache()`.

***

### options?

> `optional` **options?**: [`CacheConfiguration`](CacheConfiguration.md)

The options of `@Cache()`.

***

### propertyKey?

> `optional` **propertyKey?**: `string` \| `symbol`

#### Inherited from

[`StepMethodMetadataBase`](StepMethodMetadataBase.md).[`propertyKey`](StepMethodMetadataBase.md#propertykey)

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`StepTargetMetadata`](StepTargetMetadata.md).[`target`](StepTargetMetadata.md#target)
