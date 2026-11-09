# Interface: LogData

Defines the structure of log data, including its level, message, optional error, and optional metadata.

## Properties

### error?

> `optional` **error?**: `Error`

***

### level

> **level**: [`LogLevel`](../enumerations/LogLevel.md)

***

### message

> **message**: `string`

***

### metadata?

> `optional` **metadata?**: `Record`\<`string`, `unknown`\>
