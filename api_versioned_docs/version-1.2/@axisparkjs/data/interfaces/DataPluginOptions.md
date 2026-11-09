# Interface: DataPluginOptions

Configuration passed to [DataPlugin](../classes/DataPlugin.md) when registering it with the application.

## Extends

- [`PluginOptions`](../../core/interfaces/PluginOptions.md)

## Properties

### dataSources

> **dataSources**: [`DataSourceConfig`](DataSourceConfig.md)[]

Named TypeORM data sources to initialize during plugin registration.

Every entity used by a `@Repository` repository must be included in one of
these data sources' `options.entities` arrays. A repository is associated
with the first configured source whose metadata contains that entity.

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)
