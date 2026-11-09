# Function: Interval()

> **Interval**(`value`): `MethodDecorator`

A decorator for defining interval jobs.

## Parameters

### value

`number` \| `Partial`\<`Pick`\<`JobMetadata`, `"name"` \| `"disabled"`\>\> & `Pick`\<`IntervalJobMetadata`, `"value"`\>

The interval value or job parameters.

## Returns

`MethodDecorator`

A method decorator.
