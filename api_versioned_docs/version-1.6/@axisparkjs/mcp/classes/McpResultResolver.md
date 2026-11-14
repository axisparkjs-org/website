# Class: McpResultResolver

A resolver for creating MCP results from the values returned by the handlers.

## Implements

- [`ResultResolver`](../../engine/classes/ResultResolver.md)

## Constructors

### Constructor

> **new McpResultResolver**(): `McpResultResolver`

#### Returns

`McpResultResolver`

## Methods

### resolve()

> **resolve**(`result`): [`ResultDefinition`](../../engine/classes/ResultDefinition.md)

Resolves an unknown value into an MCP result.

#### Parameters

##### result

`unknown`

The value returned by the handler.

#### Returns

[`ResultDefinition`](../../engine/classes/ResultDefinition.md)

The MCP result.

#### Implementation of

[`ResultResolver`](../../engine/classes/ResultResolver.md).[`resolve`](../../engine/classes/ResultResolver.md#resolve)
