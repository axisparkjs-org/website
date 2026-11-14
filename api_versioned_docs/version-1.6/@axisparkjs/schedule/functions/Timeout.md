# Function: Timeout()

> **Timeout**(`value`): `MethodDecorator`

A decorator for defining timeout jobs.

## Parameters

### value

`number` \| `Partial`\<`Pick`\<[`JobMetadata`](../type-aliases/JobMetadata.md), `"name"` \| `"exclusive"` \| `"disabled"`\>\> & `Pick`\<[`TimeoutJobMetadata`](../interfaces/TimeoutJobMetadata.md), `"value"`\>

The timeout value or job parameters.

## Returns

`MethodDecorator`

A method decorator.
