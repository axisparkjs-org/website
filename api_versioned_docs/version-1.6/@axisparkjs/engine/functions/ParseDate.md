# Function: ParseDate()

> **ParseDate**(`options?`): `object`

A decorator for applying the `ParseDatePipeStep` to a method parameter. It converts an ISO 8601 string to a `Date`: a date (`2026-03-01`, read as midnight UTC) or a date-time with `Z` or an offset (`2026-03-01T10:30:00Z`, `2026-03-01T10:30:00+02:00`). Date-times without an offset are rejected, so they are never read as local time. Invalid dates such as `2026-02-30` are rejected. With `{ dateOnly: true }`, only `YYYY-MM-DD` is accepted. If the value is not valid, a `PipeStepParsingError` is thrown.

```typescript
list(@Query('from') @Pipe(Optional(), ParseDate()) from: Date | undefined) {}
```

## Parameters

### options?

[`ParseDatePipeStepOptions`](../interfaces/ParseDatePipeStepOptions.md)

Optional settings: `dateOnly` accepts only dates without time.

## Returns

`object`

A pipe decorator that applies the `ParseDatePipeStep`.

### pipeStep

> **pipeStep**: *typeof* [`ParseDatePipeStep`](../classes/ParseDatePipeStep.md) = `ParseDatePipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`ParseDatePipeStepConfig`](../interfaces/ParseDatePipeStepConfig.md)
