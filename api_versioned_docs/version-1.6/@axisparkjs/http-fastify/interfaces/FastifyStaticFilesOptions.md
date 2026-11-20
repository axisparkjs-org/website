# Interface: FastifyStaticFilesOptions

The options of the static files served by the Fastify adapter.

## Properties

### prefix?

> `optional` **prefix?**: `string`

The URL prefix of the static files. Defaults to `/`.

***

### root?

> `optional` **root?**: `string`

The folder of the static files. Relative paths are resolved from the `basePath` of the application. Defaults to `public`.
