# Class: SchedulerRegistry

A registry for managing scheduled jobs.

## Constructors

### Constructor

> **new SchedulerRegistry**(): `SchedulerRegistry`

#### Returns

`SchedulerRegistry`

## Methods

### existsJob()

> **existsJob**(`name`): `boolean`

Checks if a job exists in the scheduler.

#### Parameters

##### name

`string`

The name of the job to check.

#### Returns

`boolean`

True if the job exists, false otherwise.

***

### getAllJobs()

> **getAllJobs**(`type?`): [`JobDefinition`](JobDefinition.md)[]

Gets all jobs from the scheduler.

#### Parameters

##### type?

[`JobType`](../enumerations/JobType.md)

The type of jobs to get.

#### Returns

[`JobDefinition`](JobDefinition.md)[]

An array of jobs.

***

### getJob()

> **getJob**(`name`): [`JobDefinition`](JobDefinition.md) \| `undefined`

Gets a job from the scheduler.

#### Parameters

##### name

`string`

The name of the job to get.

#### Returns

[`JobDefinition`](JobDefinition.md) \| `undefined`

The job, or undefined if not found.

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

### removeJob()

> **removeJob**(`name`): `void`

Removes a job from the scheduler.

#### Parameters

##### name

`string` \| [`JobDefinition`](JobDefinition.md)

The name of the job to remove.

#### Returns

`void`
