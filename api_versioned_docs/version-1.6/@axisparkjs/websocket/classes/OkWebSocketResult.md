# Class: OkWebSocketResult\<T\>

A class for representing WebSocket results with a body.

## Extends

- [`WebSocketResult`](WebSocketResult.md)\<`T`\>

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new OkWebSocketResult**\<`T`\>(`value`): `OkWebSocketResult`\<`T`\>

#### Parameters

##### value

`T`

#### Returns

`OkWebSocketResult`\<`T`\>

#### Overrides

[`WebSocketResult`](WebSocketResult.md).[`constructor`](WebSocketResult.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`WebSocketResult`](WebSocketResult.md).[`rc`](WebSocketResult.md#rc)

***

### value

> `readonly` **value**: `T`

#### Inherited from

[`WebSocketResult`](WebSocketResult.md).[`value`](WebSocketResult.md#value)

## Methods

### process()

> **process**(`context`): `Promise`\<`void`\>

Processes the result using the provided execution context.

#### Parameters

##### context

[`WebSocketContext`](../interfaces/WebSocketContext.md)

The execution context containing relevant information for processing.

#### Returns

`Promise`\<`void`\>

A promise resolving when the result has been processed.

#### Overrides

[`WebSocketResult`](WebSocketResult.md).[`process`](WebSocketResult.md#process)
