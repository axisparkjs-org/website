# Interface: VersionResolver

An interface for resolving version information from HTTP requests.

## Methods

### resolve()

> **resolve**(`req`, `options`): `string` \| `undefined`

Resolves the version from the given HTTP request based on the provided version options.

#### Parameters

##### req

[`HttpRequest`](HttpRequest.md)

The HTTP request from which to resolve the version.

##### options

[`VersionOptions`](../type-aliases/VersionOptions.md)

The version options that may influence the resolution process.

#### Returns

`string` \| `undefined`

The resolved version as a string, or undefined if no version could be resolved.
