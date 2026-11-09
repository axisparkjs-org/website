# Class: MongoQueryEngine

Executes derived repository methods as MongoDB filters using TypeORM's `MongoRepository`.

## Constructors

### Constructor

> **new MongoQueryEngine**(`queryMethodParser`): `MongoQueryEngine`

#### Parameters

##### queryMethodParser

[`QueryMethodParser`](QueryMethodParser.md)

#### Returns

`MongoQueryEngine`

## Methods

### execute()

> **execute**\<`T`\>(`_object`, `property`, `classArgs`, `methodArgs`): `Promise`\<`unknown`\>

Parses and executes a derived method against a MongoDB repository.

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

Mongo repository and owning data source constructor arguments. Inside a transaction
of that data source, the query runs on the transactional repository.

##### methodArgs

`unknown`[]

Predicate values, optionally followed by a `PageRequest`.

#### Returns

`Promise`\<`unknown`\>
