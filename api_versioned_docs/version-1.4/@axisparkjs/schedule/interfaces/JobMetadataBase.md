# Interface: JobMetadataBase

An interface representing metadata that comes from a method.

## Extends

- [`MetadataFromMethod`](../../common/interfaces/MetadataFromMethod.md)

## Extended by

- [`CronJobMetadata`](CronJobMetadata.md)
- [`IntervalJobMetadata`](IntervalJobMetadata.md)
- [`DateJobMetadata`](DateJobMetadata.md)
- [`TimeoutJobMetadata`](TimeoutJobMetadata.md)

## Properties

### disabled

> **disabled**: `boolean`

***

### name

> **name**: `string`

***

### propertyKey

> **propertyKey**: `string` \| `symbol`

#### Inherited from

[`MetadataFromMethod`](../../common/interfaces/MetadataFromMethod.md).[`propertyKey`](../../common/interfaces/MetadataFromMethod.md#propertykey)

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`MetadataFromMethod`](../../common/interfaces/MetadataFromMethod.md).[`target`](../../common/interfaces/MetadataFromMethod.md#target)

***

### type

> **type**: [`JobType`](../enumerations/JobType.md)

***

### value

> **value**: `any`
