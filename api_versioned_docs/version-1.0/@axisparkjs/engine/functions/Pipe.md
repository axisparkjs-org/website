# Function: Pipe()

> **Pipe**(...`steps`): `ClassDecorator` & `MethodDecorator` & `ParameterDecorator`

A decorator for defining pipes in the dependency injection system.

## Parameters

### steps

...([`ClassType`](../../common/type-aliases/ClassType.md)\<`PipeStep`\<`unknown`, `unknown`\>\> \| \{ `pipeStep`: [`ClassType`](../../common/type-aliases/ClassType.md)\<`PipeStep`\<`unknown`, `unknown`\>\>; `PipeStepConfig`: `PipeStepConfig`; \})[]

The steps to include in the pipe.

## Returns

`ClassDecorator` & `MethodDecorator` & `ParameterDecorator`

A pipe decorator.
