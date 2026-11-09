# Interface: FileUploadOptions

Options for configuring file uploads (`multipart/form-data`).

## Properties

### allowedMimeTypes?

> `optional` **allowedMimeTypes?**: `string`[]

Allowed MIME types (e.g. `['image/png', 'application/pdf']`). All allowed if omitted.

***

### maxFiles?

> `optional` **maxFiles?**: `number`

Maximum number of files allowed per request.

***

### maxFileSize

> **maxFileSize**: `number`

Maximum size in bytes allowed per file.

***

### message?

> `optional` **message?**: `string` \| ((`limit`, `reason`) => `string`)

The message to display when an upload limit is exceeded. By default, it will display a generic message.
The function receives the exceeded limit (bytes for `fileSize`, number of files for `files` and number of allowed MIME types for `mimeType`) and the reason.
