# Interface: LogTransportOptions

Options for configuring a log transport.

## Extended by

- [`FileTransportOptions`](FileTransportOptions.md)
- [`HttpTransportOptions`](HttpTransportOptions.md)
- [`StreamTransportOptions`](StreamTransportOptions.md)
- [`WebhookTransportOptions`](WebhookTransportOptions.md)

## Properties

### formatter

> **formatter**: [`LogFormatter`](LogFormatter.md)

The formatter to use for processing log entries.

***

### minLevel

> **minLevel**: [`LogLevel`](../enumerations/LogLevel.md)

The minimum log level to process.
