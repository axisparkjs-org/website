# Function: ParseUuid()

> **ParseUuid**(`version?`): `object`

A decorator for applying the `ParseUuidPipeStep` to a method parameter. It checks that the parameter is a UUID (RFC 9562, versions 1 to 8, and the nil and max UUIDs when no version is given) and returns it in lower case. If the value is not a UUID, or not of the given version, a `PipeStepParsingError` is thrown.

```typescript
find(@Path('id') @Pipe(ParseUuid()) id: string) {}
```

## Parameters

### version?

[`UuidVersion`](../type-aliases/UuidVersion.md)

Optional version that the UUID must have, such as `4` or `7`.

## Returns

`object`

A pipe decorator that applies the `ParseUuidPipeStep`.

### pipeStep

> **pipeStep**: *typeof* [`ParseUuidPipeStep`](../classes/ParseUuidPipeStep.md) = `ParseUuidPipeStep`

### PipeStepConfig

> **PipeStepConfig**: [`ParseUuidPipeStepConfig`](../interfaces/ParseUuidPipeStepConfig.md)
