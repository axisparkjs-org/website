# Class: OpenApiDocumentDefinition

A class for defining the structure of an OpenAPI document.

## Constructors

### Constructor

> **new OpenApiDocumentDefinition**(`document`): `OpenApiDocumentDefinition`

#### Parameters

##### document

`object`

#### Returns

`OpenApiDocumentDefinition`

## Methods

### toJson()

> **toJson**(`pretty?`): `string`

Returns the OpenAPI document as a JSON string.

#### Parameters

##### pretty?

`boolean` = `true`

Whether to format the JSON string with indentation.

#### Returns

`string`

The OpenAPI document as a JSON string.

***

### toObject()

> **toObject**(): `object`

Returns the OpenAPI document as an object.

#### Returns

`object`

The OpenAPI document.

***

### toYaml()

> **toYaml**(`indent?`): `string`

Returns the OpenAPI document as a YAML string.

#### Parameters

##### indent?

`number` = `2`

The number of spaces to use for indentation.

#### Returns

`string`

The OpenAPI document as a YAML string.
