# Abstract Class: DomainEvent

Base class for domain facts, timestamped when the event is constructed.

## Constructors

### Constructor

> **new DomainEvent**(): `DomainEvent`

Initializes a new instance of the DomainEvent class. The constructor sets the occurredOn property to the current date and time, indicating when the event was created. Subclasses can call this constructor to ensure that the event has a timestamp associated with it.

#### Returns

`DomainEvent`

## Accessors

### occurredOn

#### Get Signature

> **get** **occurredOn**(): `Date`

Gets the date and time when the domain event occurred. This property provides access to the timestamp of the event, allowing consumers of the event to determine when it was created. The occurredOn property is read-only and is set during the construction of the event instance.

##### Returns

`Date`

A Date object representing the date and time when the domain event occurred.
