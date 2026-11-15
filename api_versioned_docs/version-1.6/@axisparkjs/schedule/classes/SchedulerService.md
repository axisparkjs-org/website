# Class: SchedulerService

A service for managing scheduled jobs.

## Constructors

### Constructor

> **new SchedulerService**(`registry`, `runner`): `SchedulerService`

#### Parameters

##### registry

[`SchedulerRegistry`](SchedulerRegistry.md)

##### runner

[`SchedulerRunner`](SchedulerRunner.md)

#### Returns

`SchedulerService`

## Methods

### isJobExecuting()

> **isJobExecuting**(`job`): `boolean`

Checks if an execution of a job is in progress.

#### Parameters

##### job

`string` \| [`JobDefinition`](JobDefinition.md)

The job to check.

#### Returns

`boolean`

True if the job is executing, false otherwise.

***

### isJobRunning()

> **isJobRunning**(`job`): `boolean`

Checks if a job is running, this is, if it is scheduled. Use `isJobExecuting()` to check if an execution is in progress.

#### Parameters

##### job

`string` \| [`JobDefinition`](JobDefinition.md)

The job to check.

#### Returns

`boolean`

True if the job is scheduled, false otherwise.

***

### registerJob()

> **registerJob**(`job`): `void`

Registers a job with the scheduler.

#### Parameters

##### job

[`JobDefinition`](JobDefinition.md)

The job to register.

#### Returns

`void`

***

### registerJobs()

> **registerJobs**(`jobs`): `void`

Registers multiple jobs with the scheduler.

#### Parameters

##### jobs

[`JobDefinition`](JobDefinition.md)[]

The jobs to register.

#### Returns

`void`

***

### startAllJobs()

> **startAllJobs**(`onlyInitiallyEnabled?`): `void`

Starts all jobs.

#### Parameters

##### onlyInitiallyEnabled?

`boolean` = `false`

If true, only starts jobs that are not initially disabled.

#### Returns

`void`

***

### startJob()

> **startJob**(`job`): `void`

Starts a job.

#### Parameters

##### job

`string` \| [`JobDefinition`](JobDefinition.md)

The job to start.

#### Returns

`void`

***

### stopAllJobs()

> **stopAllJobs**(`options?`): `Promise`\<`void`\>

Stops all jobs: no new execution starts, the signal of the running executions is aborted, and it waits for them.

#### Parameters

##### options?

[`SchedulerStopOptions`](../interfaces/SchedulerStopOptions.md)

The options to stop the jobs. Without a `timeout`, it waits until the running executions end.

#### Returns

`Promise`\<`void`\>

A promise resolving when the running executions end or the timeout ends.

***

### stopJob()

> **stopJob**(`job`, `options?`): `Promise`\<`void`\>

Stops a job: no new execution starts, the signal of its running execution is aborted, and it waits for that execution.

#### Parameters

##### job

`string` \| [`JobDefinition`](JobDefinition.md)

The job to stop.

##### options?

[`SchedulerStopOptions`](../interfaces/SchedulerStopOptions.md)

The options to stop the job. Without a `timeout`, it waits until the running execution ends.

#### Returns

`Promise`\<`void`\>

A promise resolving when the running execution ends or the timeout ends.

***

### useLockStore()

> **useLockStore**(`store`): `void`

Sets the store of the locks of the exclusive jobs.

#### Parameters

##### store

`LockStore`

The lock store.

#### Returns

`void`
