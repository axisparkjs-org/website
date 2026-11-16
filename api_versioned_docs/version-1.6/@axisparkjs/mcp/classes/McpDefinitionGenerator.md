# Class: McpDefinitionGenerator

A generator for creating the MCP definitions (tools, resources and prompts) of the classes decorated with `@McpServer`.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`McpDefinitions`](../interfaces/McpDefinitions.md)\>

## Constructors

### Constructor

> **new McpDefinitionGenerator**(`mcpEngine`, `scopedContainerManager`, `schemaGenerator`): `McpDefinitionGenerator`

#### Parameters

##### mcpEngine

[`McpEngine`](McpEngine.md)

##### scopedContainerManager

[`ScopedContainerManager`](../../di/classes/ScopedContainerManager.md)

##### schemaGenerator

[`McpSchemaGenerator`](McpSchemaGenerator.md)

#### Returns

`McpDefinitionGenerator`

## Methods

### generate()

> **generate**(): `Promise`\<[`McpDefinitions`](../interfaces/McpDefinitions.md)\>

Generates the MCP definitions from the metadata of the scanned classes.

#### Returns

`Promise`\<[`McpDefinitions`](../interfaces/McpDefinitions.md)\>

The tools, resources and prompts of the application.

#### Throws

McpDefinitionError when two tools or prompts share a name, or two resources share a URI.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)
