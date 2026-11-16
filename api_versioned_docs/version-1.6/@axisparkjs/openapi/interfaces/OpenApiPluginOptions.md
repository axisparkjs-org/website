# Interface: OpenApiPluginOptions

Interface representing the options for configuring the OpenAPI plugin.

## Extends

- [`PluginOptions`](../../core/interfaces/PluginOptions.md)

## Properties

### docsUrl?

> `optional` **docsUrl?**: `string`

Url path for the OpenAPI documentation.

***

### exposeJson?

> `optional` **exposeJson?**: `boolean`

If true, the OpenAPI plugin will expose the JSON document as a REST endpoint.

***

### exposeYaml?

> `optional` **exposeYaml?**: `boolean`

If true, the OpenAPI plugin will expose the YAML document as a REST endpoint.

***

### globalPrefix?

> `optional` **globalPrefix?**: `boolean`

If true, the OpenAPI plugin will use the global prefix for the documentation routes. If false, it will not use the global prefix.

***

### info

> **info**: `object`

Information about the API.

#### contact?

> `optional` **contact?**: `object`

##### contact.email?

> `optional` **email?**: `string`

##### contact.name?

> `optional` **name?**: `string`

##### contact.url?

> `optional` **url?**: `string`

#### description?

> `optional` **description?**: `string`

#### externalDocs?

> `optional` **externalDocs?**: `object`

##### externalDocs.description?

> `optional` **description?**: `string`

##### externalDocs.url

> **url**: `string`

#### license?

> `optional` **license?**: `object`

##### license.identifier?

> `optional` **identifier?**: `string`

##### license.name

> **name**: `string`

##### license.url?

> `optional` **url?**: `string`

#### servers?

> `optional` **servers?**: `object`[]

#### summary?

> `optional` **summary?**: `string`

#### tags?

> `optional` **tags?**: `object`[]

#### termsOfService?

> `optional` **termsOfService?**: `string`

#### title

> **title**: `string`

#### version

> **version**: `string`

***

### jsonDocumentUrl?

> `optional` **jsonDocumentUrl?**: `string`

Url path for the OpenAPI JSON document.

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)

***

### yamlDocumentUrl?

> `optional` **yamlDocumentUrl?**: `string`

Url path for the OpenAPI YAML document.
