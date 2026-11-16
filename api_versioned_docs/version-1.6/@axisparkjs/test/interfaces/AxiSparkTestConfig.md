# Interface: AxiSparkTestConfig

Configuration options for creating a test instance of AxiSparkCore.

## Properties

### app?

> `optional` **app?**: [`AxiSparkCore`](../../core/classes/AxiSparkCore.md)\<`any`\>

An optional instance of AxiSparkCore to be used as the application context.

***

### providers?

> `optional` **providers?**: ([`Provider`](../../di/type-aliases/Provider.md) \| [`ClassType`](../../common/type-aliases/ClassType.md))[]

An array of providers or class types to be used in the test context. These can be mock implementations or real implementations of your application's dependencies.

***

### settings?

> `optional` **settings?**: `object`

An optional settings object that replaces the application settings, without reading the environment or the `.env` files. It is available in `app.settings` and by injection. When it is not provided, the test instance uses the settings already loaded by `app`.
