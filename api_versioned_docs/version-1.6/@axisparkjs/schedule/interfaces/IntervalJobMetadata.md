# Interface: IntervalJobMetadata

An interface representing metadata that comes from a method.

## Extends

- [`JobMetadataBase`](JobMetadataBase.md)

## Properties

### disabled

> **disabled**: `boolean`

#### Inherited from

[`JobMetadataBase`](JobMetadataBase.md).[`disabled`](JobMetadataBase.md#disabled)

***

### exclusive?

> `optional` **exclusive?**: `boolean` \| [`JobExclusiveOptions`](JobExclusiveOptions.md)

Whether the job runs on only one instance of the application, using the lock store of the `SchedulePlugin`.

#### Inherited from

[`JobMetadataBase`](JobMetadataBase.md).[`exclusive`](JobMetadataBase.md#exclusive)

***

### name

> **name**: `string`

#### Inherited from

[`JobMetadataBase`](JobMetadataBase.md).[`name`](JobMetadataBase.md#name)

***

### propertyKey

> **propertyKey**: `string` \| `symbol`

#### Inherited from

[`JobMetadataBase`](JobMetadataBase.md).[`propertyKey`](JobMetadataBase.md#propertykey)

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`JobMetadataBase`](JobMetadataBase.md).[`target`](JobMetadataBase.md#target)

***

### type

> **type**: [`Interval`](../enumerations/JobType.md#interval)

#### Overrides

[`JobMetadataBase`](JobMetadataBase.md).[`type`](JobMetadataBase.md#type)

***

### value

> **value**: `number`

#### Overrides

[`JobMetadataBase`](JobMetadataBase.md).[`value`](JobMetadataBase.md#value)
