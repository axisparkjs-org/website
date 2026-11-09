# Function: FileUpload()

> **FileUpload**(`options?`): `MethodDecorator` & `ClassDecorator`

Overrides the file upload limits for a controller or a handler. Missing values fall back to the controller options and then to the global `fileUploadOptions`.
It has no effect when the `fileUpload` option of the HTTP plugin is disabled.

## Parameters

### options?

`Partial`\<[`FileUploadOptions`](../interfaces/FileUploadOptions.md)\> = `{}`

The file upload limits to apply.

## Returns

`MethodDecorator` & `ClassDecorator`
