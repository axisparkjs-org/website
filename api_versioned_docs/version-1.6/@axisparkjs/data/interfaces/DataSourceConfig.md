# Interface: DataSourceConfig

A named TypeORM connection managed by [DataPlugin](../classes/DataPlugin.md).

## Properties

### name

> **name**: `string`

Name used to identify and inject this data source.

***

### options

> **options**: `DataSourceOptions`

TypeORM connection and driver options passed to `new DataSource(options)`.
