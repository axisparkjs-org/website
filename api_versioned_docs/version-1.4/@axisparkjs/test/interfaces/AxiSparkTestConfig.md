# Interface: AxiSparkTestConfig

Configuration options for creating a test instance of AxiSparkCore.

## Properties

### app?

> `optional` **app?**: [`AxiSparkCore`](../../core/classes/AxiSparkCore.md)

An optional instance of AxiSparkCore to be used as the application context.

***

### providers?

> `optional` **providers?**: ([`Provider`](../../di/type-aliases/Provider.md) \| [`ClassType`](../../common/type-aliases/ClassType.md))[]

An array of providers or class types to be used in the test context. These can be mock implementations or real implementations of your application's dependencies.
