# Class: WebSocketEngine

A class for handling WebSocket engine operations.

## Implements

- [`Executable`](../../common/interfaces/Executable.md)

## Constructors

### Constructor

> **new WebSocketEngine**(`executionEngine`): `WebSocketEngine`

#### Parameters

##### executionEngine

[`ExecutionEngine`](../../engine/classes/ExecutionEngine.md)

#### Returns

`WebSocketEngine`

## Methods

### execute()

> **execute**(`context`): `Promise`\<`void`\>

Executes the WebSocket engine with the provided context.

#### Parameters

##### context

[`WebSocketContext`](../interfaces/WebSocketContext.md)

The WebSocket context for execution.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)
