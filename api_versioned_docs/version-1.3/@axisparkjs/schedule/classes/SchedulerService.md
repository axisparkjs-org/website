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

### isJobRunning()

> **isJobRunning**(`job`): `boolean`

Checks if a job is running.

#### Parameters

##### job

`string` \| [`JobDefinition`](JobDefinition.md)

The job to check.

#### Returns

`boolean`

True if the job is running, false otherwise.

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

> **stopAllJobs**(): `void`

Stops all jobs.

#### Returns

`void`

***

### stopJob()

> **stopJob**(`job`): `void`

Stops a job.

#### Parameters

##### job

`string` \| [`JobDefinition`](JobDefinition.md)

The job to stop.

#### Returns

`void`
