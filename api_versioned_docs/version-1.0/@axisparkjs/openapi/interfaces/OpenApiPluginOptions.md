# Interface: OpenApiPluginOptions

Interface representing the options for configuring the OpenAPI plugin.

## Extends

- [`PluginOptions`](../../core/interfaces/PluginOptions.md)

## Properties

### docsUrl?

> `optional` **docsUrl?**: `string`

***

### exposeJson?

> `optional` **exposeJson?**: `boolean`

***

### exposeYaml?

> `optional` **exposeYaml?**: `boolean`

***

### globalPrefix?

> `optional` **globalPrefix?**: `boolean`

***

### info

> **info**: `object`

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

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)

***

### yamlDocumentUrl?

> `optional` **yamlDocumentUrl?**: `string`
