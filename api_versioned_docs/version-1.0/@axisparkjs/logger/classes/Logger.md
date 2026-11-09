# Class: Logger

A class for handling logging operations with support for multiple transports and scoping.

## Constructors

### Constructor

> **new Logger**(`transports`, `scopes?`): `Logger`

Constructor for the Logger class.

#### Parameters

##### transports

[`LogTransport`](LogTransport.md)[]

An array of LogTransport instances that define how log entries are handled (e.g., written to console, file, etc.).

##### scopes?

`string`[] = `[]`

An optional array of strings representing the scopes or contexts for the logger, allowing for hierarchical logging.

#### Returns

`Logger`

## Methods

### child()

> **child**(`scope`): `Logger`

Creates a child logger with an additional scope.

#### Parameters

##### scope

`string`

#### Returns

`Logger`

***

### debug()

> **debug**(`message`): `Promise`\<`void`\>

Logs a debug message.

#### Parameters

##### message

`string`

#### Returns

`Promise`\<`void`\>

***

### error()

> **error**(`message`, `error?`): `Promise`\<`void`\>

Logs an error message.

#### Parameters

##### message

`string`

##### error?

`Error`

#### Returns

`Promise`\<`void`\>

***

### fatal()

> **fatal**(`message`, `error?`): `Promise`\<`void`\>

Logs a fatal message.

#### Parameters

##### message

`string`

##### error?

`Error`

#### Returns

`Promise`\<`void`\>

***

### info()

> **info**(`message`): `Promise`\<`void`\>

Logs an info message.

#### Parameters

##### message

`string`

#### Returns

`Promise`\<`void`\>

***

### log()

> **log**(`data`): `Promise`\<`void`\>

Internal method to log data using the configured transports.

#### Parameters

##### data

[`LogData`](../interfaces/LogData.md)

#### Returns

`Promise`\<`void`\>

***

### trace()

> **trace**(`message`): `Promise`\<`void`\>

Logs a trace message.

#### Parameters

##### message

`string`

#### Returns

`Promise`\<`void`\>

***

### warn()

> **warn**(`message`): `Promise`\<`void`\>

Logs a warning message.

#### Parameters

##### message

`string`

#### Returns

`Promise`\<`void`\>
