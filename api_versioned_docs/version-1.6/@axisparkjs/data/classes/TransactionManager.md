# Class: TransactionManager

Runs code inside a database transaction. Every repository call made inside the
callback, including derived query methods, joins the transaction of its data
source automatically.

- Nested calls on the same data source join the transaction that is already open.
- If the callback throws, the transaction is rolled back and the error is rethrown.
  Otherwise it is committed when the callback resolves.
- A transaction covers one data source only. Repositories of other data sources
  used inside the callback are not part of it.
- MongoDB data sources run the callback without a transaction and log a warning.

## Example

```ts
constructor(private readonly transactionManager: TransactionManager) {}

placeOrder(order: Order) {
    return this.transactionManager.runInTransaction(async () => {
        await this.stock.reserve(order.items);
        return this.orders.save(order);
    });
}
```

## Constructors

### Constructor

> **new TransactionManager**(`dataSourceConnectionManager`, `logger`): `TransactionManager`

#### Parameters

##### dataSourceConnectionManager

[`DataSourceConnectionManager`](DataSourceConnectionManager.md)

##### logger

`Logger`

#### Returns

`TransactionManager`

## Methods

### runInTransaction()

> **runInTransaction**\<`T`\>(`callback`, `options?`): `Promise`\<`T`\>

Runs the callback inside a transaction of the selected data source.

#### Type Parameters

##### T

`T`

#### Parameters

##### callback

(`entityManager`) => `T` \| `Promise`\<`T`\>

Code to run. It receives the transactional `EntityManager`.

##### options?

[`TransactionOptions`](../interfaces/TransactionOptions.md) = `{}`

Data source and isolation level of the transaction.

#### Returns

`Promise`\<`T`\>

The value the callback resolves with, once the transaction is committed.

***

### clearActive()

> `static` **clearActive**(`transactionManager`): `void`

Clears the active transaction manager, if it is the given one.

#### Parameters

##### transactionManager

`TransactionManager`

#### Returns

`void`

***

### getActive()

> `static` **getActive**(): `TransactionManager`

Returns the transaction manager of the running application. It is used by
[Transactional](../functions/Transactional.md) and is available once the `DataPlugin` is registered.

#### Returns

`TransactionManager`

***

### setActive()

> `static` **setActive**(`transactionManager`): `void`

Sets the transaction manager returned by [TransactionManager.getActive](#getactive).

#### Parameters

##### transactionManager

`TransactionManager`

#### Returns

`void`
