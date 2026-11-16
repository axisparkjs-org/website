# Abstract Class: AggregateRoot\<T\>

Entity base that buffers domain events raised by an aggregate.
Events remain in memory until pulled or cleared; this class does not publish them.

## Extends

- [`Entity`](Entity.md)\<`T`\>

## Type Parameters

### T

`T` *extends* [`Identifier`](Identifier.md)

## Implements

- [`HasDomainEvents`](../interfaces/HasDomainEvents.md)

## Constructors

### Constructor

> **new AggregateRoot**\<`T`\>(`id`): `AggregateRoot`\<`T`\>

Initializes a new instance of the Entity class.

#### Parameters

##### id

`T`

The unique identifier for the entity.

#### Returns

`AggregateRoot`\<`T`\>

#### Inherited from

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### \_id

> `protected` `readonly` **\_id**: `T`

#### Inherited from

[`Entity`](Entity.md).[`_id`](Entity.md#_id)

## Accessors

### id

#### Get Signature

> **get** **id**(): `Readonly`\<`T`\>

Gets the unique identifier for the entity.

##### Returns

`Readonly`\<`T`\>

The unique identifier for the entity.

#### Inherited from

[`Entity`](Entity.md).[`id`](Entity.md#id)

## Methods

### addDomainEvent()

> **addDomainEvent**(`event`): `void`

Adds a domain event to the aggregate root's list of domain events. This method allows the aggregate root to track events that have occurred within its context, which can be used for event sourcing or other domain-driven design patterns.

#### Parameters

##### event

[`DomainEvent`](DomainEvent.md)

The domain event to be added to the aggregate root's list of domain events.

#### Returns

`void`

***

### clearDomainEvents()

> **clearDomainEvents**(): `void`

Clears all domain events from the aggregate root. This method allows the aggregate root to reset its state.

#### Returns

`void`

***

### equals()

> **equals**(`other`): `boolean`

Determines whether the current entity is equal to another entity of the same type.

#### Parameters

##### other

[`Entity`](Entity.md)\<`T`\>

The other entity to compare with.

#### Returns

`boolean`

True if the entities are equal; otherwise, false.

#### Inherited from

[`Entity`](Entity.md).[`equals`](Entity.md#equals)

***

### pullDomainEvents()

> **pullDomainEvents**(): [`DomainEvent`](DomainEvent.md)[]

Pulls all domain events from the aggregate root and clears the list of domain events. This method allows the aggregate root to retrieve its domain events and reset its state.

#### Returns

[`DomainEvent`](DomainEvent.md)[]

An array of domain events that were associated with the aggregate root.

#### Implementation of

[`HasDomainEvents`](../interfaces/HasDomainEvents.md).[`pullDomainEvents`](../interfaces/HasDomainEvents.md#pulldomainevents)
