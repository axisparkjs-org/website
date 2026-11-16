# Class: SecurityPluginOptionsFactoryStatic

Creates a complete security plugin configuration from application options.
The factory supplies the [SecurityPlugin](SecurityPlugin.md) class and defaults the
authenticator strategy to `all`; explicitly providing `authenticator`
replaces that default configuration.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`SecurityPluginOptions`](../interfaces/SecurityPluginOptions.md)\>

## Constructors

### Constructor

> **new SecurityPluginOptionsFactoryStatic**(): `SecurityPluginOptionsFactoryStatic`

#### Returns

`SecurityPluginOptionsFactoryStatic`

## Methods

### create()

> **create**(`options`): [`SecurityPluginOptions`](../interfaces/SecurityPluginOptions.md)

#### Parameters

##### options

`Omit`\<[`SecurityPluginOptions`](../interfaces/SecurityPluginOptions.md), `"plugin"`\>

Plugin configuration excluding the plugin class itself.

#### Returns

[`SecurityPluginOptions`](../interfaces/SecurityPluginOptions.md)

Options ready to pass to `app.use()`.

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
