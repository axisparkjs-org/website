# Variable: DEFAULT\_SHUTDOWN\_TIMEOUT

> `const` **DEFAULT\_SHUTDOWN\_TIMEOUT**: `25000` = `25_000`

The default maximum time to wait for the running jobs when the application stops, in milliseconds. It is lower than the 30 seconds
that orchestrators such as Kubernetes wait by default before killing the process, so the warning about the jobs still running is logged.
