# Class: HandledResult

A result type that represents a handled operation with no return value.

## Extends

- [`ResultDefinition`](ResultDefinition.md)\<`void`\>

## Constructors

### Constructor

> **new HandledResult**(): `HandledResult`

#### Returns

`HandledResult`

#### Overrides

[`ResultDefinition`](ResultDefinition.md).[`constructor`](ResultDefinition.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`ResultDefinition`](ResultDefinition.md).[`rc`](ResultDefinition.md#rc)

***

### value

> `readonly` **value**: `void`

#### Inherited from

[`ResultDefinition`](ResultDefinition.md).[`value`](ResultDefinition.md#value)

## Methods

### process()

> **process**(): `Promise`\<`void`\>

Processes the result using the provided execution context.

#### Returns

`Promise`\<`void`\>

A promise resolving when the result has been processed.

#### Overrides

[`ResultDefinition`](ResultDefinition.md).[`process`](ResultDefinition.md#process)
