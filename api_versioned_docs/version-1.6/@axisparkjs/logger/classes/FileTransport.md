# Class: FileTransport

A log transport that outputs log entries to a file. The file is kept open with a `WriteStream` in append mode, instead of being opened
and closed for every entry, and the stream writes the pending entries together. The entries are written in the order of the calls, and
each call resolves when its entry is written, or rejects with the error of the file. A file that fails is opened again by the next entry.

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

## Accessors

### errorOptions

#### Get Signature

> **get** **errorOptions**(): `Pick`\<[`LogTransportOptions`](../interfaces/LogTransportOptions.md), `"onError"` \| `"failOnError"`\>

The options that decide how the failures of the transport are handled.

##### Returns

`Pick`\<[`LogTransportOptions`](../interfaces/LogTransportOptions.md), `"onError"` \| `"failOnError"`\>

#### Inherited from

[`LogTransport`](LogTransport.md).[`errorOptions`](LogTransport.md#erroroptions)

***

### minLevel

#### Get Signature

> **get** **minLevel**(): [`LogLevel`](../enumerations/LogLevel.md)

The minimum level of the entries that the transport writes. The `Logger` does not build the entries below the lowest one of its transports.

##### Returns

[`LogLevel`](../enumerations/LogLevel.md)

#### Inherited from

[`LogTransport`](LogTransport.md).[`minLevel`](LogTransport.md#minlevel)

## Methods

### append()

> `protected` **append**(`file`, `data`): `Promise`\<`void`\>

Writes data to a file through the stream of the transport, opening it when it is not open or the file changed.

#### Parameters

##### file

`string`

The path of the file.

##### data

`string`

The data to write.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the data is written.

***

### beforeWrite()

> `protected` **beforeWrite**(`_entry`): `Promise`\<`void`\>

#### Parameters

##### \_entry

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`Promise`\<`void`\>

***

### closeStream()

> `protected` **closeStream**(): `Promise`\<`void`\>

Ends the stream of the file, after its pending entries are written. The next entry opens the file again.

#### Returns

`Promise`\<`void`\>

***

### flush()

> **flush**(): `Promise`\<`void`\>

Waits for the pending entries and closes the file, which is opened again by the next entry.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`LogTransport`](LogTransport.md).[`flush`](LogTransport.md#flush)

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
