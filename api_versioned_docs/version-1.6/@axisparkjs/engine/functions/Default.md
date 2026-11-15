# Function: Default()

> **Default**(`value`, `options?`): `object`

A decorator for applying the `DefaultPipeStep` to a method parameter. It returns `value` when the parameter is `undefined` (and also when it is an empty string with `{ emptyString: true }`), so the next steps of the pipe receive the default value. Objects and arrays are copied for each execution. It never fails.

```typescript
list(@Query('page') @Pipe(Default(1), ParseInt()) page: number) {}
```

## Parameters

### value

`unknown`

The default value of the parameter.

### options?

[`DefaultPipeStepOptions`](../interfaces/DefaultPipeStepOptions.md)

Optional settings: `emptyString` also replaces empty strings.

## Returns

`object`

A pipe decorator that applies the `DefaultPipeStep` with the specified value.

### pipeStep

> **pipeStep**: *typeof* [`DefaultPipeStep`](../classes/DefaultPipeStep.md) = `DefaultPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`DefaultPipeStepConfig`](../interfaces/DefaultPipeStepConfig.md)
