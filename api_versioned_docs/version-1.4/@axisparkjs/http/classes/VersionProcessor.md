# Class: VersionProcessor

A processor class for handling version definitions based on the HTTP context. It uses registered version resolvers to determine the current version from the request and updates the version definition accordingly.

## Implements

- [`Processable`](../../common/interfaces/Processable.md)

## Constructors

### Constructor

> **new VersionProcessor**(`httpOptions`): `VersionProcessor`

#### Parameters

##### httpOptions

[`HttpPluginOptions`](../interfaces/HttpPluginOptions.md)

#### Returns

`VersionProcessor`

## Methods

### process()

> **process**(`version`, `context`): `void`

Processes the version definition based on the HTTP context. It uses the registered version resolver to determine the current version from the request and updates the version definition accordingly.

#### Parameters

##### version

[`VersionDefinition`](VersionDefinition.md) \| `undefined`

The version definition to be processed.

##### context

`Pick`\<[`HttpContext`](../interfaces/HttpContext.md), `"request"` \| `"response"` \| `"session"`\>

The HTTP context containing request, response, and session information.

#### Returns

`void`

#### Implementation of

[`Processable`](../../common/interfaces/Processable.md).[`process`](../../common/interfaces/Processable.md#process)

***

### registerVersion()

> `static` **registerVersion**(`type`, `resolver`): `void`

Registers a version resolver for a specific version type.

#### Parameters

##### type

[`VersionType`](../enumerations/VersionType.md)

The version type for which the resolver is registered.

##### resolver

[`VersionResolver`](../interfaces/VersionResolver.md)

The version resolver to be registered.

#### Returns

`void`
