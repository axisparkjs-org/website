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

The HTTP adapter to use. Express or Fastify are supported.

***

### basePath

> **basePath**: `string`

The base path for the HTTP server.

***

### bodyParser

> **bodyParser**: `boolean`

Whether to use the body parser middleware.

***

### bodyParserOptions?

> `optional` **bodyParserOptions?**: `any`

Options for configuring the body parser middleware.

***

### compression

> **compression**: `boolean`

Whether to use compression middleware.

***

### compressionOptions?

> `optional` **compressionOptions?**: `any`

Options for configuring the compression middleware.

***

### cookies

> **cookies**: `boolean`

Whether to use the cookie parser middleware.

***

### cookiesOptions?

> `optional` **cookiesOptions?**: `any`

Options for configuring the cookie parser middleware.

***

### cors

> **cors**: `boolean`

Whether to use CORS middleware.

***

### corsOptions?

> `optional` **corsOptions?**: `any`

Options for configuring the CORS middleware.

***

### healthChecks?

> `optional` **healthChecks?**: `boolean`

Whether to use the health check endpoints.

***

### logErrors?

> `optional` **logErrors?**: `boolean`

Whether to log all errors.

***

### logHttpErrors?

> `optional` **logHttpErrors?**: `boolean`

Whether to log HTTP errors.

***

### logHttpRequests?

> `optional` **logHttpRequests?**: `boolean`

Whether to log HTTP requests.

***

### logHttpResponses?

> `optional` **logHttpResponses?**: `boolean`

Whether to log HTTP responses.

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)

***

### port

> **port**: `number`

The port on which the HTTP server will listen.

***

### routeValidation?

> `optional` **routeValidation?**: `boolean`

Whether to validate route compatibility during plugin registration. Defaults to true.

***

### routeValidationOptions?

> `optional` **routeValidationOptions?**: [`RouteValidationOptions`](RouteValidationOptions.md)

Actions to apply to each kind of route compatibility finding.

***

### session

> **session**: `boolean`

Whether to use the session middleware.

***

### sessionOptions?

> `optional` **sessionOptions?**: `any`

Options for configuring the session middleware.

***

### timeout

> **timeout**: `boolean`

Whether to use the timeout middleware.

***

### timeoutOptions?

> `optional` **timeoutOptions?**: [`TimeoutOptions`](TimeoutOptions.md)

Options for configuring the timeout middleware.

***

### urlEncoded?

> `optional` **urlEncoded?**: `boolean`

Whether to use the URL-encoded middleware.

***

### urlEncodedOptions?

> `optional` **urlEncodedOptions?**: `any`

Options for configuring the URL-encoded middleware.

***

### version

> **version**: `boolean`

Whether to use the versioning guard.

***

### versionOptions?

> `optional` **versionOptions?**: [`VersionOptions`](../type-aliases/VersionOptions.md)

Options for configuring the versioning guard.
