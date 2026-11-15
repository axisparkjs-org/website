# Class: SchedulePluginOptionsFactoryStatic

A factory for creating SchedulePluginOptions instances.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`SchedulePluginOptions`](../interfaces/SchedulePluginOptions.md)\>

## Constructors

### Constructor

> **new SchedulePluginOptionsFactoryStatic**(): `SchedulePluginOptionsFactoryStatic`

#### Returns

`SchedulePluginOptionsFactoryStatic`

## Methods

### create()

> **create**(`options?`): [`SchedulePluginOptions`](../interfaces/SchedulePluginOptions.md)

#### Parameters

##### options?

`Omit`\<[`SchedulePluginOptions`](../interfaces/SchedulePluginOptions.md), `"plugin"`\> = `{}`

#### Returns

[`SchedulePluginOptions`](../interfaces/SchedulePluginOptions.md)

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
