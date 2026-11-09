# Abstract Class: JobDefinition

An abstract class representing a job definition.

## Extended by

- [`CronJobDefinitio`](CronJobDefinitio.md)
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

() => `Promise`\<`void`\>

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

### name

> `readonly` **name**: `string`

***

### trigger

> `abstract` `protected` **trigger**: [`JobTrigger`](JobTrigger.md)

***

### type

> `abstract` `readonly` **type**: [`JobType`](../enumerations/JobType.md)

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

> **execute**(): `Promise`\<`void`\>

Executes the job.

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

### fromMetadata()

> `static` **fromMetadata**(`metadata`, `execute`): `JobDefinition`

Creates a job definition from metadata.

#### Parameters

##### metadata

[`JobMetadata`](../type-aliases/JobMetadata.md)

The metadata for the job.

##### execute

() => `Promise`\<`void`\>

The function to execute when the job runs.

#### Returns

`JobDefinition`

The created job definition.
