# Class: CronJobDefinitio

A class representing a cron job definition.

## Extends

- [`JobDefinition`](JobDefinition.md)

## Constructors

### Constructor

> **new CronJobDefinitio**(`name`, `cronExpression`, `execute`, `initiallyDisabled?`, `timeZone?`): `CronJobDefinitio`

#### Parameters

##### name

`string`

##### cronExpression

`string`

##### execute

() => `Promise`\<`void`\>

##### initiallyDisabled?

`boolean`

##### timeZone?

`string`

#### Returns

`CronJobDefinitio`

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

> `protected` `readonly` **trigger**: [`CronJobTrigger`](CronJobTrigger.md)

#### Overrides

[`JobDefinition`](JobDefinition.md).[`trigger`](JobDefinition.md#trigger)

***

### type

> `readonly` **type**: [`JobType`](../enumerations/JobType.md) = `JobType.Cron`

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

### updateCronExpression()

> **updateCronExpression**(`cronExpression`, `timeZone?`): `void`

Updates the cron expression for the job.

#### Parameters

##### cronExpression

`string`

The new cron expression.

##### timeZone?

`string`

The time zone for the cron expression.

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
