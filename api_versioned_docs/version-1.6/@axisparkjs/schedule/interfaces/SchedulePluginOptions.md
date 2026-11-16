# Interface: SchedulePluginOptions

Interface representing the options for configuring the schedule plugin.

## Extends

- [`PluginOptions`](../../core/interfaces/PluginOptions.md)

## Properties

### lockStore?

> `optional` **lockStore?**: `StoreFactory`\<`"lock"`\>

The provider of the store of the locks of the exclusive jobs, called when the plugin starts. Defaults to `MemoryStore()`, which only
coordinates the jobs of one process. Use a shared provider, such as `RedisStore('NAME')` from `@axisparkjs/redis`, so an exclusive job
runs on only one instance of the application.

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)

***

### shutdownTimeout?

> `optional` **shutdownTimeout?**: `number`

The maximum time to wait for the running jobs when the application stops, in milliseconds. Defaults to `DEFAULT_SHUTDOWN_TIMEOUT`
(25 seconds). `0` does not wait. The jobs that are still running when it ends are logged as a warning.
