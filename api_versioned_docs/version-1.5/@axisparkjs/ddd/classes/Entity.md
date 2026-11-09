# Abstract Class: Entity\<T\>

Base class for domain objects with identity.
Equality requires the same concrete entity class and equal identifiers.

## Extended by

- [`AggregateRoot`](AggregateRoot.md)

## Type Parameters

### T

`T` *extends* [`Identifier`](Identifier.md)

The entity identifier type.

## Constructors

### Constructor

> **new Entity**\<`T`\>(`id`): `Entity`\<`T`\>

Initializes a new instance of the Entity class.

#### Parameters

##### id

`T`

The unique identifier for the entity.

#### Returns

`Entity`\<`T`\>

## Properties

### \_id

> `protected` `readonly` **\_id**: `T`

## Accessors

### id

#### Get Signature

> **get** **id**(): `Readonly`\<`T`\>

Gets the unique identifier for the entity.

##### Returns

`Readonly`\<`T`\>

The unique identifier for the entity.

## Methods

### equals()

> **equals**(`other`): `boolean`

Determines whether the current entity is equal to another entity of the same type.

#### Parameters

##### other

`Entity`\<`T`\>

The other entity to compare with.

#### Returns

`boolean`

True if the entities are equal; otherwise, false.
