# Interface: EnvUrlOptions

Options of `EnvReader.url()`.

## Properties

### default?

> `optional` **default?**: `string`

Value used when the variable is not defined or is empty. Without it, the variable is required.

***

### protocols?

> `optional` **protocols?**: `string`[]

Allowed protocols, without the trailing colon (for example `['http', 'https']`). By default, any protocol is accepted.
