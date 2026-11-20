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

***

### minLevel

#### Get Signature

> **get** **minLevel**(): [`LogLevel`](../enumerations/LogLevel.md)

The minimum level of the entries that the transport writes. The `Logger` does not build the entries below the lowest one of its transports.

##### Returns

[`LogLevel`](../enumerations/LogLevel.md)

## Methods

### flush()

> **flush**(): `Promise`\<`void`\>

Writes the entries that the transport keeps in memory, if any, and waits for them. The transports that write each entry at once do
nothing. `Logger.flush()` calls it, and the application calls it when it is destroyed.

#### Returns

`Promise`\<`void`\>

***

### write()

> `abstract` **write**(`entry`): `Promise`\<`void`\>

Writes a log entry using the configured formatter and minimum level.

#### Parameters

##### entry

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`Promise`\<`void`\>
