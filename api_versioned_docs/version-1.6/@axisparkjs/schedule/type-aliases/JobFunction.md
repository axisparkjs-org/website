# Type Alias: JobFunction

> **JobFunction** = (`signal`) => `Promise`\<`void`\>

The function of a job. It receives an `AbortSignal` that is aborted when the job is stopped, for example when the application stops,
so a long job can end early between its steps. Jobs that do not need it can ignore it.

## Parameters

### signal

`AbortSignal`

## Returns

`Promise`\<`void`\>
