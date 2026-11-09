# Interface: FastifyHttpPluginOptions

An interface extending the base HttpPluginOptions to include additional configuration options specific to the Fastify HTTP plugin. This includes options for body parsing, URL encoding, CORS, session management, cookie parsing, and response compression.

## Extends

- [`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md)

## Properties

### adapter

> **adapter**: [`HttpAdapterClass`](../../http/type-aliases/HttpAdapterClass.md)

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`adapter`](../../http/interfaces/HttpPluginOptions.md#adapter)

***

### basePath

> **basePath**: `string`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`basePath`](../../http/interfaces/HttpPluginOptions.md#basepath)

***

### bodyParser

> **bodyParser**: `false`

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`bodyParser`](../../http/interfaces/HttpPluginOptions.md#bodyparser)

***

### bodyParserOptions?

> `optional` **bodyParserOptions?**: `undefined`

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`bodyParserOptions`](../../http/interfaces/HttpPluginOptions.md#bodyparseroptions)

***

### compression

> **compression**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`compression`](../../http/interfaces/HttpPluginOptions.md#compression)

***

### compressionOptions?

> `optional` **compressionOptions?**: `FastifyCompressOptions`

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`compressionOptions`](../../http/interfaces/HttpPluginOptions.md#compressionoptions)

***

### cookies

> **cookies**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`cookies`](../../http/interfaces/HttpPluginOptions.md#cookies)

***

### cookiesOptions?

> `optional` **cookiesOptions?**: `FastifyCookieOptions`

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`cookiesOptions`](../../http/interfaces/HttpPluginOptions.md#cookiesoptions)

***

### cors

> **cors**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`cors`](../../http/interfaces/HttpPluginOptions.md#cors)

***

### corsOptions?

> `optional` **corsOptions?**: `FastifyCorsOptions`

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`corsOptions`](../../http/interfaces/HttpPluginOptions.md#corsoptions)

***

### healthChecks?

> `optional` **healthChecks?**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`healthChecks`](../../http/interfaces/HttpPluginOptions.md#healthchecks)

***

### logErrors?

> `optional` **logErrors?**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`logErrors`](../../http/interfaces/HttpPluginOptions.md#logerrors)

***

### logHttpErrors?

> `optional` **logHttpErrors?**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`logHttpErrors`](../../http/interfaces/HttpPluginOptions.md#loghttperrors)

***

### logHttpRequests?

> `optional` **logHttpRequests?**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`logHttpRequests`](../../http/interfaces/HttpPluginOptions.md#loghttprequests)

***

### logHttpResponses?

> `optional` **logHttpResponses?**: `boolean`

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

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`port`](../../http/interfaces/HttpPluginOptions.md#port)

***

### session

> **session**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`session`](../../http/interfaces/HttpPluginOptions.md#session)

***

### sessionOptions

> **sessionOptions**: `FastifySessionOptions`

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`sessionOptions`](../../http/interfaces/HttpPluginOptions.md#sessionoptions)

***

### timeout

> **timeout**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`timeout`](../../http/interfaces/HttpPluginOptions.md#timeout)

***

### timeoutOptions?

> `optional` **timeoutOptions?**: [`TimeoutOptions`](../../http/interfaces/TimeoutOptions.md)

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`timeoutOptions`](../../http/interfaces/HttpPluginOptions.md#timeoutoptions)

***

### urlEncoded?

> `optional` **urlEncoded?**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`urlEncoded`](../../http/interfaces/HttpPluginOptions.md#urlencoded)

***

### urlEncodedOptions?

> `optional` **urlEncodedOptions?**: `FastifyFormbodyOptions`

#### Overrides

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`urlEncodedOptions`](../../http/interfaces/HttpPluginOptions.md#urlencodedoptions)

***

### version

> **version**: `boolean`

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`version`](../../http/interfaces/HttpPluginOptions.md#version)

***

### versionOptions?

> `optional` **versionOptions?**: [`VersionOptions`](../../http/type-aliases/VersionOptions.md)

#### Inherited from

[`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md).[`versionOptions`](../../http/interfaces/HttpPluginOptions.md#versionoptions)
