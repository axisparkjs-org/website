# Class: CronJobTrigger

A class representing a cron-based job trigger.

## Extends

- [`JobTrigger`](JobTrigger.md)

## Constructors

### Constructor

> **new CronJobTrigger**(`cronExpression`, `timeZone?`): `CronJobTrigger`

#### Parameters

##### cronExpression

`string`

##### timeZone?

`string`

#### Returns

`CronJobTrigger`

#### Overrides

[`JobTrigger`](JobTrigger.md).[`constructor`](JobTrigger.md#constructor)

## Properties

### createdAt

> `readonly` **createdAt**: `Date`

#### Inherited from

[`JobTrigger`](JobTrigger.md).[`createdAt`](JobTrigger.md#createdat)

***

### cronExpression

> `readonly` **cronExpression**: `string`

## Methods

### getNextExecutionTime()

> **getNextExecutionTime**(`lastExecutionTime?`): `Date` \| `undefined`

Gets the next execution time for the job.

#### Parameters

##### lastExecutionTime?

`Date`

The time of the last execution.

#### Returns

`Date` \| `undefined`

The next execution time, or undefined if the job has no more executions.

#### Overrides

[`JobTrigger`](JobTrigger.md).[`getNextExecutionTime`](JobTrigger.md#getnextexecutiontime)

***

### getNextExecutionTimeAfter()

> **getNextExecutionTimeAfter**(`date`): `Date` \| `undefined`

Gets the first execution time of a recurring job after a date.
It is used to skip the executions that were missed, for example while the previous execution was running.

#### Parameters

##### date

`Date`

The date after which the execution time is calculated.

#### Returns

`Date` \| `undefined`

The first execution time after the date, or undefined if the job is not recurring.

#### Overrides

[`JobTrigger`](JobTrigger.md).[`getNextExecutionTimeAfter`](JobTrigger.md#getnextexecutiontimeafter)

***

### getOccurrenceInterval()

> **getOccurrenceInterval**(`scheduledAt`): `number` \| `undefined`

Gets the time between an occurrence and the next one, used as the default time to live of the lock of an occurrence.

#### Parameters

##### scheduledAt

`Date`

The scheduled time of the occurrence.

#### Returns

`number` \| `undefined`

The milliseconds until the next occurrence, or undefined if the job is not recurring.

#### Overrides

[`JobTrigger`](JobTrigger.md).[`getOccurrenceInterval`](JobTrigger.md#getoccurrenceinterval)

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

#### Inherited from

[`JobTrigger`](JobTrigger.md).[`getOccurrenceKey`](JobTrigger.md#getoccurrencekey)
