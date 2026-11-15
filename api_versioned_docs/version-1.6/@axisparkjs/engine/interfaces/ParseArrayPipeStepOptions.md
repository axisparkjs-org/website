# Interface: ParseArrayPipeStepOptions

## Extended by

- [`ParseArrayPipeStepConfig`](ParseArrayPipeStepConfig.md)

## Properties

### items?

> `optional` **items?**: [`PipeStepReference`](../type-aliases/PipeStepReference.md)

A step applied to each item, such as `ParseInt()` or `ParseUuid()`.

***

### maxItems?

> `optional` **maxItems?**: `number`

Maximum number of items.

***

### minItems?

> `optional` **minItems?**: `number`

Minimum number of items.

***

### separator?

> `optional` **separator?**: `string`

The separator of the items of a string. Defaults to `,`.

***

### unique?

> `optional` **unique?**: `boolean`

Reject arrays with repeated items, compared after the `items` step. Defaults to `false`.
