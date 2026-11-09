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

> **create**(`config?`): [`AxiSparkCore`](AxiSparkCore.md)

Creates a new instance of AxiSparkCore with the provided configuration. If no configuration is provided, a default configuration will be used. The method sets up the necessary context and returns a new instance of AxiSparkCore.

#### Parameters

##### config?

[`AxiSparkConfig`](../interfaces/AxiSparkConfig.md)

Optional configuration object for customizing the AxiSparkCore instance. If not provided, default settings will be applied.

#### Returns

[`AxiSparkCore`](AxiSparkCore.md)

A new instance of AxiSparkCore configured with the provided settings.

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
