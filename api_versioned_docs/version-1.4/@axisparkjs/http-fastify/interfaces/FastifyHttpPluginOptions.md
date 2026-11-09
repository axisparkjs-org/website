# Interface: FastifyHttpPluginOptions

An interface extending the base HttpPluginOptions to include additional configuration options specific to the Fastify HTTP plugin. This includes options for body parsing, URL encoding, CORS, session management, cookie parsing, and response compression.

## Extends

- [`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md)

## Properties

### adapter

> **adapter**: [`HttpAdapterClass`](../../http/type-aliases/HttpAdapterClass.md)

The HTTP adapter to use. Express or Fastify are supported.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`adapter`](../../http/interfaces/HttpPluginOptions.md#adapter)

***

### basePath

> **basePath**: `string`

The base path for the HTTP server.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`basePath`](../../http/interfaces/HttpPluginOptions.md#basepath)

***

### bodyParser

> **bodyParser**: `false`

Whether to use the body parser middleware.

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`bodyParser`](../../http/interfaces/HttpPluginOptions.md#bodyparser)

***

### bodyParserOptions?

> `optional` **bodyParserOptions?**: `undefined`

Options for configuring the body parser middleware.

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`bodyParserOptions`](../../http/interfaces/HttpPluginOptions.md#bodyparseroptions)

***

### compression

> **compression**: `boolean`

Whether to use compression middleware.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`compression`](../../http/interfaces/HttpPluginOptions.md#compression)

***

### compressionOptions?

> `optional` **compressionOptions?**: `FastifyCompressOptions`

Options for configuring the compression middleware.

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`compressionOptions`](../../http/interfaces/HttpPluginOptions.md#compressionoptions)

***

### cookies

> **cookies**: `boolean`

Whether to use the cookie parser middleware.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`cookies`](../../http/interfaces/HttpPluginOptions.md#cookies)

***

### cookiesOptions?

> `optional` **cookiesOptions?**: `FastifyCookieOptions`

Options for configuring the cookie parser middleware.

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`cookiesOptions`](../../http/interfaces/HttpPluginOptions.md#cookiesoptions)

***

### cors

> **cors**: `boolean`

Whether to use CORS middleware.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`cors`](../../http/interfaces/HttpPluginOptions.md#cors)

***

### corsOptions?

> `optional` **corsOptions?**: `FastifyCorsOptions`

Options for configuring the CORS middleware.

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`corsOptions`](../../http/interfaces/HttpPluginOptions.md#corsoptions)

***

### fileUpload?

> `optional` **fileUpload?**: `boolean`

Whether to use the file upload (multipart/form-data) middleware. Disabled by default.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`fileUpload`](../../http/interfaces/HttpPluginOptions.md#fileupload)

***

### fileUploadOptions?

> `optional` **fileUploadOptions?**: [`FileUploadOptions`](../../http/interfaces/FileUploadOptions.md)

Options for configuring the file upload middleware.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`fileUploadOptions`](../../http/interfaces/HttpPluginOptions.md#fileuploadoptions)

***

### healthChecks?

> `optional` **healthChecks?**: `boolean`

Whether to use the health check endpoints.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`healthChecks`](../../http/interfaces/HttpPluginOptions.md#healthchecks)

***

### logErrors?

> `optional` **logErrors?**: `boolean`

Whether to log all errors.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`logErrors`](../../http/interfaces/HttpPluginOptions.md#logerrors)

***

### logHttpErrors?

> `optional` **logHttpErrors?**: `boolean`

Whether to log HTTP errors.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`logHttpErrors`](../../http/interfaces/HttpPluginOptions.md#loghttperrors)

***

### logHttpRequests?

> `optional` **logHttpRequests?**: `boolean`

Whether to log HTTP requests.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`logHttpRequests`](../../http/interfaces/HttpPluginOptions.md#loghttprequests)

***

### logHttpResponses?

> `optional` **logHttpResponses?**: `boolean`

Whether to log HTTP responses.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`logHttpResponses`](../../http/interfaces/HttpPluginOptions.md#loghttpresponses)

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`plugin`](../../http/interfaces/HttpPluginOptions.md#plugin)

***

### port

> **port**: `number`

The port on which the HTTP server will listen.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`port`](../../http/interfaces/HttpPluginOptions.md#port)

***

### rateLimit?

> `optional` **rateLimit?**: `boolean`

Whether to use HTTP rate limiting. Disabled by default.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`rateLimit`](../../http/interfaces/HttpPluginOptions.md#ratelimit)

***

### rateLimitOptions?

> `optional` **rateLimitOptions?**: [`RateLimitOptions`](../../http/interfaces/RateLimitOptions.md)

Default rate limits applied to endpoints without decorator overrides.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`rateLimitOptions`](../../http/interfaces/HttpPluginOptions.md#ratelimitoptions)

***

### routeValidation?

> `optional` **routeValidation?**: `boolean`

Whether to validate route compatibility during plugin registration. Defaults to true.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`routeValidation`](../../http/interfaces/HttpPluginOptions.md#routevalidation)

***

### routeValidationOptions?

> `optional` **routeValidationOptions?**: [`RouteValidationOptions`](../../http/interfaces/RouteValidationOptions.md)

Actions to apply to each kind of route compatibility finding.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`routeValidationOptions`](../../http/interfaces/HttpPluginOptions.md#routevalidationoptions)

***

### session

> **session**: `boolean`

Whether to use the session middleware.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`session`](../../http/interfaces/HttpPluginOptions.md#session)

***

### sessionOptions

> **sessionOptions**: `FastifySessionOptions`

Options for configuring the session middleware.

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`sessionOptions`](../../http/interfaces/HttpPluginOptions.md#sessionoptions)

***

### timeout

> **timeout**: `boolean`

Whether to use the timeout middleware.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`timeout`](../../http/interfaces/HttpPluginOptions.md#timeout)

***

### timeoutOptions?

> `optional` **timeoutOptions?**: [`TimeoutOptions`](../../http/interfaces/TimeoutOptions.md)

Options for configuring the timeout middleware.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`timeoutOptions`](../../http/interfaces/HttpPluginOptions.md#timeoutoptions)

***

### urlEncoded?

> `optional` **urlEncoded?**: `boolean`

Whether to use the URL-encoded middleware.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`urlEncoded`](../../http/interfaces/HttpPluginOptions.md#urlencoded)

***

### urlEncodedOptions?

> `optional` **urlEncodedOptions?**: `FastifyFormbodyOptions`

Options for configuring the URL-encoded middleware.

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`urlEncodedOptions`](../../http/interfaces/HttpPluginOptions.md#urlencodedoptions)

***

### version

> **version**: `boolean`

Whether to use the versioning guard.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`version`](../../http/interfaces/HttpPluginOptions.md#version)

***

### versionOptions?

> `optional` **versionOptions?**: [`VersionOptions`](../../http/type-aliases/VersionOptions.md)

Options for configuring the versioning guard.

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`versionOptions`](../../http/interfaces/HttpPluginOptions.md#versionoptions)
