# Interface: RotatingFileTransportOptions

Options for configuring a rotating file log transport.

## Extends

- [`FileTransportOptions`](FileTransportOptions.md)

## Properties

### failOnError?

> `optional` **failOnError?**: `boolean`

Whether a failure of the transport rejects the call to the `Logger`, for logs that must stop the operation when they can not be written, such as audit logs.
The other transports still receive the entry. Defaults to `false`.

#### Inherited from

[`FileTransportOptions`](FileTransportOptions.md).[`failOnError`](FileTransportOptions.md#failonerror)

***

### file

> **file**: `string`

The path to the file where log entries will be written.

#### Inherited from

[`FileTransportOptions`](FileTransportOptions.md).[`file`](FileTransportOptions.md#file)

***

### formatter

> **formatter**: [`LogFormatter`](LogFormatter.md)

The formatter to use for processing log entries.

#### Inherited from

[`FileTransportOptions`](FileTransportOptions.md).[`formatter`](FileTransportOptions.md#formatter)

***

### maxFiles

> **maxFiles**: `number`

The maximum number of rotated log files to keep.

***

### maxSize

> **maxSize**: `number`

The maximum size of the log file in bytes before rotation occurs.

***

### minLevel

> **minLevel**: [`LogLevel`](../enumerations/LogLevel.md)

The minimum log level to process.

#### Inherited from

[`FileTransportOptions`](FileTransportOptions.md).[`minLevel`](FileTransportOptions.md#minlevel)

***

### onError?

> `optional` **onError?**: (`error`, `entry`) => `void`

Called when the transport fails to write an entry, instead of writing the failure to `process.stderr`.
The `Logger` never rejects because of a transport, unless `failOnError` is enabled.

#### Parameters

##### error

`Error`

##### entry

[`LogEntry`](LogEntry.md)

#### Returns

`void`

#### Inherited from

[`FileTransportOptions`](FileTransportOptions.md).[`onError`](FileTransportOptions.md#onerror)
