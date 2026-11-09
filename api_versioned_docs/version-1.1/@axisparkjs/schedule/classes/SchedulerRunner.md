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

### isRunning()

> **isRunning**(`job`): `boolean`

Checks if a job is running.

#### Parameters

##### job

[`JobDefinition`](JobDefinition.md)

The job to check.

#### Returns

`boolean`

True if the job is running, false otherwise.

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

> **stop**(`job`): `void`

Stops a job.

#### Parameters

##### job

[`JobDefinition`](JobDefinition.md)

The job to stop.

#### Returns

`void`

***

### stopAll()

> **stopAll**(`jobs`): `void`

Stops all jobs.

#### Parameters

##### jobs

[`JobDefinition`](JobDefinition.md)[]

The jobs to stop.

#### Returns

`void`
