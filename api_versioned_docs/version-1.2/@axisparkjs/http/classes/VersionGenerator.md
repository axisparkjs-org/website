# Class: VersionGenerator

A generator class for creating version definitions based on the HTTP context. It retrieves version information from controller and route metadata, as well as from the provided version options. The generated version definition includes accepted versions and the current version.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`VersionDefinition`](VersionDefinition.md) \| `undefined`\>

## Constructors

### Constructor

> **new VersionGenerator**(`httpOptions`): `VersionGenerator`

#### Parameters

##### httpOptions

[`HttpPluginOptions`](../interfaces/HttpPluginOptions.md)

#### Returns

`VersionGenerator`

## Methods

### generate()

> **generate**(`context`): [`VersionDefinition`](VersionDefinition.md) \| `undefined`

Generates a version definition based on the HTTP context.

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

The HTTP context.

#### Returns

[`VersionDefinition`](VersionDefinition.md) \| `undefined`

The generated version definition or undefined if no version options are available.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)
