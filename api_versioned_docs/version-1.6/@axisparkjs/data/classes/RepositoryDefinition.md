# Class: RepositoryDefinition

Runtime description of a repository class and its generated implementation.

## Constructors

### Constructor

> **new RepositoryDefinition**(`target`, `entity`, `dataSourceName`, `implementation`): `RepositoryDefinition`

#### Parameters

##### target

[`ClassType`](../../common/type-aliases/ClassType.md)

Decorated repository class used as the dependency injection token.

##### entity

[`ClassType`](../../common/type-aliases/ClassType.md)\<`ObjectLiteral`\>

Entity handled by this repository.

##### dataSourceName

`string`

Name of the configured TypeORM data source containing the entity.

##### implementation

`object`

Proxy-backed repository instance registered with the application container.

#### Returns

`RepositoryDefinition`

## Properties

### dataSourceName

> `readonly` **dataSourceName**: `string`

Name of the configured TypeORM data source containing the entity.

***

### entity

> `readonly` **entity**: [`ClassType`](../../common/type-aliases/ClassType.md)\<`ObjectLiteral`\>

Entity handled by this repository.

***

### implementation

> `readonly` **implementation**: `object`

Proxy-backed repository instance registered with the application container.

***

### target

> `readonly` **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

Decorated repository class used as the dependency injection token.
