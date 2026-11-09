# Function: DateSchedule()

> **DateSchedule**(`value`): `MethodDecorator`

A decorator for defining date-based jobs.

## Parameters

### value

`Date` \| `Partial`\<`Pick`\<[`JobMetadata`](../type-aliases/JobMetadata.md), `"name"` \| `"disabled"`\>\> & `Pick`\<[`DateJobMetadata`](../interfaces/DateJobMetadata.md), `"value"`\>

The date value or job parameters.

## Returns

`MethodDecorator`

A method decorator.
