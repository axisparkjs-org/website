# Class: MemoryTransport

A log transport that stores log entries in memory.

## Extends

- [`LogTransport`](LogTransport.md)

## Constructors

### Constructor

> **new MemoryTransport**(`config`): `MemoryTransport`

The configuration options for the log transport.

#### Parameters

##### config

[`LogTransportOptions`](../interfaces/LogTransportOptions.md)

#### Returns

`MemoryTransport`

#### Inherited from

[`LogTransport`](LogTransport.md).[`constructor`](LogTransport.md#constructor)

## Properties

### config

> `protected` `readonly` **config**: [`LogTransportOptions`](../interfaces/LogTransportOptions.md)

#### Inherited from

[`LogTransport`](LogTransport.md).[`config`](LogTransport.md#config)

***

### entries

> `readonly` **entries**: [`LogEntry`](../interfaces/LogEntry.md)[] = `[]`

## Accessors

### errorOptions

#### Get Signature

> **get** **errorOptions**(): `Pick`\<[`LogTransportOptions`](../interfaces/LogTransportOptions.md), `"onError"` \| `"failOnError"`\>

The options that decide how the failures of the transport are handled.

##### Returns

`Pick`\<[`LogTransportOptions`](../interfaces/LogTransportOptions.md), `"onError"` \| `"failOnError"`\>

#### Inherited from

[`LogTransport`](LogTransport.md).[`errorOptions`](LogTransport.md#erroroptions)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

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
