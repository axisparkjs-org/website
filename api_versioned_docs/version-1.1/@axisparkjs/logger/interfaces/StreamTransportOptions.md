# Interface: StreamTransportOptions

Options for configuring a stream log transport.

## Extends

- [`LogTransportOptions`](LogTransportOptions.md)

## Properties

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

### stream

> **stream**: `Writable`

The writable stream to which log entries will be written.
