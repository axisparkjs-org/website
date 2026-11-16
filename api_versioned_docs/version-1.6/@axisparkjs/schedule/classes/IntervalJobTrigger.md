# Class: IntervalJobTrigger

A class representing an interval-based job trigger.

## Extends

- [`JobTrigger`](JobTrigger.md)

## Constructors

### Constructor

> **new IntervalJobTrigger**(`interval`): `IntervalJobTrigger`

#### Parameters

##### interval

`number`

#### Returns

`IntervalJobTrigger`

#### Overrides

[`JobTrigger`](JobTrigger.md).[`constructor`](JobTrigger.md#constructor)

## Properties

### createdAt

> `readonly` **createdAt**: `Date`

#### Inherited from

[`JobTrigger`](JobTrigger.md).[`createdAt`](JobTrigger.md#createdat)

***

### interval

> `readonly` **interval**: `number`

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

> **getOccurrenceInterval**(): `number` \| `undefined`

Gets the time between an occurrence and the next one, used as the default time to live of the lock of an occurrence.

#### Returns

`number` \| `undefined`

The milliseconds until the next occurrence, or undefined if the job is not recurring.

#### Overrides

[`JobTrigger`](JobTrigger.md).[`getOccurrenceInterval`](JobTrigger.md#getoccurrenceinterval)

***

### getOccurrenceKey()

> **getOccurrenceKey**(`scheduledAt`): `string`

Identifies the interval window of the occurrence, counted from the Unix epoch. The instances of the application start at
different times, so their scheduled times differ, but each instance runs the job once per window.

#### Parameters

##### scheduledAt

`Date`

#### Returns

`string`

#### Overrides

[`JobTrigger`](JobTrigger.md).[`getOccurrenceKey`](JobTrigger.md#getoccurrencekey)
