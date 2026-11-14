# Interface: LogTransportOptions

Options for configuring a log transport.

## Extended by

- [`FileTransportOptions`](FileTransportOptions.md)
- [`HttpTransportOptions`](HttpTransportOptions.md)
- [`StreamTransportOptions`](StreamTransportOptions.md)
- [`WebhookTransportOptions`](WebhookTransportOptions.md)

## Properties

### failOnError?

> `optional` **failOnError?**: `boolean`

Whether a failure of the transport rejects the call to the `Logger`, for logs that must stop the operation when they can not be written, such as audit logs.
The other transports still receive the entry. Defaults to `false`.

***

### formatter

> **formatter**: [`LogFormatter`](LogFormatter.md)

The formatter to use for processing log entries.

***

### minLevel

> **minLevel**: [`LogLevel`](../enumerations/LogLevel.md)

The minimum log level to process.

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
