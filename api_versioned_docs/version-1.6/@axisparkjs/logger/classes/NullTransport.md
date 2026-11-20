# Class: NullTransport

A log transport that discards all log entries.

## Extends

- [`LogTransport`](LogTransport.md)

## Constructors

### Constructor

> **new NullTransport**(`config`): `NullTransport`

The configuration options for the log transport.

#### Parameters

##### config

[`LogTransportOptions`](../interfaces/LogTransportOptions.md)

#### Returns

`NullTransport`

#### Inherited from

[`LogTransport`](LogTransport.md).[`constructor`](LogTransport.md#constructor)

## Properties

### config

> `protected` `readonly` **config**: [`LogTransportOptions`](../interfaces/LogTransportOptions.md)

#### Inherited from

[`LogTransport`](LogTransport.md).[`config`](LogTransport.md#config)

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

### flush()

> **flush**(): `Promise`\<`void`\>

Writes the entries that the transport keeps in memory, if any, and waits for them. The transports that write each entry at once do
nothing. `Logger.flush()` calls it, and the application calls it when it is destroyed.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LogTransport`](LogTransport.md).[`flush`](LogTransport.md#flush)

***

### write()

> **write**(`_`): `Promise`\<`void`\>

Writes a log entry using the configured formatter and minimum level.

#### Parameters

##### \_

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`LogTransport`](LogTransport.md).[`write`](LogTransport.md#write)
