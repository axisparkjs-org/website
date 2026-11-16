# Class: FileUploadGenerator

Generates the file upload limits for a handler. Precedence: handler decorator > controller decorator > global options.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`FileUploadDefinition`](FileUploadDefinition.md)\>

## Constructors

### Constructor

> **new FileUploadGenerator**(`options`): `FileUploadGenerator`

#### Parameters

##### options

[`HttpPluginOptions`](../interfaces/HttpPluginOptions.md)

#### Returns

`FileUploadGenerator`

## Methods

### generate()

> **generate**(`context`): [`FileUploadDefinition`](FileUploadDefinition.md)

#### Parameters

##### context

[`ExecutionContext`](../../engine/interfaces/ExecutionContext.md)

#### Returns

[`FileUploadDefinition`](FileUploadDefinition.md)

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)
