# Class: HostDefinition

Represents the host restriction for an HTTP request and the host received from that request.

## Constructors

### Constructor

> **new HostDefinition**(): `HostDefinition`

#### Returns

`HostDefinition`

## Properties

### acceptedHosts

> **acceptedHosts**: `string`[] = `[]`

***

### host

> **host**: `string` \| `undefined`

## Methods

### isHostAccepted()

> **isHostAccepted**(): `boolean`

#### Returns

`boolean`

***

### matches()

> **matches**(`hostPattern`): `boolean`

Checks a host pattern against the host stored in this definition.

#### Parameters

##### hostPattern

`string`

#### Returns

`boolean`

***

### setAcceptedHosts()

> **setAcceptedHosts**(`acceptedHosts`): `void`

#### Parameters

##### acceptedHosts

`string`[]

#### Returns

`void`

***

### setHost()

> **setHost**(`host`): `void`

#### Parameters

##### host

`string` \| `string`[] \| `undefined`

#### Returns

`void`

***

### hostsOverlap()

> `static` **hostsOverlap**(`first`, `second`): `boolean`

Returns whether two lists of host patterns can match at least one common hostname.

#### Parameters

##### first

readonly `string`[]

##### second

readonly `string`[]

#### Returns

`boolean`

***

### isHostAccepted()

> `static` **isHostAccepted**(`host`, `acceptedHosts`): `boolean`

#### Parameters

##### host

`string` \| `undefined`

##### acceptedHosts

`string`[]

#### Returns

`boolean`

***

### matches()

> `static` **matches**(`host`, `hostPattern`): `boolean`

#### Parameters

##### host

`string` \| `undefined`

##### hostPattern

`string`

#### Returns

`boolean`

***

### patternsOverlap()

> `static` **patternsOverlap**(`first`, `second`): `boolean`

Returns whether two host patterns can match at least one common hostname.

#### Parameters

##### first

`string` \| `undefined`

##### second

`string` \| `undefined`

#### Returns

`boolean`

***

### specificity()

> `static` **specificity**(`pattern`): `number`

Scores a host pattern so static labels take precedence over named and wildcard labels.

#### Parameters

##### pattern

`string`

#### Returns

`number`
