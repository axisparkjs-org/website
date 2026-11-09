# Abstract Class: Identifier\<T\>

Identifier is an abstract class that represents a unique identifier for entities in a domain-driven design context. It extends the ValueObject class and provides a base for creating specific identifier types that can be used to uniquely identify entities within the domain. Subclasses of Identifier can be created to represent different types of identifiers, allowing for strong typing and encapsulation of identifier logic.

## Extends

- [`ValueObject`](ValueObject.md)\<`T`\>

## Type Parameters

### T

`T` = `string`

## Constructors

### Constructor

> **new Identifier**\<`T`\>(`value`): `Identifier`\<`T`\>

Initializes a new instance of the ValueObject class.

#### Parameters

##### value

`T`

The value for the value object.

#### Returns

`Identifier`\<`T`\>

#### Inherited from

[`ValueObject`](ValueObject.md).[`constructor`](ValueObject.md#constructor)

## Properties

### \_value

> `protected` `readonly` **\_value**: `T`

#### Inherited from

[`ValueObject`](ValueObject.md).[`_value`](ValueObject.md#_value)

## Accessors

### value

#### Get Signature

> **get** **value**(): `Readonly`\<`T`\>

Gets the value for the value object.

##### Returns

`Readonly`\<`T`\>

The value for the value object.

#### Inherited from

[`ValueObject`](ValueObject.md).[`value`](ValueObject.md#value)

## Methods

### equals()

> **equals**(`vo`): `boolean`

Determines whether the current value object is equal to another value object of the same type.

#### Parameters

##### vo

[`ValueObject`](ValueObject.md)\<`T`\>

The other value object to compare with.

#### Returns

`boolean`

True if the value objects are equal; otherwise, false.

#### Inherited from

[`ValueObject`](ValueObject.md).[`equals`](ValueObject.md#equals)

***

### toString()

> **toString**(): `string`

Converts the identifier to a string representation.

#### Returns

`string`

The string representation of the identifier.

#### Overrides

[`ValueObject`](ValueObject.md).[`toString`](ValueObject.md#tostring)

***

### validate()

> `abstract` `protected` **validate**(`value`): `void`

Validates the value for the value object.

#### Parameters

##### value

`T`

The value to validate.

#### Returns

`void`

#### Inherited from

[`ValueObject`](ValueObject.md).[`validate`](ValueObject.md#validate)
