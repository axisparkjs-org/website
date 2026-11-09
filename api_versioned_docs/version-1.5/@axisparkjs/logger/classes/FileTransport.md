# Class: FileTransport

A log transport that outputs log entries to a file.

## Extends

- [`LogTransport`](LogTransport.md)

## Extended by

- [`DailyFileTransport`](DailyFileTransport.md)
- [`RotatingFileTransport`](RotatingFileTransport.md)

## Constructors

### Constructor

> **new FileTransport**(`options`): `FileTransport`

#### Parameters

##### options

[`FileTransportOptions`](../interfaces/FileTransportOptions.md)

#### Returns

`FileTransport`

#### Overrides

[`LogTransport`](LogTransport.md).[`constructor`](LogTransport.md#constructor)

## Properties

### config

> `protected` `readonly` **config**: [`LogTransportOptions`](../interfaces/LogTransportOptions.md)

#### Inherited from

[`LogTransport`](LogTransport.md).[`config`](LogTransport.md#config)

***

### options

> `protected` `readonly` **options**: [`FileTransportOptions`](../interfaces/FileTransportOptions.md)

## Methods

### beforeWrite()

> `protected` **beforeWrite**(`_entry`): `Promise`\<`void`\>

#### Parameters

##### \_entry

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`Promise`\<`void`\>

***

### getFile()

> `protected` **getFile**(`_entry`): `string`

#### Parameters

##### \_entry

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`string`

***

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
