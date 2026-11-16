# Class: LogErrorFilter

A global filter for logging errors during execution.

## Constructors

### Constructor

> **new LogErrorFilter**(`logger`): `LogErrorFilter`

#### Parameters

##### logger

`Logger`

#### Returns

`LogErrorFilter`

## Methods

### error()

> **error**(`error`): `Promise`\<`void`\>

Handles errors by logging their name and message.

#### Parameters

##### error

`Error`

The error to log.

#### Returns

`Promise`\<`void`\>

A promise that resolves when logging is complete.
