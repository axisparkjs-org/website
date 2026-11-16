# Type Alias: JobExclusiveMode

> **JobExclusiveMode** = `"once-per-occurrence"` \| `"no-overlap"`

How an exclusive job is coordinated between the instances of the application:
- `once-per-occurrence`: each occurrence of the job runs on only one instance. The lock of an occurrence is not released, so an
  instance whose clock is slightly behind never runs the same occurrence again.
- `no-overlap`: the job never runs on two instances at the same time. The lock is extended while the job runs and released when it ends.
