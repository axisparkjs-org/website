# Class: HostPattern

A host pattern of a route, normalized and split in labels once, with its specificity. The patterns are compiled when the routes are
registered (`RouteDefinition.hostPatterns`) and cached by their text, so matching a request does not normalize or split any pattern.

## Properties

### any

> `readonly` **any**: `boolean`

Whether the pattern is `*`, which matches every host, also a request without host.

***

### labels

> `readonly` **labels**: readonly `string`[]

The labels of the normalized pattern.

***

### pattern

> `readonly` **pattern**: `string`

***

### specificity

> `readonly` **specificity**: `number`

The score of the pattern: static labels take precedence over named (`:name`) and wildcard (`*`) labels.

## Methods

### matches()

> **matches**(`hostLabels`): `boolean`

Checks the pattern against the labels of a normalized host.

#### Parameters

##### hostLabels

readonly `string`[] \| `undefined`

The labels of the host, as returned by `HostPattern.labelsOf()`, or `undefined` when the request has no host.

#### Returns

`boolean`

***

### isDynamicLabel()

> `static` **isDynamicLabel**(`label`): `boolean`

Returns whether a label matches any label (`*` or `:name`).

#### Parameters

##### label

`string`

#### Returns

`boolean`

***

### labelsOf()

> `static` **labelsOf**(`host`): `string`[] \| `undefined`

Normalizes a host and splits it in labels.

#### Parameters

##### host

`string` \| `undefined`

The host, with or without port.

#### Returns

`string`[] \| `undefined`

The labels, or `undefined` when there is no host.

***

### normalize()

> `static` **normalize**(`host`): `string`

Normalizes a host or a host pattern: trimmed, without port, lowercase and without the final dot.

#### Parameters

##### host

`string`

#### Returns

`string`

***

### of()

> `static` **of**(`pattern`): `HostPattern`

Returns the compiled pattern of a host pattern. The compiled patterns are cached by their text.

#### Parameters

##### pattern

`string`

The host pattern, such as `api.example.com`, `:tenant.example.com` or `*`.

#### Returns

`HostPattern`
