# Abstract Class: LogTransport

An abstract class for defining log transport behavior.

## Extended by

- [`ConsoleTransport`](ConsoleTransport.md)
- [`FileTransport`](FileTransport.md)
- [`HttpTransport`](HttpTransport.md)
- [`MemoryTransport`](MemoryTransport.md)
- [`NullTransport`](NullTransport.md)
- [`StreamTransport`](StreamTransport.md)
- [`WebhookTransport`](WebhookTransport.md)

## Constructors

### Constructor

> **new LogTransport**(`config`): `LogTransport`

The configuration options for the log transport.

#### Parameters

##### config

[`LogTransportOptions`](../interfaces/LogTransportOptions.md)

#### Returns

`LogTransport`

## Properties

### config

> `protected` `readonly` **config**: [`LogTransportOptions`](../interfaces/LogTransportOptions.md)

## Accessors

### errorOptions

#### Get Signature

> **get** **errorOptions**(): `Pick`\<[`LogTransportOptions`](../interfaces/LogTransportOptions.md), `"onError"` \| `"failOnError"`\>

The options that decide how the failures of the transport are handled.

##### Returns

`Pick`\<[`LogTransportOptions`](../interfaces/LogTransportOptions.md), `"onError"` \| `"failOnError"`\>

## Methods

### write()

> `abstract` **write**(`entry`): `Promise`\<`void`\>

Writes a log entry using the configured formatter and minimum level.

#### Parameters

##### entry

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`Promise`\<`void`\>
