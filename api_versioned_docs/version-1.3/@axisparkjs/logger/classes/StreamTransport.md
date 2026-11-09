# Class: StreamTransport

A log transport that outputs log entries to a writable stream.

## Extends

- [`LogTransport`](LogTransport.md)

## Constructors

### Constructor

> **new StreamTransport**(`options`): `StreamTransport`

#### Parameters

##### options

[`StreamTransportOptions`](../interfaces/StreamTransportOptions.md)

#### Returns

`StreamTransport`

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
