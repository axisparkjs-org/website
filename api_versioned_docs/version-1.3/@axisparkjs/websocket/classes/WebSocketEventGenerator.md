# Class: WebSocketEventGenerator

A generator for creating WebSocket event definitions based on WebSocket metadata.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`WebSocketEventDefinition`](WebSocketEventDefinition.md)[]\>

## Constructors

### Constructor

> **new WebSocketEventGenerator**(`websocketEngine`, `scopedContainerManager`): `WebSocketEventGenerator`

#### Parameters

##### websocketEngine

[`WebSocketEngine`](WebSocketEngine.md)

##### scopedContainerManager

[`ScopedContainerManager`](../../di/classes/ScopedContainerManager.md)

#### Returns

`WebSocketEventGenerator`

## Methods

### generate()

> **generate**(): `Promise`\<[`WebSocketEventDefinition`](WebSocketEventDefinition.md)[]\>

Generates WebSocket event definitions based on WebSockets metadata.

#### Returns

`Promise`\<[`WebSocketEventDefinition`](WebSocketEventDefinition.md)[]\>

An array of WebSocket event definitions.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)
