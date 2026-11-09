# Class: HttpPluginOptionsFactoryStatic

A factory class for creating default Fastify HTTP plugin options. This class implements the Factory interface and provides a method to create an instance of FastifyHttpPluginOptions with default values, allowing for optional overrides.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`FastifyHttpPluginOptions`](../interfaces/FastifyHttpPluginOptions.md)\>

## Constructors

### Constructor

> **new HttpPluginOptionsFactoryStatic**(): `HttpPluginOptionsFactoryStatic`

#### Returns

`HttpPluginOptionsFactoryStatic`

## Methods

### create()

> **create**(`options?`): [`FastifyHttpPluginOptions`](../interfaces/FastifyHttpPluginOptions.md)

#### Parameters

##### options?

`Partial`\<`Omit`\<[`FastifyHttpPluginOptions`](../interfaces/FastifyHttpPluginOptions.md), `"plugin"`\>\>

#### Returns

[`FastifyHttpPluginOptions`](../interfaces/FastifyHttpPluginOptions.md)

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
