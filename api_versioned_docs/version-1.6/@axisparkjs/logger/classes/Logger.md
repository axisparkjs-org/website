# Class: Logger

## Constructors

### Constructor

> **new Logger**(`transports`, `scopes?`, `metadata?`): `Logger`

Constructor for the Logger class.

#### Parameters

##### transports

[`LogTransport`](LogTransport.md)[]

An array of LogTransport instances that define how log entries are handled (e.g., written to console, file, etc.).

##### scopes?

`string`[] = `[]`

An optional array of strings representing the scopes or contexts for the logger, allowing for hierarchical logging.

##### metadata?

[`LogMetadata`](../type-aliases/LogMetadata.md)

Optional metadata merged into every entry written by this logger.

#### Returns

`Logger`

## Methods

### child()

> **child**(`scope`, `metadata?`): `Logger`

Creates a child logger with an additional scope.

#### Parameters

##### scope

`string`

Scope added to the scopes of this logger.

##### metadata?

[`LogMetadata`](../type-aliases/LogMetadata.md)

Optional metadata merged into every entry of the child logger, after the metadata of this logger.
Metadata passed to a level method overrides the bound values with the same key.

#### Returns

`Logger`

***

### debug()

> **debug**(`message`, `metadata?`): `Promise`\<`void`\>

Logs a debug message.

#### Parameters

##### message

`string`

Message of the entry.

##### metadata?

[`LogMetadata`](../type-aliases/LogMetadata.md)

Optional structured data of the entry.

#### Returns

`Promise`\<`void`\>

***

### error()

> **error**(`message`, `error?`, `metadata?`): `Promise`\<`void`\>

Logs an error message.

#### Parameters

##### message

`string`

Message of the entry.

##### error?

`Error`

Optional error that caused the entry.

##### metadata?

[`LogMetadata`](../type-aliases/LogMetadata.md)

Optional structured data of the entry.

#### Returns

`Promise`\<`void`\>

***

### fatal()

> **fatal**(`message`, `error?`, `metadata?`): `Promise`\<`void`\>

Logs a fatal message.

#### Parameters

##### message

`string`

Message of the entry.

##### error?

`Error`

Optional error that caused the entry.

##### metadata?

[`LogMetadata`](../type-aliases/LogMetadata.md)

Optional structured data of the entry.

#### Returns

`Promise`\<`void`\>

***

### flush()

> **flush**(): `Promise`\<`void`\>

Writes the entries kept in memory by the transports (buffered or batched transports) and waits for them. A failing transport does not
stop the others, and its failure is ignored, so it never breaks the shutdown of the application.

#### Returns

`Promise`\<`void`\>

***

### info()

> **info**(`message`, `metadata?`): `Promise`\<`void`\>

Logs an info message.

#### Parameters

##### message

`string`

Message of the entry.

##### metadata?

[`LogMetadata`](../type-aliases/LogMetadata.md)

Optional structured data of the entry, such as `{ method: 'GET', status: 200 }`.

#### Returns

`Promise`\<`void`\>

***

### isLevelEnabled()

> **isLevelEnabled**(`level`): `boolean`

Whether an entry of the level would be written by at least one transport. The level methods return at once, without building the
entry, when it is `false`, so the `debug` and `trace` calls cost almost nothing when no transport writes them.

#### Parameters

##### level

[`LogLevel`](../enumerations/LogLevel.md)

The level to check.

#### Returns

`boolean`

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

> **trace**(`message`, `metadata?`): `Promise`\<`void`\>

Logs a trace message.

#### Parameters

##### message

`string`

Message of the entry.

##### metadata?

[`LogMetadata`](../type-aliases/LogMetadata.md)

Optional structured data of the entry.

#### Returns

`Promise`\<`void`\>

***

### warn()

> **warn**(`message`, `metadata?`): `Promise`\<`void`\>

Logs a warning message.

#### Parameters

##### message

`string`

Message of the entry.

##### metadata?

[`LogMetadata`](../type-aliases/LogMetadata.md)

Optional structured data of the entry.

#### Returns

`Promise`\<`void`\>
