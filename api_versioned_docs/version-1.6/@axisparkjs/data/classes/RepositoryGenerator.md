# Class: RepositoryGenerator

Builds generated repository implementations for all classes decorated with `@Repository`.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`RepositoryDefinition`](RepositoryDefinition.md)[]\>

## Constructors

### Constructor

> **new RepositoryGenerator**(`dataSourceConnectionManager`, `queryEngine`): `RepositoryGenerator`

#### Parameters

##### dataSourceConnectionManager

[`DataSourceConnectionManager`](DataSourceConnectionManager.md)

##### queryEngine

[`QueryEngine`](QueryEngine.md)

#### Returns

`RepositoryGenerator`

## Methods

### generate()

> **generate**(): `Promise`\<[`RepositoryDefinition`](RepositoryDefinition.md)[]\>

Returns repository definitions backed by the matching TypeORM data sources.

#### Returns

`Promise`\<[`RepositoryDefinition`](RepositoryDefinition.md)[]\>

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)
