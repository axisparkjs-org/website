# Abstract Class: BaseRepository\<T\>

Shared TypeORM-backed repository operations. Extend this class from a class
decorated with `@Repository({ entity })` to add application-specific methods
and declare generated query methods.

Inside a transaction opened with `@Transactional` or `TransactionManager`,
every operation runs on the transaction of the repository's data source.

## Type Parameters

### T

`T` *extends* `ObjectLiteral`

## Constructors

### Constructor

> `protected` **new BaseRepository**\<`T`\>(`entityRepository`, `dataSource`): `BaseRepository`\<`T`\>

#### Parameters

##### entityRepository

`Repository`\<`T`\>

##### dataSource

`DataSource`

Data source that owns the decorated entity.

#### Returns

`BaseRepository`\<`T`\>

## Properties

### dataSource

> `protected` `readonly` **dataSource**: `DataSource`

Data source that owns the decorated entity.

## Accessors

### entityManager

#### Get Signature

> **get** `protected` **entityManager**(): `EntityManager`

Entity manager of the repository's data source. Inside a transaction of
that data source, it is the transactional entity manager.

##### Returns

`EntityManager`

***

### entityRepository

#### Get Signature

> **get** `protected` **entityRepository**(): `Repository`\<`T`\>

TypeORM repository selected for the decorated entity. Inside a transaction
of the repository's data source, it is bound to that transaction.

##### Returns

`Repository`\<`T`\>

## Methods

### count()

> **count**(`options?`): `Promise`\<`number`\>

Counts entities matching TypeORM find options.

#### Parameters

##### options?

`FindManyOptions`\<`T`\>

#### Returns

`Promise`\<`number`\>

***

### exists()

> **exists**(`options?`): `Promise`\<`boolean`\>

Returns whether at least one entity matches TypeORM find options.

#### Parameters

##### options?

`FindManyOptions`\<`T`\>

#### Returns

`Promise`\<`boolean`\>

***

### find()

> **find**(`options?`): `Promise`\<`T`[]\>

Finds entities using TypeORM [FindManyOptions](https://typeorm.io/docs/working-with-entity-manager/find-options/).

#### Parameters

##### options?

`FindManyOptions`\<`T`\>

#### Returns

`Promise`\<`T`[]\>

***

### remove()

#### Call Signature

> **remove**(`entity`, `options?`): `Promise`\<`T`\>

Removes one entity and resolves with the removed entity.

##### Parameters

###### entity

`T`

###### options?

`RemoveOptions`

##### Returns

`Promise`\<`T`\>

#### Call Signature

> **remove**(`entities`, `options?`): `Promise`\<`T`[]\>

Removes multiple entities and resolves with the removed entities.

##### Parameters

###### entities

`T`[]

###### options?

`RemoveOptions`

##### Returns

`Promise`\<`T`[]\>

***

### save()

#### Call Signature

> **save**(`entity`): `Promise`\<`T`\>

Saves one entity using the configured TypeORM repository.

##### Parameters

###### entity

`T`

##### Returns

`Promise`\<`T`\>

#### Call Signature

> **save**(`entities`): `Promise`\<`T`[]\>

Saves multiple entities using the configured TypeORM repository.

##### Parameters

###### entities

`T`[]

##### Returns

`Promise`\<`T`[]\>
