# Class: ErrorWebSocketResult

An abstract class for representing WebSocket results.

## Extends

- [`WebSocketResult`](WebSocketResult.md)\<[`WebSocketError`](WebSocketError.md)\>

## Constructors

### Constructor

> **new ErrorWebSocketResult**(`error`): `ErrorWebSocketResult`

#### Parameters

##### error

[`WebSocketError`](WebSocketError.md)

#### Returns

`ErrorWebSocketResult`

#### Overrides

[`WebSocketResult`](WebSocketResult.md).[`constructor`](WebSocketResult.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`WebSocketResult`](WebSocketResult.md).[`rc`](WebSocketResult.md#rc)

***

### value

> `readonly` **value**: [`WebSocketError`](WebSocketError.md)

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
