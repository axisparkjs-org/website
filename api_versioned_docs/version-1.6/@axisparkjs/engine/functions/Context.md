# Function: Context()

> **Context**(): `ParameterDecorator`

A decorator for injecting the execution context into a method parameter. It uses the `Parameter` decorator to define the parameter with the name 'context'. This allows the decorated method to receive the current execution context as an argument, enabling access to properties such as error, transport, and scopedContainer within the method.

## Returns

`ParameterDecorator`

A parameter decorator that injects the execution context.
