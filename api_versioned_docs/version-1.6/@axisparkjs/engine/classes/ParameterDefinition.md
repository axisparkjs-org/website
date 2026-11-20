# Class: ParameterDefinition

A definition for a method parameter that includes metadata and value handling.

## Properties

### field?

> `readonly` `optional` **field?**: `string`

***

### originalValue

> **originalValue**: `any`

***

### parameter

> `readonly` **parameter**: `string`

***

### parameterIndex

> `readonly` **parameterIndex**: `number`

***

### propertyKey

> `readonly` **propertyKey**: `string` \| `symbol`

***

### target

> `readonly` **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

## Accessors

### value

#### Get Signature

> **get** **value**(): `any`

##### Returns

`any`

## Methods

### clone()

> **clone**(): `ParameterDefinition`

Creates a copy of the definition without its value. The definitions generated once per handler are copied for each invocation, because
the pipes change the value of the parameter.

#### Returns

`ParameterDefinition`

A new definition with the same metadata and no value.

***

### setValue()

> **setValue**(`value`): `void`

#### Parameters

##### value

`any`

#### Returns

`void`

***

### fromMetadata()

> `static` **fromMetadata**(`metadata`): `ParameterDefinition`

#### Parameters

##### metadata

[`ParameterMetadata`](../interfaces/ParameterMetadata.md)

#### Returns

`ParameterDefinition`
