# Class: HttpTransport

A log transport that outputs log entries via HTTP POST requests.

## Extends

- [`LogTransport`](LogTransport.md)

## Constructors

### Constructor

> **new HttpTransport**(`options`): `HttpTransport`

#### Parameters

##### options

[`HttpTransportOptions`](../interfaces/HttpTransportOptions.md)

#### Returns

`HttpTransport`

#### Overrides

[`LogTransport`](LogTransport.md).[`constructor`](LogTransport.md#constructor)

## Properties

### config

> `protected` `readonly` **config**: [`LogTransportOptions`](../interfaces/LogTransportOptions.md)

#### Inherited from

[`LogTransport`](LogTransport.md).[`config`](LogTransport.md#config)

## Methods

### write()

> **write**(`entry`): `Promise`\<`void`\>

Writes a log entry using the configured formatter and minimum level.

#### Parameters

##### entry

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`LogTransport`](LogTransport.md).[`write`](LogTransport.md#write)
