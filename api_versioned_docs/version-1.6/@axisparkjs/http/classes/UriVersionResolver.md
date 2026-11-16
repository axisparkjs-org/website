# Class: UriVersionResolver

A resolver for extracting the API version from the HTTP request URI.

## Implements

- [`VersionResolver`](../interfaces/VersionResolver.md)

## Constructors

### Constructor

> **new UriVersionResolver**(): `UriVersionResolver`

#### Returns

`UriVersionResolver`

## Methods

### resolve()

> **resolve**(`req`, `_options`): `string` \| `undefined`

Resolves the version from the given HTTP request based on the provided version options.

#### Parameters

##### req

[`HttpRequest`](../interfaces/HttpRequest.md)

The HTTP request from which to resolve the version.

##### \_options

[`UriVersionOptions`](../interfaces/UriVersionOptions.md)

The version options that may influence the resolution process.

#### Returns

`string` \| `undefined`

The resolved version as a string, or undefined if no version could be resolved.

#### Implementation of

[`VersionResolver`](../interfaces/VersionResolver.md).[`resolve`](../interfaces/VersionResolver.md#resolve)
