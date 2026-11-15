# Class: McpPluginOptionsFactoryStatic

A factory class for creating default MCP plugin options. It provides a method to create an instance of McpPluginOptions with default values, allowing for optional overrides.

## Implements

- [`Factory`](../../common/interfaces/Factory.md)\<[`McpPluginOptions`](../interfaces/McpPluginOptions.md)\>

## Constructors

### Constructor

> **new McpPluginOptionsFactoryStatic**(): `McpPluginOptionsFactoryStatic`

#### Returns

`McpPluginOptionsFactoryStatic`

## Methods

### create()

> **create**(`options?`): [`McpPluginOptions`](../interfaces/McpPluginOptions.md)

#### Parameters

##### options?

`Partial`\<`Omit`\<[`McpPluginOptions`](../interfaces/McpPluginOptions.md), `"plugin"`\>\>

#### Returns

[`McpPluginOptions`](../interfaces/McpPluginOptions.md)

#### Implementation of

[`Factory`](../../common/interfaces/Factory.md).[`create`](../../common/interfaces/Factory.md#create)
