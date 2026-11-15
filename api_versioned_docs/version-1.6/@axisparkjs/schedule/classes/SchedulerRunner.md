# Class: SchedulerRunner

A class for running scheduled jobs.

## Constructors

### Constructor

> **new SchedulerRunner**(`logger`): `SchedulerRunner`

#### Parameters

##### logger

[`Logger`](../../logger/classes/Logger.md)

#### Returns

`SchedulerRunner`

## Methods

### isExecuting()

> **isExecuting**(`job`): `boolean`

Checks if an execution of a job is in progress.

#### Parameters

##### job

[`JobDefinition`](JobDefinition.md)

The job to check.

#### Returns

`boolean`

True if the job is executing, false otherwise.

***

### isRunning()

> **isRunning**(`job`): `boolean`

Checks if a job is running, this is, if it is scheduled. Use `isExecuting()` to check if an execution is in progress.

#### Parameters

##### job

[`JobDefinition`](JobDefinition.md)

The job to check.

#### Returns

`boolean`

True if the job is scheduled, false otherwise.

***

### start()

> **start**(`job`): `void`

Starts a job.

#### Parameters

##### job

[`JobDefinition`](JobDefinition.md)

The job to start.

#### Returns

`void`

***

### startAll()

> **startAll**(`jobs`): `void`

Starts all jobs.

#### Parameters

##### jobs

[`JobDefinition`](JobDefinition.md)[]

The jobs to start.

#### Returns

`void`

***

### stop()

> **stop**(`job`, `options?`): `Promise`\<`void`\>

Stops a job: no new execution starts, the signal of its running execution is aborted, and it waits for that execution.

#### Parameters

##### job

[`JobDefinition`](JobDefinition.md)

The job to stop.

##### options?

[`SchedulerStopOptions`](../interfaces/SchedulerStopOptions.md)

The options to stop the job, such as the maximum time to wait for its running execution.

#### Returns

`Promise`\<`void`\>

A promise resolving when the running execution ends or the timeout ends.

***

### stopAll()

> **stopAll**(`jobs`, `options?`): `Promise`\<`void`\>

Stops scheduling the jobs and waits for their running executions, up to the timeout.
The timers are cancelled and the jobs disabled first, so no new execution starts, and the signal of every running execution is
aborted. When the timeout ends first, a warning with the names of the jobs that are still running is logged, and the heartbeat of
their locks is stopped, so the locks of the `no-overlap` jobs expire with their ttl once the process exits.

#### Parameters

##### jobs

[`JobDefinition`](JobDefinition.md)[]

The jobs to stop.

##### options?

[`SchedulerStopOptions`](../interfaces/SchedulerStopOptions.md) = `{}`

The options to stop the jobs, such as the maximum time to wait for the running executions.

#### Returns

`Promise`\<`void`\>

A promise resolving when the running executions end or the timeout ends.

***

### useLockStore()

> **useLockStore**(`store`): `void`

Sets the store of the locks of the exclusive jobs. The `SchedulePlugin` calls it when it starts, with the store created by the
`lockStore` provider of its options, which is `MemoryStore()` by default.

#### Parameters

##### store

`LockStore`

The lock store.

#### Returns

`void`
