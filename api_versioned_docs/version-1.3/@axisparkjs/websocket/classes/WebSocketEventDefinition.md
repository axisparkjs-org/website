# Class: WebSocketEventDefinition

A class representing the definition of an WebSocket event handler.

## Constructors

### Constructor

> **new WebSocketEventDefinition**(`target`, `propertyKey`, `namespace`, `event`, `handler`): `WebSocketEventDefinition`

#### Parameters

##### target

[`ClassType`](../../common/type-aliases/ClassType.md)

##### propertyKey

`string` \| `symbol`

##### namespace

`string`

##### event

`string` \| `RegExp`

##### handler

[`WebSocketEventHandler`](../type-aliases/WebSocketEventHandler.md)

#### Returns

`WebSocketEventDefinition`

## Properties

### event

> `readonly` **event**: `string` \| `RegExp`

***

### handler

> `readonly` **handler**: [`WebSocketEventHandler`](../type-aliases/WebSocketEventHandler.md)

***

### namespace

> `readonly` **namespace**: `string`

***

### propertyKey

> `readonly` **propertyKey**: `string` \| `symbol`

***

### target

> `readonly` **target**: [`ClassType`](../../common/type-aliases/ClassType.md)
