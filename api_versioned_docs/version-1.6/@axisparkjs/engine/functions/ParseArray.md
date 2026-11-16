# Function: ParseArray()

> **ParseArray**(`options?`): `object`

A decorator for applying the `ParseArrayPipeStep` to a method parameter. It returns an array from a string separated by commas (`?tags=a,b`), a single value (`?tags=a`) or an array (`?tags=a&tags=b`). The items of the strings are trimmed and the empty ones removed. The `items` option applies a step to each item, such as `ParseInt()`. If the parameter is missing, a `PipeStepParsingError` is thrown (use `Default([])` or `Optional()` before it); `minItems`, `maxItems` and `unique` throw a `PipeStepValidationError`.

```typescript
list(@Query('ids') @Pipe(Default([]), ParseArray({ items: ParseInt(), maxItems: 50 })) ids: number[]) {}
```

## Parameters

### options?

[`ParseArrayPipeStepOptions`](../interfaces/ParseArrayPipeStepOptions.md)

Optional settings: `separator`, `items`, `minItems`, `maxItems` and `unique`.

## Returns

`object`

A pipe decorator that applies the `ParseArrayPipeStep`.

### pipeStep

> **pipeStep**: *typeof* [`ParseArrayPipeStep`](../classes/ParseArrayPipeStep.md) = `ParseArrayPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`ParseArrayPipeStepConfig`](../interfaces/ParseArrayPipeStepConfig.md)
