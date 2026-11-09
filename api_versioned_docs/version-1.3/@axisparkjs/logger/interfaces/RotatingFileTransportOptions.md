# Interface: RotatingFileTransportOptions

Options for configuring a rotating file log transport.

## Extends

- [`FileTransportOptions`](FileTransportOptions.md)

## Properties

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
