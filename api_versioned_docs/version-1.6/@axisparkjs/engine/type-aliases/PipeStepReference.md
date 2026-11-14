# Type Alias: PipeStepReference

> **PipeStepReference** = [`ClassType`](../../common/type-aliases/ClassType.md)\<[`PipeStep`](../interfaces/PipeStep.md)\> \| \{ `pipeStep`: [`ClassType`](../../common/type-aliases/ClassType.md)\<[`PipeStep`](../interfaces/PipeStep.md)\>; `PipeStepConfig`: [`PipeStepConfig`](PipeStepConfig.md); \}

A pipe step as it is given to `@Pipe()`: a class, or the result of a factory such as `ParseInt()`.
