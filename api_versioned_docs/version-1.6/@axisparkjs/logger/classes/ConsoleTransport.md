# Class: ConsoleTransport

A log transport that outputs log entries to the console. By default, the entries are written to the standard output with a buffered
asynchronous stream (`sonic-boom`), shared by every console transport of the process, so logging does not block the requests.

## Extends

- [`LogTransport`](LogTransport.md)

## Constructors

### Constructor

> **new ConsoleTransport**(`options`): `ConsoleTransport`

#### Parameters

##### options

[`ConsoleTransportOptions`](../interfaces/ConsoleTransportOptions.md)

#### Returns

`ConsoleTransport`

#### Overrides

[`LogTransport`](LogTransport.md).[`constructor`](LogTransport.md#constructor)

## Properties

### config

> `protected` `readonly` **config**: [`LogTransportOptions`](../interfaces/LogTransportOptions.md)

#### Inherited from

[`LogTransport`](LogTransport.md).[`config`](LogTransport.md#config)

***

### options

> `protected` `readonly` **options**: [`ConsoleTransportOptions`](../interfaces/ConsoleTransportOptions.md)

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

Writes the entries that are still in the buffer of the standard output and waits for them.

#### Returns

`Promise`\<`void`\>

#### Overrides

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
