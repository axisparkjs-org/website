# Class: DailyFileTransport

A log transport that outputs log entries to a daily rotating file.

## Extends

- [`FileTransport`](FileTransport.md)

## Constructors

### Constructor

> **new DailyFileTransport**(`options`): `DailyFileTransport`

#### Parameters

##### options

[`FileTransportOptions`](../interfaces/FileTransportOptions.md)

#### Returns

`DailyFileTransport`

#### Inherited from

[`FileTransport`](FileTransport.md).[`constructor`](FileTransport.md#constructor)

## Properties

### config

> `protected` `readonly` **config**: [`LogTransportOptions`](../interfaces/LogTransportOptions.md)

#### Inherited from

[`FileTransport`](FileTransport.md).[`config`](FileTransport.md#config)

***

### options

> `protected` `readonly` **options**: [`FileTransportOptions`](../interfaces/FileTransportOptions.md)

#### Inherited from

[`FileTransport`](FileTransport.md).[`options`](FileTransport.md#options)

## Methods

### beforeWrite()

> `protected` **beforeWrite**(`_entry`): `Promise`\<`void`\>

#### Parameters

##### \_entry

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FileTransport`](FileTransport.md).[`beforeWrite`](FileTransport.md#beforewrite)

***

### getFile()

> `protected` **getFile**(`_entry`): `string`

#### Parameters

##### \_entry

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`string`

#### Overrides

[`FileTransport`](FileTransport.md).[`getFile`](FileTransport.md#getfile)

***

### write()

> **write**(`entry`): `Promise`\<`void`\>

Writes a log entry using the configured formatter and minimum level.

#### Parameters

##### entry

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FileTransport`](FileTransport.md).[`write`](FileTransport.md#write)
