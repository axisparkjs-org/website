# Class: OkMcpResult\<T\>

A result for any value returned by a handler. The value is converted according to the kind of request.

## Extends

- [`McpResult`](McpResult.md)\<`T`\>

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new OkMcpResult**\<`T`\>(`value`, `rc?`): `OkMcpResult`\<`T`\>

#### Parameters

##### value

`T`

##### rc?

`number` = `0`

#### Returns

`OkMcpResult`\<`T`\>

#### Inherited from

[`McpResult`](McpResult.md).[`constructor`](McpResult.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`McpResult`](McpResult.md).[`rc`](McpResult.md#rc)

***

### value

> `readonly` **value**: `T`

#### Inherited from

[`McpResult`](McpResult.md).[`value`](McpResult.md#value)

## Methods

### process()

> **process**(`context`): `Promise`\<`void`\>

Processes the result using the provided execution context.

#### Parameters

##### context

[`McpContext`](../interfaces/McpContext.md)

The execution context containing relevant information for processing.

#### Returns

`Promise`\<`void`\>

A promise resolving when the result has been processed.

#### Overrides

[`McpResult`](McpResult.md).[`process`](McpResult.md#process)
