# Class: VersionDefinition

Represents a version definition for HTTP requests, including accepted versions and the current version. Provides methods to set the current version and check if the current version is accepted.

## Constructors

### Constructor

> **new VersionDefinition**(`acceptedVersions`): `VersionDefinition`

#### Parameters

##### acceptedVersions

`string`[]

#### Returns

`VersionDefinition`

## Properties

### acceptedVersions

> `readonly` **acceptedVersions**: `string`[]

***

### version

> **version**: `string` \| `undefined`

## Methods

### isVersionAccepted()

> **isVersionAccepted**(): `boolean`

#### Returns

`boolean`

***

### setVersion()

> **setVersion**(`version`): `void`

#### Parameters

##### version

`string` \| `undefined`

#### Returns

`void`
