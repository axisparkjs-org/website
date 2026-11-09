# Function: Timeout()

> **Timeout**(`value`): `MethodDecorator`

A decorator for defining timeout jobs.

## Parameters

### value

`number` \| `Partial`\<`Pick`\<`JobMetadata`, `"name"` \| `"disabled"`\>\> & `Pick`\<`TimeoutJobMetadata`, `"value"`\>

The timeout value or job parameters.

## Returns

`MethodDecorator`

A method decorator.
