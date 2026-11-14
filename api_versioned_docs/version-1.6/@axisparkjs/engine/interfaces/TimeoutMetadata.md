# Interface: TimeoutMetadata

Timeout metadata declared on a class or method.

## Extends

- [`MetadataFromClassOrMethod`](../../common/type-aliases/MetadataFromClassOrMethod.md)

## Properties

### disabled?

> `optional` **disabled?**: `boolean`

Whether the timeout is disabled, as defined by `@NoTimeout()`.

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

***

### time?

> `optional` **time?**: `number`

The timeout duration in milliseconds. A negative time disables the timeout, for metadata defined by previous versions of `@NoTimeout()`.
