# Interface: HttpPluginOptions

Options for configuring the HTTP plugin.

## Extends

- [`PluginOptions`](../../core/interfaces/PluginOptions.md)

## Extended by

- [`ExpressHttpPluginOptions`](../../http-express/interfaces/ExpressHttpPluginOptions.md)
- [`FastifyHttpPluginOptions`](../../http-fastify/interfaces/FastifyHttpPluginOptions.md)

## Properties

### adapter

> **adapter**: [`HttpAdapterClass`](../type-aliases/HttpAdapterClass.md)

***

### basePath

> **basePath**: `string`

***

### bodyParser

> **bodyParser**: `boolean`

***

### bodyParserOptions?

> `optional` **bodyParserOptions?**: `any`

***

### compression

> **compression**: `boolean`

***

### compressionOptions?

> `optional` **compressionOptions?**: `any`

***

### cookies

> **cookies**: `boolean`

***

### cookiesOptions?

> `optional` **cookiesOptions?**: `any`

***

### cors

> **cors**: `boolean`

***

### corsOptions?

> `optional` **corsOptions?**: `any`

***

### healthChecks?

> `optional` **healthChecks?**: `boolean`

***

### logErrors?

> `optional` **logErrors?**: `boolean`

***

### logHttpErrors?

> `optional` **logHttpErrors?**: `boolean`

***

### logHttpRequests?

> `optional` **logHttpRequests?**: `boolean`

***

### logHttpResponses?

> `optional` **logHttpResponses?**: `boolean`

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)

***

### port

> **port**: `number`

***

### session

> **session**: `boolean`

***

### sessionOptions?

> `optional` **sessionOptions?**: `any`

***

### timeout

> **timeout**: `boolean`

***

### timeoutOptions?

> `optional` **timeoutOptions?**: [`TimeoutOptions`](TimeoutOptions.md)

***

### urlEncoded?

> `optional` **urlEncoded?**: `boolean`

***

### urlEncodedOptions?

> `optional` **urlEncodedOptions?**: `any`

***

### version

> **version**: `boolean`

***

### versionOptions?

> `optional` **versionOptions?**: [`VersionOptions`](../type-aliases/VersionOptions.md)
