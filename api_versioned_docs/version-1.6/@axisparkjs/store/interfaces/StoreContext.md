# Interface: StoreContext

What a provider receives to create a store. The `AxiSparkContext` satisfies it, so plugins pass their context as it is.

## Properties

### container

> `readonly` **container**: [`Container`](../../di/classes/Container.md)

The container of the application, used to resolve the connections of the backend.

***

### logger

> `readonly` **logger**: [`Logger`](../../logger/classes/Logger.md)

The logger of the application.
