# Class: HandlerInvoker

A class responsible for invoking execution handlers within a given execution context. It utilizes the `ParameterGenerator` to generate parameters for the handler, the `PipeGenerator` to generate pipes for processing the parameters, and the `PipeProcessor` to process the generated pipes. The class also uses an `Injector` to retrieve instances of the target classes associated with the execution handlers. The `invoke` method orchestrates the entire process of generating parameters, processing them through pipes, and invoking the handler method with the processed arguments.

The parameters and the pipes of a handler are read from the metadata once, the first time the handler is invoked, and kept by the identity
of the class and the property key. Each invocation only resolves the values of the parameters and runs the pipes, so the request hot path
does not read metadata.

The instances of the singleton targets (middlewares, guards, interceptors, filters and handlers) are kept after their first resolution, so
each execution only resolves the scoped and transient targets with the injector.

## Constructors

### Constructor

> **new HandlerInvoker**(`parameterGenerator`, `pipeGenerator`, `pipeProcessor`, `injector`): `HandlerInvoker`

#### Parameters

##### parameterGenerator

[`ParameterGenerator`](ParameterGenerator.md)

##### pipeGenerator

[`PipeGenerator`](PipeGenerator.md)

##### pipeProcessor

[`PipeProcessor`](PipeProcessor.md)

##### injector

[`Injector`](../../di/classes/Injector.md)

#### Returns

`HandlerInvoker`

## Methods

### invoke()

> **invoke**(`handler`, `context`): `Promise`\<`unknown`\>

Invokes the specified execution handler within the provided execution context. It resolves the parameters of the handler, processes them through pipes, and invokes the handler method with the processed arguments.

#### Parameters

##### handler

[`ExecutionHandler`](../interfaces/ExecutionHandler.md)

The execution handler to be invoked.

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context in which the handler is invoked.

#### Returns

`Promise`\<`unknown`\>

A promise resolving to the result of the handler invocation.
