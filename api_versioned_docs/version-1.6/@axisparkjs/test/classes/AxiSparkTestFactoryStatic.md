# Class: AxiSparkTestFactoryStatic

A static factory for creating test instances of AxiSparkCore.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`AxiSparkCore`](../../core/classes/AxiSparkCore.md)\>

## Constructors

### Constructor

> **new AxiSparkTestFactoryStatic**(): `AxiSparkTestFactoryStatic`

#### Returns

`AxiSparkTestFactoryStatic`

## Methods

### create()

> **create**\<`TSettings`\>(`config?`): [`AxiSparkCore`](../../core/classes/AxiSparkCore.md)\<`TSettings`\>

Creates a new instance of AxiSparkCore for testing purposes.

#### Type Parameters

##### TSettings

`TSettings` *extends* `object` = `object`

#### Parameters

##### config?

[`AxiSparkTestConfig`](../interfaces/AxiSparkTestConfig.md) & `object`

Optional configuration for the test instance, including app settings and providers.

#### Returns

[`AxiSparkCore`](../../core/classes/AxiSparkCore.md)\<`TSettings`\>

A new instance of AxiSparkCore configured for testing.

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
