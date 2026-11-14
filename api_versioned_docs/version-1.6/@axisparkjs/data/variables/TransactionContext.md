# Variable: TransactionContext

> `const` **TransactionContext**: `object`

Access to the transactions that are open in the current async context.
Repositories and query engines use it to join the active transaction of their data source.

## Type Declaration

### getEntityManager

> **getEntityManager**: (`dataSource`) => `EntityManager` \| `undefined`

Returns the transactional entity manager of the data source, if a transaction is open on it.

#### Parameters

##### dataSource

`DataSource`

#### Returns

`EntityManager` \| `undefined`

### isActive()

> **isActive**(`dataSource`): `boolean`

Returns whether a transaction is open on the data source in the current async context.

#### Parameters

##### dataSource

`DataSource`

#### Returns

`boolean`

### resolveRepository()

> **resolveRepository**\<`T`, `R`\>(`repository`, `dataSource`): `R`

Returns the repository bound to the active transaction of the data source,
or the given repository when there is no transaction open on it.

#### Type Parameters

##### T

`T` *extends* `ObjectLiteral`

##### R

`R` *extends* `Repository`\<`T`\>

#### Parameters

##### repository

`R`

##### dataSource

`DataSource`

#### Returns

`R`

### run()

> **run**\<`T`\>(`dataSource`, `manager`, `callback`): `T`

Runs the callback with the entity manager registered as the active transaction of the data source.

#### Type Parameters

##### T

`T`

#### Parameters

##### dataSource

`DataSource`

##### manager

`EntityManager`

##### callback

() => `T`

#### Returns

`T`
