# Class: FileUploadDefinition

The effective file upload limits for one handler, after merging handler, controller and global options.

## Constructors

### Constructor

> **new FileUploadDefinition**(`maxFileSize`, `maxFiles`, `allowedMimeTypes?`, `message?`): `FileUploadDefinition`

#### Parameters

##### maxFileSize

`number`

##### maxFiles

`number`

##### allowedMimeTypes?

readonly `string`[]

##### message?

`string` \| ((`limit`, `reason`) => `string`)

#### Returns

`FileUploadDefinition`

## Properties

### allowedMimeTypes?

> `readonly` `optional` **allowedMimeTypes?**: readonly `string`[]

***

### maxFiles

> `readonly` **maxFiles**: `number`

***

### maxFileSize

> `readonly` **maxFileSize**: `number`

***

### message?

> `readonly` `optional` **message?**: `string` \| ((`limit`, `reason`) => `string`)

## Methods

### isMimeTypeAllowed()

> **isMimeTypeAllowed**(`mimeType`): `boolean`

Checks whether a MIME type is allowed. All MIME types are allowed when no list is configured.

#### Parameters

##### mimeType

`string`

#### Returns

`boolean`
