# Class: QueryEngine

Dispatches derived repository methods to the database-specific query engine.
Currently recognizes the SQL drivers listed in the DataPlugin guide and
routes MongoDB to [MongoQueryEngine](MongoQueryEngine.md).

## Implements

- [`Executable`](../../common/interfaces/Executable.md)

## Constructors

### Constructor

> **new QueryEngine**(`sqlQueryEngine`, `mongoQueryEngine`): `QueryEngine`

#### Parameters

##### sqlQueryEngine

[`SQLQueryEngine`](SQLQueryEngine.md)

##### mongoQueryEngine

[`MongoQueryEngine`](MongoQueryEngine.md)

#### Returns

`QueryEngine`

## Methods

### execute()

> **execute**\<`T`\>(`object`, `property`, `classArgs`, `methodArgs`): `Promise`\<`unknown`\>

Executes a derived repository method with the repository and its owning data source.

#### Type Parameters

##### T

`T` *extends* `ObjectLiteral`

#### Parameters

##### object

[`BaseRepository`](BaseRepository.md)\<`T`\>

##### property

`string`

##### classArgs

`unknown`[]

##### methodArgs

`unknown`[]

#### Returns

`Promise`\<`unknown`\>

#### Implementation of

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)
