# Function: Interval()

> **Interval**(`value`): `MethodDecorator`

A decorator for defining interval jobs.

## Parameters

### value

`number` \| `Partial`\<`Pick`\<[`JobMetadata`](../type-aliases/JobMetadata.md), `"name"` \| `"exclusive"` \| `"disabled"`\>\> & `Pick`\<[`IntervalJobMetadata`](../interfaces/IntervalJobMetadata.md), `"value"`\>

The interval value or job parameters.

## Returns

`MethodDecorator`

A method decorator.
