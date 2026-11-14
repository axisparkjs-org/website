# Class: JobGenerator

A generator for creating job definitions from metadata.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<`Promise`\<[`JobDefinition`](JobDefinition.md)[]\>\>

## Constructors

### Constructor

> **new JobGenerator**(`injector`): `JobGenerator`

#### Parameters

##### injector

[`Injector`](../../di/classes/Injector.md)

#### Returns

`JobGenerator`

## Methods

### generate()

> **generate**(): `Promise`\<[`JobDefinition`](JobDefinition.md)[]\>

Generates job definitions from metadata.

#### Returns

`Promise`\<[`JobDefinition`](JobDefinition.md)[]\>

A promise resolving to an array of job definitions.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)
