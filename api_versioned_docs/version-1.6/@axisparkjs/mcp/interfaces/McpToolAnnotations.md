# Interface: McpToolAnnotations

Hints that describe the behavior of a tool to the clients. They are hints, not guarantees.

## Properties

### destructiveHint?

> `optional` **destructiveHint?**: `boolean`

If true, the tool may perform destructive updates. Only meaningful when `readOnlyHint` is false.

***

### idempotentHint?

> `optional` **idempotentHint?**: `boolean`

If true, calling the tool repeatedly with the same arguments has no additional effect.

***

### openWorldHint?

> `optional` **openWorldHint?**: `boolean`

If true, the tool may interact with an open world of external entities.

***

### readOnlyHint?

> `optional` **readOnlyHint?**: `boolean`

If true, the tool does not modify its environment.

***

### title?

> `optional` **title?**: `string`

A human-readable title for the tool.
