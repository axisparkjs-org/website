# Abstract Class: JobTrigger

An abstract class representing a job trigger.

## Extended by

- [`CronJobTrigger`](CronJobTrigger.md)
- [`IntervalJobTrigger`](IntervalJobTrigger.md)
- [`DateJobTrigger`](DateJobTrigger.md)
- [`TimeoutJobTrigger`](TimeoutJobTrigger.md)

## Constructors

### Constructor

> **new JobTrigger**(): `JobTrigger`

#### Returns

`JobTrigger`

## Properties

### createdAt

> `readonly` **createdAt**: `Date`

## Methods

### getNextExecutionTime()

> `abstract` **getNextExecutionTime**(`lastExecutionTime?`): `Date` \| `undefined`

Gets the next execution time for the job.

#### Parameters

##### lastExecutionTime?

`Date`

The time of the last execution.

#### Returns

`Date` \| `undefined`

The next execution time, or undefined if the job has no more executions.

***

### getNextExecutionTimeAfter()

> **getNextExecutionTimeAfter**(`_date`): `Date` \| `undefined`

Gets the first execution time of a recurring job after a date.
It is used to skip the executions that were missed, for example while the previous execution was running.

#### Parameters

##### \_date

`Date`

#### Returns

`Date` \| `undefined`

The first execution time after the date, or undefined if the job is not recurring.

***

### getOccurrenceInterval()

> **getOccurrenceInterval**(`_scheduledAt`): `number` \| `undefined`

Gets the time between an occurrence and the next one, used as the default time to live of the lock of an occurrence.

#### Parameters

##### \_scheduledAt

`Date`

The scheduled time of the occurrence.

#### Returns

`number` \| `undefined`

The milliseconds until the next occurrence, or undefined if the job is not recurring.

***

### getOccurrenceKey()

> **getOccurrenceKey**(`scheduledAt`): `string`

Identifies an occurrence of the job, so every instance of the application that runs the same occurrence uses the same lock.

#### Parameters

##### scheduledAt

`Date`

The scheduled time of the occurrence.

#### Returns

`string`

The scheduled time in ISO format, which is the same in every instance for date and cron jobs.
