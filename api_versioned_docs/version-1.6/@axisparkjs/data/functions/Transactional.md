# Function: Transactional()

> **Transactional**(`options?`): `MethodDecorator`

Runs the decorated method inside a database transaction, through
[TransactionManager.runInTransaction](../classes/TransactionManager.md#runintransaction). Every repository call made by the
method, including derived query methods, joins the transaction.

The decorated method always returns a `Promise`. If it throws or rejects, the
transaction is rolled back and the error is rethrown; otherwise the transaction
is committed when the method resolves. A transactional method called from
another one on the same data source joins the outer transaction.

It can be used in any class, whether it is resolved through the dependency
injection container or not, once the `DataPlugin` is registered.

## Parameters

### options?

[`TransactionOptions`](../interfaces/TransactionOptions.md) = `{}`

Data source and isolation level of the transaction.

## Returns

`MethodDecorator`

A method decorator.

## Example

```ts
@Injectable()
export class OrderService {
    constructor(
        private readonly orders: OrderRepository,
        private readonly stock: StockRepository
    ) {}

    @Transactional()
    async placeOrder(order: Order): Promise<Order> {
        await this.stock.reserve(order.items);
        return this.orders.save(order);
    }
}
```
