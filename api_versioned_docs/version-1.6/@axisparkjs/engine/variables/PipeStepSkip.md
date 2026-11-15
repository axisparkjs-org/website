# Variable: PipeStepSkip

> `const` **PipeStepSkip**: unique `symbol`

A value that a pipe step returns to stop the pipe of its parameter. The rest of the steps are skipped and the handler receives `undefined`. It is returned by `Optional()` when the parameter is missing.
