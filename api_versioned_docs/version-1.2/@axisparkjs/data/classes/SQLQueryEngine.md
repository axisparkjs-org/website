# Class: SQLQueryEngine

Executes derived repository methods by building TypeORM SQL `SelectQueryBuilder` queries.

## Constructors

### Constructor

> **new SQLQueryEngine**(`queryMethodParser`): `SQLQueryEngine`

#### Parameters

##### queryMethodParser

[`QueryMethodParser`](QueryMethodParser.md)

#### Returns

`SQLQueryEngine`

## Methods

### execute()

> **execute**\<`T`\>(`_object`, `property`, `classArgs`, `methodArgs`): `Promise`\<`unknown`\>

Parses and executes a derived method against a relational TypeORM repository.

#### Type Parameters

##### T

`T` *extends* `ObjectLiteral`

#### Parameters

##### \_object

[`BaseRepository`](BaseRepository.md)\<`T`\>

Repository proxy target supplied by the executable interface.

##### property

`string`

Derived method name, for example `findByStatus`.

##### classArgs

`unknown`[]

Repository and owning data source constructor arguments.

##### methodArgs

`unknown`[]

Predicate values, optionally followed by a `PageRequest`.

#### Returns

`Promise`\<`unknown`\>
