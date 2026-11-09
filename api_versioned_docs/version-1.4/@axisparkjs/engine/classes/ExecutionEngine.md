# Class: ExecutionEngine

A class representing the execution engine for handling asynchronous execution flows.

## Implements

- [`Executable`](../../common/interfaces/Executable.md)

## Constructors

### Constructor

> **new ExecutionEngine**(`planGenerator`, `handlerInvoker`, `timeoutProcessor`, `resultProcessor`): `ExecutionEngine`

#### Parameters

##### planGenerator

[`ExecutionPlanner`](ExecutionPlanner.md)

##### handlerInvoker

[`HandlerInvoker`](HandlerInvoker.md)

##### timeoutProcessor

[`TimeoutProcessor`](TimeoutProcessor.md)

##### resultProcessor

[`ResultProcessor`](ResultProcessor.md)

#### Returns

`ExecutionEngine`

## Methods

### execute()

> **execute**(`context`): `Promise`\<`void`\>

Executes the provided execution context by generating an execution plan, invoking handlers, processing timeouts, and handling results. It manages the flow of execution, including before, context, catch, and after steps, while also handling errors and timeouts.

#### Parameters

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context to be processed.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the execution is complete.

#### Implementation of

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)
