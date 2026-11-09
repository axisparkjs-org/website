# Class: DataPluginOptionsFactoryStatic

A factory for creating DataPluginOptions instances.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`DataPluginOptions`](../interfaces/DataPluginOptions.md)\>

## Constructors

### Constructor

> **new DataPluginOptionsFactoryStatic**(): `DataPluginOptionsFactoryStatic`

#### Returns

`DataPluginOptionsFactoryStatic`

## Methods

### create()

> **create**(`options`): [`DataPluginOptions`](../interfaces/DataPluginOptions.md)

Adds `DataPlugin` as the plugin class to the supplied configuration.

#### Parameters

##### options

`Omit`\<[`DataPluginOptions`](../interfaces/DataPluginOptions.md), `"plugin"`\>

Data plugin settings, excluding the plugin class.

#### Returns

[`DataPluginOptions`](../interfaces/DataPluginOptions.md)

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
