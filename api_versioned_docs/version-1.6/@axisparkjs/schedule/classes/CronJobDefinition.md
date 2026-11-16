# Class: CronJobDefinition

A class representing a cron job definition.

## Extends

- [`JobDefinition`](JobDefinition.md)

## Constructors

### Constructor

> **new CronJobDefinition**(`name`, `cronExpression`, `execute`, `initiallyDisabled?`, `timeZone?`): `CronJobDefinition`

#### Parameters

##### name

`string`

##### cronExpression

`string`

##### execute

[`JobFunction`](../type-aliases/JobFunction.md)

##### initiallyDisabled?

`boolean`

##### timeZone?

`string`

#### Returns

`CronJobDefinition`

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

### lastOccurrenceTime?

> `protected` `optional` **lastOccurrenceTime?**: `Date`

The time of the last occurrence, executed by this instance or skipped because another instance ran it.

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`lastOccurrenceTime`](JobDefinition.md#lastoccurrencetime)

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

## Accessors

### exclusive

#### Get Signature

> **get** **exclusive**(): [`JobExclusivity`](../interfaces/JobExclusivity.md) \| `undefined`

The options of the job when it runs on only one instance of the application, or undefined when it runs on every instance.

##### Returns

[`JobExclusivity`](../interfaces/JobExclusivity.md) \| `undefined`

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`exclusive`](JobDefinition.md#exclusive)

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

> **execute**(`signal?`): `Promise`\<`void`\>

Executes the job.

#### Parameters

##### signal?

`AbortSignal` = `...`

The signal passed to the job function, aborted when the job is stopped. Defaults to a signal that is never aborted.

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

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`getNextExecutionTimeAfter`](JobDefinition.md#getnextexecutiontimeafter)

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

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`getOccurrenceInterval`](JobDefinition.md#getoccurrenceinterval)

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

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`getOccurrenceKey`](JobDefinition.md#getoccurrencekey)

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

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`setExclusive`](JobDefinition.md#setexclusive)

***

### skipExecution()

> **skipExecution**(): `void`

Skips the current occurrence without executing the job, for example because another instance holds its lock.
The next execution time is calculated from now, as if the job had been executed.

#### Returns

`void`

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`skipExecution`](JobDefinition.md#skipexecution)

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

[`JobMetadata`](../type-aliases/JobMetadata.md)

The metadata for the job.

##### execute

[`JobFunction`](../type-aliases/JobFunction.md)

The function to execute when the job runs.

#### Returns

[`JobDefinition`](JobDefinition.md)

The created job definition.

#### Inherited from

[`JobDefinition`](JobDefinition.md).[`fromMetadata`](JobDefinition.md#frommetadata)
