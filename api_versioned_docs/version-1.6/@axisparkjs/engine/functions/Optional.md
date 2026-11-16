# Function: Optional()

> **Optional**(`options?`): `object`

A decorator for applying the `OptionalPipeStep` to a method parameter. When the parameter is `undefined` (and also when it is an empty string with `{ emptyString: true }`), the rest of the steps of the pipe are skipped and the handler receives `undefined`. Otherwise, the value continues to the next steps. It never fails.

```typescript
list(@Query('from') @Pipe(Optional(), ParseDate()) from: Date | undefined) {}
```

## Parameters

### options?

[`OptionalPipeStepOptions`](../interfaces/OptionalPipeStepOptions.md)

Optional settings: `emptyString` also skips empty strings.

## Returns

`object`

A pipe decorator that applies the `OptionalPipeStep`.

### pipeStep

> **pipeStep**: *typeof* [`OptionalPipeStep`](../classes/OptionalPipeStep.md) = `OptionalPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`OptionalPipeStepConfig`](../interfaces/OptionalPipeStepConfig.md)
