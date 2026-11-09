# Class: FileUploadGuard

Parses `multipart/form-data` requests applying the handler limits and raises the standard HTTP error when a limit is exceeded.
It runs after the authentication and authorization guards so files are never buffered for rejected requests.

## Constructors

### Constructor

> **new FileUploadGuard**(`fileUploadGenerator`): `FileUploadGuard`

#### Parameters

##### fileUploadGenerator

[`FileUploadGenerator`](FileUploadGenerator.md)

#### Returns

`FileUploadGuard`

## Methods

### failedCheckFileUpload()

> **failedCheckFileUpload**(`context`): `Promise`\<`void`\>

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

#### Returns

`Promise`\<`void`\>
