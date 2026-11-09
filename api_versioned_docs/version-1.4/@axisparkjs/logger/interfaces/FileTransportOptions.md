# Interface: FileTransportOptions

Options for configuring a file log transport.

## Extends

- [`LogTransportOptions`](LogTransportOptions.md)

## Extended by

- [`RotatingFileTransportOptions`](RotatingFileTransportOptions.md)

## Properties

### file

> **file**: `string`

The path to the file where log entries will be written.

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
