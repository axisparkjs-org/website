# Interface: JobExclusiveOptions

The options of an exclusive job.

## Properties

### mode?

> `optional` **mode?**: [`JobExclusiveMode`](../type-aliases/JobExclusiveMode.md)

How the job is coordinated between the instances. Defaults to `once-per-occurrence`.

***

### ttl?

> `optional` **ttl?**: `number`

The time to live of the lock in milliseconds. In `once-per-occurrence` mode, it defaults to the time between two occurrences
for cron and interval jobs, and to one minute for date and timeout jobs. In `no-overlap` mode, it defaults to 30 seconds and the lock
is extended every half of it while the job runs.
