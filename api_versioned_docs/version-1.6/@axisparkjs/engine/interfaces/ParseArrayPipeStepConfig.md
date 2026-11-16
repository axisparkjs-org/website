# Interface: ParseArrayPipeStepConfig

## Extends

- [`PipeStepConfig`](../type-aliases/PipeStepConfig.md)
- [`ParseArrayPipeStepOptions`](ParseArrayPipeStepOptions.md)

## Indexable

> \[`key`: `string`\]: `unknown`

## Properties

### items?

> `optional` **items?**: [`PipeStepReference`](../type-aliases/PipeStepReference.md)

A step applied to each item, such as `ParseInt()` or `ParseUuid()`.

#### Inherited from

[`ParseArrayPipeStepOptions`](ParseArrayPipeStepOptions.md).[`items`](ParseArrayPipeStepOptions.md#items)

***

### maxItems?

> `optional` **maxItems?**: `number`

Maximum number of items.

#### Inherited from

[`ParseArrayPipeStepOptions`](ParseArrayPipeStepOptions.md).[`maxItems`](ParseArrayPipeStepOptions.md#maxitems)

***

### minItems?

> `optional` **minItems?**: `number`

Minimum number of items.

#### Inherited from

[`ParseArrayPipeStepOptions`](ParseArrayPipeStepOptions.md).[`minItems`](ParseArrayPipeStepOptions.md#minitems)

***

### separator?

> `optional` **separator?**: `string`

The separator of the items of a string. Defaults to `,`.

#### Inherited from

[`ParseArrayPipeStepOptions`](ParseArrayPipeStepOptions.md).[`separator`](ParseArrayPipeStepOptions.md#separator)

***

### unique?

> `optional` **unique?**: `boolean`

Reject arrays with repeated items, compared after the `items` step. Defaults to `false`.

#### Inherited from

[`ParseArrayPipeStepOptions`](ParseArrayPipeStepOptions.md).[`unique`](ParseArrayPipeStepOptions.md#unique)
