# Class: DataSourceConnectionManager

A manager for creating and managing connections to TypeORM data sources.

## Constructors

### Constructor

> **new DataSourceConnectionManager**(`dataPluginOptions`, `logger`): `DataSourceConnectionManager`

#### Parameters

##### dataPluginOptions

[`DataPluginOptions`](../interfaces/DataPluginOptions.md)

##### logger

`Logger`

#### Returns

`DataSourceConnectionManager`

## Methods

### createConnections()

> **createConnections**(): `Promise`\<`void`\>

Creates and initializes every configured TypeORM data source.

#### Returns

`Promise`\<`void`\>

***

### destroyConnections()

> **destroyConnections**(): `Promise`\<`void`\>

Closes and removes all initialized data sources.

#### Returns

`Promise`\<`void`\>

***

### getAllConnections()

> **getAllConnections**(): `Map`\<`string`, `DataSource`\>

Returns a copy of the current name-to-data-source map.

#### Returns

`Map`\<`string`, `DataSource`\>

***

### getConnection()

> **getConnection**(`name`): `DataSource` \| `undefined`

Returns a configured data source by its case-sensitive configuration name.

#### Parameters

##### name

`string`

#### Returns

`DataSource` \| `undefined`
