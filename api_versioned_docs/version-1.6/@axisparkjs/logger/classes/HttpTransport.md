# Class: HttpTransport

A log transport that outputs log entries via HTTP POST requests.
The entry is sent as JSON, and its error is sent with its `name`, `message`, `stack` and `cause`.

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

> **write**(`entry`): `Promise`\<`void`\>

Writes a log entry using the configured formatter and minimum level.

#### Parameters

##### entry

[`LogEntry`](../interfaces/LogEntry.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`LogTransport`](LogTransport.md).[`write`](LogTransport.md#write)
