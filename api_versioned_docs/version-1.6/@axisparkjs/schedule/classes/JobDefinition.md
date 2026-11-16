# Abstract Class: JobDefinition

An abstract class representing a job definition.

## Extended by

- [`CronJobDefinition`](CronJobDefinition.md)
- [`IntervalJobDefinition`](IntervalJobDefinition.md)
- [`DateJobDefinition`](DateJobDefinition.md)
- [`TimeoutJobDefinition`](TimeoutJobDefinition.md)

## Implements

- [`Executable`](../../common/interfaces/Executable.md)

## Constructors

### Constructor

> **new JobDefinition**(`name`, `job`, `initiallyDisabled?`): `JobDefinition`

#### Parameters

##### name

`string`

##### job

[`JobFunction`](../type-aliases/JobFunction.md)

##### initiallyDisabled?

`boolean` = `false`

#### Returns

`JobDefinition`

## Properties

### initiallyDisabled

> `readonly` **initiallyDisabled**: `boolean` = `false`

***

### lastExecutionTime?

> `protected` `optional` **lastExecutionTime?**: `Date`

***

### lastOccurrenceTime?

> `protected` `optional` **lastOccurrenceTime?**: `Date`

The time of the last occurrence, executed by this instance or skipped because another instance ran it.

***

### name

> `readonly` **name**: `string`

***

### trigger

> `abstract` `protected` **trigger**: [`JobTrigger`](JobTrigger.md)

***

### type

> `abstract` `readonly` **type**: [`JobType`](../enumerations/JobType.md)

## Accessors

### exclusive

#### Get Signature

> **get** **exclusive**(): [`JobExclusivity`](../interfaces/JobExclusivity.md) \| `undefined`

The options of the job when it runs on only one instance of the application, or undefined when it runs on every instance.

##### Returns

[`JobExclusivity`](../interfaces/JobExclusivity.md) \| `undefined`

## Methods

### changeTrigger()

> `protected` **changeTrigger**(`trigger`): `void`

#### Parameters

##### trigger

[`JobTrigger`](JobTrigger.md)

#### Returns

`void`

***

### execute()

> **execute**(`signal?`): `Promise`\<`void`\>

Executes the job.

#### Parameters

##### signal?

`AbortSignal` = `...`

The signal passed to the job function, aborted when the job is stopped. Defaults to a signal that is never aborted.

#### Returns

`Promise`\<`void`\>

A promise resolving when the job has been executed.

#### Implementation of

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)

***

### getLastExecutionTime()

> **getLastExecutionTime**(): `Date` \| `undefined`

Gets the last execution time of the job.

#### Returns

`Date` \| `undefined`

The last execution time, or undefined if the job has not been executed yet.

***

### getNextExecutionTime()

> **getNextExecutionTime**(): `Date` \| `undefined`

Gets the next execution time of the job.

#### Returns

`Date` \| `undefined`

The next execution time, or undefined if the job has no more executions.

***

### getNextExecutionTimeAfter()

> **getNextExecutionTimeAfter**(`date`): `Date` \| `undefined`

Gets the first execution time of the job after a date, skipping the executions scheduled before it.

#### Parameters

##### date

`Date`

The date after which the execution time is calculated.

#### Returns

`Date` \| `undefined`

The first execution time after the date, or undefined if the job is not recurring (date and timeout jobs).

***

### getOccurrenceInterval()

> **getOccurrenceInterval**(`scheduledAt`): `number` \| `undefined`

Gets the time between an occurrence and the next one.

#### Parameters

##### scheduledAt

`Date`

The scheduled time of the occurrence.

#### Returns

`number` \| `undefined`

The milliseconds until the next occurrence, or undefined if the job is not recurring.

***

### getOccurrenceKey()

> **getOccurrenceKey**(`scheduledAt`): `string`

Identifies an occurrence of the job, so every instance that runs the same occurrence uses the same lock.

#### Parameters

##### scheduledAt

`Date`

The scheduled time of the occurrence.

#### Returns

`string`

The key of the occurrence.

***

### setExclusive()

> **setExclusive**(`exclusive?`): `this`

Sets whether the job runs on only one instance of the application.

#### Parameters

##### exclusive?

`boolean` \| [`JobExclusiveOptions`](../interfaces/JobExclusiveOptions.md)

`true` for the `once-per-occurrence` mode, the options of the exclusive job, or `false` to run it on every instance.

#### Returns

`this`

The job definition.

***

### skipExecution()

> **skipExecution**(): `void`

Skips the current occurrence without executing the job, for example because another instance holds its lock.
The next execution time is calculated from now, as if the job had been executed.

#### Returns

`void`

***

### fromMetadata()

> `static` **fromMetadata**(`metadata`, `execute`): `JobDefinition`

Creates a job definition from metadata.

#### Parameters

##### metadata

[`JobMetadata`](../type-aliases/JobMetadata.md)

The metadata for the job.

##### execute

[`JobFunction`](../type-aliases/JobFunction.md)

The function to execute when the job runs.

#### Returns

`JobDefinition`

The created job definition.
