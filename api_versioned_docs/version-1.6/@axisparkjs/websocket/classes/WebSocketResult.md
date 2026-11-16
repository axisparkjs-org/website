# Abstract Class: WebSocketResult\<T\>

An abstract class for representing WebSocket results.

## Extends

- [`ResultDefinition`](../../engine/classes/ResultDefinition.md)\<`T`\>

## Extended by

- [`OkWebSocketResult`](OkWebSocketResult.md)
- [`ErrorWebSocketResult`](ErrorWebSocketResult.md)

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new WebSocketResult**\<`T`\>(`value`, `rc`): `WebSocketResult`\<`T`\>

#### Parameters

##### value

`T`

##### rc

`number`

#### Returns

`WebSocketResult`\<`T`\>

#### Overrides

[`ResultDefinition`](../../engine/classes/ResultDefinition.md).[`constructor`](../../engine/classes/ResultDefinition.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`ResultDefinition`](../../engine/classes/ResultDefinition.md).[`rc`](../../engine/classes/ResultDefinition.md#rc)

***

### value

> `readonly` **value**: `T`

#### Inherited from

[`ResultDefinition`](../../engine/classes/ResultDefinition.md).[`value`](../../engine/classes/ResultDefinition.md#value)

## Methods

### process()

> `abstract` **process**(`context`): `Promise`\<`void`\>

Processes the result using the provided execution context.

#### Parameters

##### context

[`WebSocketContext`](../interfaces/WebSocketContext.md)

The execution context containing relevant information for processing.

#### Returns

`Promise`\<`void`\>

A promise resolving when the result has been processed.

#### Overrides

[`ResultDefinition`](../../engine/classes/ResultDefinition.md).[`process`](../../engine/classes/ResultDefinition.md#process)
