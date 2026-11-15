# Class: ExecutionPlanner

A class responsible for generating execution plans based on the provided execution context. It utilizes the `StepGenerator` to generate steps and the `TimeoutGenerator` to generate timeout definitions and the `CacheGenerator` to generate cache definitions. The generated execution plan includes before, after, catch, and context steps, as well as an optional timeout definition and an optional cache definition. The class also caches registered plans for efficient reuse, by the identity of the target class and the property key, so two classes with the same name never share a plan.

## Constructors

### Constructor

> **new ExecutionPlanner**(`timeoutGenerator`, `stepGenerator`, `cacheGenerator`): `ExecutionPlanner`

#### Parameters

##### timeoutGenerator

[`TimeoutGenerator`](TimeoutGenerator.md)

##### stepGenerator

[`StepGenerator`](StepGenerator.md)

##### cacheGenerator

[`CacheGenerator`](CacheGenerator.md)

#### Returns

`ExecutionPlanner`

## Methods

### plan()

> **plan**(`context`): `Promise`\<[`ExecutionPlan`](../interfaces/ExecutionPlan.md)\>

Generates an execution plan for the provided execution context.

#### Parameters

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context for which to generate a plan.

#### Returns

`Promise`\<[`ExecutionPlan`](../interfaces/ExecutionPlan.md)\>

A promise resolving to the generated execution plan.
