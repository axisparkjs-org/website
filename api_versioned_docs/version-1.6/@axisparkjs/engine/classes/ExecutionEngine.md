# Class: ExecutionEngine

A class representing the execution engine for handling asynchronous execution flows.

## Implements

- [`Executable`](../../common/interfaces/Executable.md)

## Constructors

### Constructor

> **new ExecutionEngine**(`planGenerator`, `handlerInvoker`, `timeoutProcessor`, `resultProcessor`, `cacheProcessor`): `ExecutionEngine`

#### Parameters

##### planGenerator

[`ExecutionPlanner`](ExecutionPlanner.md)

##### handlerInvoker

[`HandlerInvoker`](HandlerInvoker.md)

##### timeoutProcessor

[`TimeoutProcessor`](TimeoutProcessor.md)

##### resultProcessor

[`ResultProcessor`](ResultProcessor.md)

##### cacheProcessor

[`CacheProcessor`](CacheProcessor.md)

#### Returns

`ExecutionEngine`

## Methods

### execute()

> **execute**(`context`): `Promise`\<`void`\>

Executes the provided execution context by generating an execution plan, invoking handlers, processing timeouts, and handling results. It manages the flow of execution, including before, context, catch, and after steps, while also handling errors and timeouts.
When the plan has a cache definition, the before steps run on every request, and the handler is only invoked when its result is not cached.
The after steps and the result processor run as usual, so a cached result produces the same response as a fresh one.

Every execution has its own `AbortSignal`, set in `context.signal`. It is aborted with an `ExecutionTimeoutError` before the timeout resolver runs, and with the reason of the signal given by the transport in `context.signal`, if any, when that signal is aborted. When the client stops waiting and the handler fails because of the abort, the catch steps are skipped, so the error is not handled as a failure of the handler, and the result processor receives `undefined` so the transport can end the request. The listener added to the signal of the transport is removed when the execution ends.

#### Parameters

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context to be processed.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the execution is complete.

#### Implementation of

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)
