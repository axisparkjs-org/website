# Interface: TransactionOptions

Options shared by [Transactional](../functions/Transactional.md) and [TransactionManager.runInTransaction](../classes/TransactionManager.md#runintransaction).

## Properties

### dataSource?

> `optional` **dataSource?**: `string`

Name of the configured data source the transaction runs on. It can be
omitted when only one data source is configured.

***

### isolationLevel?

> `optional` **isolationLevel?**: [`TransactionIsolationLevel`](../type-aliases/TransactionIsolationLevel.md)

TypeORM isolation level, for example `READ COMMITTED` or `SERIALIZABLE`.
When omitted, the database default is used. It is ignored when the call
joins a transaction that is already open on the same data source.
