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

## Accessors

### errorOptions

#### Get Signature

> **get** **errorOptions**(): `Pick`\<[`LogTransportOptions`](../interfaces/LogTransportOptions.md), `"onError"` \| `"failOnError"`\>

The options that decide how the failures of the transport are handled.

##### Returns

`Pick`\<[`LogTransportOptions`](../interfaces/LogTransportOptions.md), `"onError"` \| `"failOnError"`\>

#### Inherited from

[`FileTransport`](FileTransport.md).[`errorOptions`](FileTransport.md#erroroptions)

***

### minLevel

#### Get Signature

> **get** **minLevel**(): [`LogLevel`](../enumerations/LogLevel.md)

The minimum level of the entries that the transport writes. The `Logger` does not build the entries below the lowest one of its transports.

##### Returns

[`LogLevel`](../enumerations/LogLevel.md)

#### Inherited from

[`FileTransport`](FileTransport.md).[`minLevel`](FileTransport.md#minlevel)

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

#### Inherited from

[`FileTransport`](FileTransport.md).[`append`](FileTransport.md#append)

***

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

### closeStream()

> `protected` **closeStream**(): `Promise`\<`void`\>

Ends the stream of the file, after its pending entries are written. The next entry opens the file again.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FileTransport`](FileTransport.md).[`closeStream`](FileTransport.md#closestream)

***

### flush()

> **flush**(): `Promise`\<`void`\>

Waits for the pending entries and closes the file, which is opened again by the next entry.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FileTransport`](FileTransport.md).[`flush`](FileTransport.md#flush)

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
