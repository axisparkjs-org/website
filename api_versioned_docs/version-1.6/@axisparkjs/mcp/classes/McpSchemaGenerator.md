# Class: McpSchemaGenerator

A generator of JSON Schemas from the `class-validator` decorators of a class. It is used to publish the input schemas of the MCP tools and the arguments of the MCP prompts.

## Constructors

### Constructor

> **new McpSchemaGenerator**(): `McpSchemaGenerator`

#### Returns

`McpSchemaGenerator`

## Methods

### generate()

> **generate**(`type?`): [`JsonSchema`](../interfaces/JsonSchema.md)

Generates the JSON Schema of an object described by a class. Without a class, or for a class without validation metadata, it generates an open object schema.

#### Parameters

##### type?

`unknown`

The class decorated with `class-validator` decorators.

#### Returns

[`JsonSchema`](../interfaces/JsonSchema.md)

The JSON Schema of the class.

***

### isSchemaType()

> **isSchemaType**(`type`): `type is ClassType`

Checks whether a type can be described with a JSON Schema generated from its validation metadata.

#### Parameters

##### type

`unknown`

The type to check, usually the reflected type of a parameter.

#### Returns

`type is ClassType`

True when the type is a class other than the built-in types.
