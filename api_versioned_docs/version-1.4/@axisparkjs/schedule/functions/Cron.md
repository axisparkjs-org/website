# Function: Cron()

> **Cron**(`value`): `MethodDecorator`

A decorator for defining cron jobs.

## Parameters

### value

`string` \| `Partial`\<`Pick`\<[`JobMetadata`](../type-aliases/JobMetadata.md), `"name"` \| `"disabled"`\>\> & `Pick`\<[`CronJobMetadata`](../interfaces/CronJobMetadata.md), `"timeZone"` \| `"value"`\>

The cron expression or job parameters.

## Returns

`MethodDecorator`

A method decorator.
