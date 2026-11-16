# Class: McpEngine

A class for running MCP requests through the execution engine.

## Implements

- [`Executable`](../../common/interfaces/Executable.md)

## Constructors

### Constructor

> **new McpEngine**(`executionEngine`): `McpEngine`

#### Parameters

##### executionEngine

[`ExecutionEngine`](../../engine/classes/ExecutionEngine.md)

#### Returns

`McpEngine`

## Methods

### execute()

> **execute**(`context`): `Promise`\<`void`\>

Executes the MCP request of the provided context.

#### Parameters

##### context

[`McpContext`](../interfaces/McpContext.md)

The MCP context for execution.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)
