# Class: TimeoutJobTrigger

A class representing a timeout-based job trigger.

## Extends

- [`JobTrigger`](JobTrigger.md)

## Constructors

### Constructor

> **new TimeoutJobTrigger**(`timeout`): `TimeoutJobTrigger`

#### Parameters

##### timeout

`number`

#### Returns

`TimeoutJobTrigger`

#### Overrides

[`JobTrigger`](JobTrigger.md).[`constructor`](JobTrigger.md#constructor)

## Properties

### createdAt

> `readonly` **createdAt**: `Date`

#### Inherited from

[`JobTrigger`](JobTrigger.md).[`createdAt`](JobTrigger.md#createdat)

***

### timeout

> `readonly` **timeout**: `number`

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

> **getOccurrenceKey**(): `string`

The job runs once per process, so every instance shares the same lock during its time to live.

#### Returns

`string`

#### Overrides

[`JobTrigger`](JobTrigger.md).[`getOccurrenceKey`](JobTrigger.md#getoccurrencekey)
