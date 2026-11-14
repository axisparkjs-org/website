# Interface: StreamTransportOptions

Options for configuring a stream log transport.

## Extends

- [`LogTransportOptions`](LogTransportOptions.md)

## Properties

### failOnError?

> `optional` **failOnError?**: `boolean`

Whether a failure of the transport rejects the call to the `Logger`, for logs that must stop the operation when they can not be written, such as audit logs.
The other transports still receive the entry. Defaults to `false`.

#### Inherited from

[`LogTransportOptions`](LogTransportOptions.md).[`failOnError`](LogTransportOptions.md#failonerror)

***

### formatter

> **formatter**: [`LogFormatter`](LogFormatter.md)

The formatter to use for processing log entries.

#### Inherited from

[`LogTransportOptions`](LogTransportOptions.md).[`formatter`](LogTransportOptions.md#formatter)

***

### minLevel

> **minLevel**: [`LogLevel`](../enumerations/LogLevel.md)

The minimum log level to process.

#### Inherited from

[`LogTransportOptions`](LogTransportOptions.md).[`minLevel`](LogTransportOptions.md#minlevel)

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

[`LogTransportOptions`](LogTransportOptions.md).[`onError`](LogTransportOptions.md#onerror)

***

### stream

> **stream**: `Writable`

The writable stream to which log entries will be written.
