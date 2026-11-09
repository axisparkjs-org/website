# Class: VersionDefinition

Represents a version definition for HTTP requests, including accepted versions and the current version. Provides methods to set the current version and check if the current version is accepted.

## Constructors

### Constructor

> **new VersionDefinition**(): `VersionDefinition`

#### Returns

`VersionDefinition`

## Properties

### acceptedVersions

> **acceptedVersions**: `string`[] = `[]`

***

### version

> **version**: `string` \| `undefined`

## Methods

### isVersionAccepted()

> **isVersionAccepted**(): `boolean`

#### Returns

`boolean`

***

### setAcceptedVersions()

> **setAcceptedVersions**(`acceptedVersions`): `void`

#### Parameters

##### acceptedVersions

`string`[]

#### Returns

`void`

***

### setVersion()

> **setVersion**(`version`): `void`

#### Parameters

##### version

`string` \| `undefined`

#### Returns

`void`

***

### isVersionAccepted()

> `static` **isVersionAccepted**(`version`, `acceptedVersions`): `boolean`

#### Parameters

##### version

`string` \| `undefined`

##### acceptedVersions

`string`[]

#### Returns

`boolean`

***

### isWildcard()

> `static` **isWildcard**(`version`): `boolean`

#### Parameters

##### version

`string`

#### Returns

`boolean`

***

### versionsOverlap()

> `static` **versionsOverlap**(`first`, `second`): `boolean`

Returns whether two lists of accepted versions can match at least one common version. An empty list means versioning is disabled and overlaps with everything.

#### Parameters

##### first

readonly `string`[]

##### second

readonly `string`[]

#### Returns

`boolean`
