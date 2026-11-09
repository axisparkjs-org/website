# Abstract Class: ValueObject\<T\>

ValueObject is an abstract class that represents a value object in a domain-driven design context. It provides a base for creating value objects that encapsulate a specific value and provide equality comparison based on that value. Subclasses of ValueObject can be created to represent specific types of values, allowing for strong typing and encapsulation of value logic.

## Extended by

- [`Identifier`](Identifier.md)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new ValueObject**\<`T`\>(`value`): `ValueObject`\<`T`\>

Initializes a new instance of the ValueObject class.

#### Parameters

##### value

`T`

The value for the value object.

#### Returns

`ValueObject`\<`T`\>

## Properties

### \_value

> `protected` `readonly` **\_value**: `T`

## Accessors

### value

#### Get Signature

> **get** **value**(): `Readonly`\<`T`\>

Gets the value for the value object.

##### Returns

`Readonly`\<`T`\>

The value for the value object.

## Methods

### equals()

> **equals**(`vo`): `boolean`

Determines whether the current value object is equal to another value object of the same type.

#### Parameters

##### vo

`ValueObject`\<`T`\>

The other value object to compare with.

#### Returns

`boolean`

True if the value objects are equal; otherwise, false.

***

### toString()

> `abstract` **toString**(): `string`

Converts the value object to a string representation.

#### Returns

`string`

The string representation of the value object.

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
