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
