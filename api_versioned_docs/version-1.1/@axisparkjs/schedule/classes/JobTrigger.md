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
