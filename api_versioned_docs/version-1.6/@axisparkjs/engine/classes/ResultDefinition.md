# Abstract Class: ResultDefinition\<T\>

An abstract class representing the definition of a result in the execution context.
It encapsulates the value and return code of the result.

## Extended by

- [`HandledResult`](HandledResult.md)
- [`HttpResult`](../../http/classes/HttpResult.md)
- [`McpResult`](../../mcp/classes/McpResult.md)
- [`WebSocketResult`](../../websocket/classes/WebSocketResult.md)

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new ResultDefinition**\<`T`\>(`value`, `rc`): `ResultDefinition`\<`T`\>

#### Parameters

##### value

`T`

##### rc

`number`

#### Returns

`ResultDefinition`\<`T`\>

## Properties

### rc

> `readonly` **rc**: `number`

***

### value

> `readonly` **value**: `T`

## Methods

### process()

> `abstract` **process**(`context`): `Promise`\<`void`\>

Processes the result using the provided execution context.

#### Parameters

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context containing relevant information for processing.

#### Returns

`Promise`\<`void`\>

A promise resolving when the result has been processed.
