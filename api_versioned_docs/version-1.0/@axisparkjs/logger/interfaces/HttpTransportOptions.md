# Interface: HttpTransportOptions

Options for configuring an HTTP log transport.

## Extends

- [`LogTransportOptions`](LogTransportOptions.md)

## Properties

### formatter

> **formatter**: [`LogFormatter`](LogFormatter.md)

The formatter to use for processing log entries.

#### Inherited from

[`LogTransportOptions`](LogTransportOptions.md).[`formatter`](LogTransportOptions.md#formatter)

***

### headers?

> `optional` **headers?**: `Record`\<`string`, `string`\>

Optional headers to include in the HTTP requests.

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
