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

### deleteById()

> **deleteById**(`id`): `Promise`\<`number`\>

Deletes the entity with the primary key and resolves with the number of deleted entities, `0` when it does not exist.

#### Parameters

##### id

`unknown`

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

### existsById()

> **existsById**(`id`): `Promise`\<`boolean`\>

Returns whether an entity with the primary key exists.

#### Parameters

##### id

`unknown`

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

### findById()

> **findById**(`id`): `Promise`\<`T` \| `null`\>

Finds the entity with a primary key, or resolves with `null` when it does not exist. With a composite primary key,
give an object with every primary column. In MongoDB, a string with the hexadecimal form of an `ObjectId` is
converted to an `ObjectId`.

#### Parameters

##### id

`unknown`

#### Returns

`Promise`\<`T` \| `null`\>

***

### findByIds()

> **findByIds**(`ids`): `Promise`\<`T`[]\>

Finds the entities with any of the primary keys. Missing keys are ignored, and the order of the result is not guaranteed.

#### Parameters

##### ids

`unknown`[]

#### Returns

`Promise`\<`T`[]\>

***

### findPage()

> **findPage**(`options`, `pageRequest`): `Promise`\<[`Page`](../interfaces/Page.md)\<`T`\>\>

Finds one page of the entities matching TypeORM find options, with the total of every page. The `skip` and `take`
of the options are replaced by the page request.

#### Parameters

##### options

`FindManyOptions`\<`T`\> \| `undefined`

##### pageRequest

[`PageRequest`](../interfaces/PageRequest.md)

#### Returns

`Promise`\<[`Page`](../interfaces/Page.md)\<`T`\>\>

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
