# Class: DateJobDefinition

A class representing a date-based job definition.

## Extends

- [`JobDefinition`](JobDefinition.md)

## Constructors

### Constructor

> **new DateJobDefinition**(`name`, `date`, `execute`, `initiallyDisabled?`): `DateJobDefinition`

#### Parameters

##### name

`string`

##### date

`Date`

##### execute

() => `Promise`\<`void`\>

##### initiallyDisabled?

`boolean`

#### Returns

`DateJobDefinition`

#### Overrides

[`JobDefinition`](JobDefinition.md).[`constructor`](JobDefinition.md#constructor)

## Properties

### initiallyDisabled

> `readonly` **initiallyDisabled**: `boolean` = `false`

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`initiallyDisabled`](JobDefinition.md#initiallydisabled)

***

### lastExecutionTime?

> `protected` `optional` **lastExecutionTime?**: `Date`

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`lastExecutionTime`](JobDefinition.md#lastexecutiontime)

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`name`](JobDefinition.md#name)

***

### trigger

> `protected` `readonly` **trigger**: [`JobTrigger`](JobTrigger.md)

#### Overrides

[`JobDefinition`](JobDefinition.md).[`trigger`](JobDefinition.md#trigger)

***

### type

> `readonly` **type**: [`JobType`](../enumerations/JobType.md) = `JobType.Date`

#### Overrides

[`JobDefinition`](JobDefinition.md).[`type`](JobDefinition.md#type)

## Methods

### changeTrigger()

> `protected` **changeTrigger**(`trigger`): `void`

#### Parameters

##### trigger

[`JobTrigger`](JobTrigger.md)

#### Returns

`void`

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`changeTrigger`](JobDefinition.md#changetrigger)

***

### execute()

> **execute**(): `Promise`\<`void`\>

Executes the job.

#### Returns

`Promise`\<`void`\>

A promise resolving when the job has been executed.

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`execute`](JobDefinition.md#execute)

***

### getLastExecutionTime()

> **getLastExecutionTime**(): `Date` \| `undefined`

Gets the last execution time of the job.

#### Returns

`Date` \| `undefined`

The last execution time, or undefined if the job has not been executed yet.

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`getLastExecutionTime`](JobDefinition.md#getlastexecutiontime)

***

### getNextExecutionTime()

> **getNextExecutionTime**(): `Date` \| `undefined`

Gets the next execution time of the job.

#### Returns

`Date` \| `undefined`

The next execution time, or undefined if the job has no more executions.

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`getNextExecutionTime`](JobDefinition.md#getnextexecutiontime)

***

### updateDate()

> **updateDate**(`date`): `void`

Updates the date for the job.

#### Parameters

##### date

`Date`

The new date.

#### Returns

`void`

***

### fromMetadata()

> `static` **fromMetadata**(`metadata`, `execute`): [`JobDefinition`](JobDefinition.md)

Creates a job definition from metadata.

#### Parameters

##### metadata

`JobMetadata`

The metadata for the job.

##### execute

() => `Promise`\<`void`\>

The function to execute when the job runs.

#### Returns

[`JobDefinition`](JobDefinition.md)

The created job definition.

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`fromMetadata`](JobDefinition.md#frommetadata)
