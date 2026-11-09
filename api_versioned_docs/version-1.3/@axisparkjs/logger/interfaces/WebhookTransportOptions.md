# Interface: WebhookTransportOptions

Options for configuring a webhook log transport.

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

### url

> **url**: `string`

The URL to which log entries will be sent via HTTP POST requests.
