# Class: KafkaPluginOptionsFactoryStatic

A factory for creating KafkaPluginOptions instances.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`KafkaPluginOptions`](../interfaces/KafkaPluginOptions.md)\>

## Constructors

### Constructor

> **new KafkaPluginOptionsFactoryStatic**(): `KafkaPluginOptionsFactoryStatic`

#### Returns

`KafkaPluginOptionsFactoryStatic`

## Methods

### create()

> **create**(`options`): [`KafkaPluginOptions`](../interfaces/KafkaPluginOptions.md)

#### Parameters

##### options

`Omit`\<[`KafkaPluginOptions`](../interfaces/KafkaPluginOptions.md), `"plugin"`\>

#### Returns

[`KafkaPluginOptions`](../interfaces/KafkaPluginOptions.md)

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
