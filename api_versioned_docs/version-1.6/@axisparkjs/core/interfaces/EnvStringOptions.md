# Interface: EnvStringOptions

Options of `EnvReader.string()`.

## Properties

### default?

> `optional` **default?**: `string`

Value used when the variable is not defined or is empty. Without it, the variable is required.

***

### minLength?

> `optional` **minLength?**: `number`

Minimum number of characters of the value.

***

### pattern?

> `optional` **pattern?**: `RegExp`

Regular expression that the value must match.
