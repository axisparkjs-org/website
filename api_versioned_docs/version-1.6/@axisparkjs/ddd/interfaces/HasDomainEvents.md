# Interface: HasDomainEvents

Contract for objects that expose and clear their pending domain events.

## Methods

### pullDomainEvents()

> **pullDomainEvents**(): [`DomainEvent`](../classes/DomainEvent.md)[]

Pulls all domain events from the implementing class and clears the list of domain events. This method allows the implementing class to retrieve its domain events and reset its state.

#### Returns

[`DomainEvent`](../classes/DomainEvent.md)[]

An array of domain events that were associated with the implementing class.
