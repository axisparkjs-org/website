# Function: Cron()

> **Cron**(`value`): `MethodDecorator`

A decorator for defining cron jobs.

## Parameters

### value

`string` \| `Partial`\<`Pick`\<`JobMetadata`, `"name"` \| `"disabled"`\>\> & `Pick`\<`CronJobMetadata`, `"timeZone"` \| `"value"`\>

The cron expression or job parameters.

## Returns

`MethodDecorator`

A method decorator.
