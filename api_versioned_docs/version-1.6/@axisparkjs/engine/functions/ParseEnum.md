# Function: ParseEnum()

> **ParseEnum**(`enumOrValues`, `options?`): `object`

A decorator for applying the `ParseEnumPipeStep` to a method parameter. It accepts a TypeScript enum (string or numeric) or an array of values, and returns the matching value of the enum: `'1'` is returned as `1` for a numeric enum. With `{ ignoreCase: true }`, the strings are compared without case. If the value is not allowed, a `PipeStepParsingError` listing the allowed values is thrown.

```typescript
list(@Query('status') @Pipe(Default(OrderStatus.Open), ParseEnum(OrderStatus)) status: OrderStatus) {}
```

## Parameters

### enumOrValues

[`EnumLike`](../type-aliases/EnumLike.md)

The enum or the array of allowed values.

### options?

[`ParseEnumPipeStepOptions`](../interfaces/ParseEnumPipeStepOptions.md)

Optional settings: `ignoreCase` compares the strings without case.

## Returns

`object`

A pipe decorator that applies the `ParseEnumPipeStep`.

### pipeStep

> **pipeStep**: *typeof* [`ParseEnumPipeStep`](../classes/ParseEnumPipeStep.md) = `ParseEnumPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`ParseEnumPipeStepConfig`](../interfaces/ParseEnumPipeStepConfig.md)
