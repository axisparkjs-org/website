# Class: DateJobTrigger

A class representing a date-based job trigger.

## Extends

- [`JobTrigger`](JobTrigger.md)

## Constructors

### Constructor

> **new DateJobTrigger**(`date`): `DateJobTrigger`

#### Parameters

##### date

`Date`

#### Returns

`DateJobTrigger`

#### Overrides

[`JobTrigger`](JobTrigger.md).[`constructor`](JobTrigger.md#constructor)

## Properties

### createdAt

> `readonly` **createdAt**: `Date`

#### Inherited from

[`JobTrigger`](JobTrigger.md).[`createdAt`](JobTrigger.md#createdat)

***

### date

> `readonly` **date**: `Date`

## Methods

### getNextExecutionTime()

> **getNextExecutionTime**(): `Date` \| `undefined`

Gets the next execution time for the job.

#### Returns

`Date` \| `undefined`

The next execution time, or undefined if the job has no more executions.

#### Overrides

[`JobTrigger`](JobTrigger.md).[`getNextExecutionTime`](JobTrigger.md#getnextexecutiontime)

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

#### Inherited from

[`JobTrigger`](JobTrigger.md).[`getNextExecutionTimeAfter`](JobTrigger.md#getnextexecutiontimeafter)

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

#### Inherited from

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
