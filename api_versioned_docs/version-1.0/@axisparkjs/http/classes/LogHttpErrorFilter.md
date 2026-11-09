# Class: LogHttpErrorFilter

A global filter for logging HTTP errors during execution.

## Constructors

### Constructor

> **new LogHttpErrorFilter**(`logger`): `LogHttpErrorFilter`

#### Parameters

##### logger

`Logger`

#### Returns

`LogHttpErrorFilter`

## Methods

### httpError()

> **httpError**(`error`): `Promise`\<`void`\>

Handles HTTP errors by logging their status and response.

#### Parameters

##### error

[`HttpError`](HttpError.md)

The HTTP error to log.

#### Returns

`Promise`\<`void`\>

A promise that resolves when logging is complete.
