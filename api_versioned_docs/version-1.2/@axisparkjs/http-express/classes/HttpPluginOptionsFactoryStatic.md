# Class: HttpPluginOptionsFactoryStatic

A factory class for creating default Express HTTP plugin options. This class implements the Factory interface and provides a method to create an instance of ExpressHttpPluginOptions with default values, allowing for optional overrides.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`ExpressHttpPluginOptions`](../interfaces/ExpressHttpPluginOptions.md)\>

## Constructors

### Constructor

> **new HttpPluginOptionsFactoryStatic**(): `HttpPluginOptionsFactoryStatic`

#### Returns

`HttpPluginOptionsFactoryStatic`

## Methods

### create()

> **create**(`options?`): [`ExpressHttpPluginOptions`](../interfaces/ExpressHttpPluginOptions.md)

#### Parameters

##### options?

`Partial`\<`Omit`\<[`ExpressHttpPluginOptions`](../interfaces/ExpressHttpPluginOptions.md), `"plugin"` \| `"adapter"`\>\>

#### Returns

[`ExpressHttpPluginOptions`](../interfaces/ExpressHttpPluginOptions.md)

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
