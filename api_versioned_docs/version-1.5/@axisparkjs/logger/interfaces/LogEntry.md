# Interface: LogEntry

Defines the structure of a log entry, including its timestamp, level, message, scopes, optional error, and optional metadata.

## Properties

### error?

> `readonly` `optional` **error?**: `Error`

***

### level

> `readonly` **level**: [`LogLevel`](../enumerations/LogLevel.md)

***

### message

> `readonly` **message**: `string`

***

### metadata?

> `readonly` `optional` **metadata?**: `Record`\<`string`, `unknown`\>

***

### scopes

> `readonly` **scopes**: readonly `string`[]

***

### timestamp

> `readonly` **timestamp**: `Date`
