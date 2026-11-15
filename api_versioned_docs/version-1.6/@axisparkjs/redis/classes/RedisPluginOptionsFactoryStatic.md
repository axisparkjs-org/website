# Class: RedisPluginOptionsFactoryStatic

A factory for creating RedisPluginOptions instances.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`RedisPluginOptions`](../interfaces/RedisPluginOptions.md)\>

## Constructors

### Constructor

> **new RedisPluginOptionsFactoryStatic**(): `RedisPluginOptionsFactoryStatic`

#### Returns

`RedisPluginOptionsFactoryStatic`

## Methods

### create()

> **create**(`options`): [`RedisPluginOptions`](../interfaces/RedisPluginOptions.md)

#### Parameters

##### options

`Omit`\<[`RedisPluginOptions`](../interfaces/RedisPluginOptions.md), `"plugin"`\>

#### Returns

[`RedisPluginOptions`](../interfaces/RedisPluginOptions.md)

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
