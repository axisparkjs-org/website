# Interface: ExecutionPlan

An interface representing the execution plan for a specific execution context. It includes arrays of step definitions for before, after, catch, and context steps, as well as an optional timeout definition. The execution plan defines the sequence of steps to be executed in response to a request, allowing for structured handling of execution flows, error handling, and timeouts.

## Properties

### after

> **after**: [`AfterStepDefinition`](../classes/AfterStepDefinition.md)[]

***

### before

> **before**: ([`HandleStepDefinition`](../classes/HandleStepDefinition.md) \| [`CheckStepDefinition`](../classes/CheckStepDefinition.md) \| [`BeforeStepDefinition`](../classes/BeforeStepDefinition.md))[]

***

### catch

> **catch**: [`CatchStepDefinition`](../classes/CatchStepDefinition.md)[]

***

### context

> **context**: [`ExecutionContext`](ExecutionContext.md)

***

### timeout

> **timeout**: [`TimeoutDefinition`](../classes/TimeoutDefinition.md) \| `undefined`
