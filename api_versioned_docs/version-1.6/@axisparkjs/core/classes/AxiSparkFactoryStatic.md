# Class: AxiSparkFactoryStatic

Static factory class for creating instances of AxiSparkCore. This class implements the Factory interface and provides a method to create AxiSparkCore instances with an optional configuration.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`AxiSparkCore`](AxiSparkCore.md)\>

## Constructors

### Constructor

> **new AxiSparkFactoryStatic**(): `AxiSparkFactoryStatic`

#### Returns

`AxiSparkFactoryStatic`

## Methods

### create()

> **create**\<`TSettings`\>(`config?`): [`AxiSparkCore`](AxiSparkCore.md)\<`TSettings`\>

Creates a new instance of AxiSparkCore with the provided configuration. If no configuration is provided, a default configuration will be used. The method sets up the necessary context and returns a new instance of AxiSparkCore.

#### Type Parameters

##### TSettings

`TSettings` *extends* `object` = `object`

#### Parameters

##### config?

[`AxiSparkConfig`](../interfaces/AxiSparkConfig.md)\<`TSettings`\>

Optional configuration object for customizing the AxiSparkCore instance. If not provided, default settings will be applied.
The type of `app.settings` is inferred from the return type of the `load` function of the `settings` option. When the settings are not valid, an `InvalidSettingsError` listing every problem is thrown.

#### Returns

[`AxiSparkCore`](AxiSparkCore.md)\<`TSettings`\>

A new instance of AxiSparkCore configured with the provided settings.

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
