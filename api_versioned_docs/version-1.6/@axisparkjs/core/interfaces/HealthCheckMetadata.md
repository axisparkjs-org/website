# Interface: HealthCheckMetadata

An interface representing the metadata stored by the `@HealthCheck` decorator.

## Extends

- [`MetadataFromClass`](../../common/interfaces/MetadataFromClass.md)
- `Required`\<[`HealthCheckOptions`](HealthCheckOptions.md)\>

## Properties

### critical

> **critical**: `boolean`

Whether a failure of the check makes the whole application `Unhealthy`. Defaults to `true`.

#### Inherited from

[`HealthCheckOptions`](HealthCheckOptions.md).[`critical`](HealthCheckOptions.md#critical)

***

### name

> **name**: `string`

The component name of the check in the health response. Defaults to the class name of the indicator.

#### Inherited from

[`HealthCheckOptions`](HealthCheckOptions.md).[`name`](HealthCheckOptions.md#name)

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`MetadataFromClass`](../../common/interfaces/MetadataFromClass.md).[`target`](../../common/interfaces/MetadataFromClass.md#target)

***

### timeout

> **timeout**: `number`

The maximum time in milliseconds for the check. If it is exceeded, the check is reported as `Unhealthy`. Defaults to 5000.

#### Inherited from

[`HealthCheckOptions`](HealthCheckOptions.md).[`timeout`](HealthCheckOptions.md#timeout)
