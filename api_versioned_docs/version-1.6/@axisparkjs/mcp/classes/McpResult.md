# Abstract Class: McpResult\<T\>

An abstract class for representing MCP results. Processing a result stores the response of the request in the context.

## Extends

- [`ResultDefinition`](../../engine/classes/ResultDefinition.md)\<`T`\>

## Extended by

- [`OkMcpResult`](OkMcpResult.md)
- [`ContentMcpResult`](ContentMcpResult.md)
- [`MessagesMcpResult`](MessagesMcpResult.md)
- [`RawMcpResult`](RawMcpResult.md)
- [`ErrorMcpResult`](ErrorMcpResult.md)

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new McpResult**\<`T`\>(`value`, `rc?`): `McpResult`\<`T`\>

#### Parameters

##### value

`T`

##### rc?

`number` = `0`

#### Returns

`McpResult`\<`T`\>

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

[`McpContext`](../interfaces/McpContext.md)

The execution context containing relevant information for processing.

#### Returns

`Promise`\<`void`\>

A promise resolving when the result has been processed.

#### Overrides

[`ResultDefinition`](../../engine/classes/ResultDefinition.md).[`process`](../../engine/classes/ResultDefinition.md#process)
