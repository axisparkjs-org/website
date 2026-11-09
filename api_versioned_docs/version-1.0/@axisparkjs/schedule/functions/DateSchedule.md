# Function: DateSchedule()

> **DateSchedule**(`value`): `MethodDecorator`

A decorator for defining date-based jobs.

## Parameters

### value

`Date` \| `Partial`\<`Pick`\<`JobMetadata`, `"name"` \| `"disabled"`\>\> & `Pick`\<`DateJobMetadata`, `"value"`\>

The date value or job parameters.

## Returns

`MethodDecorator`

A method decorator.
