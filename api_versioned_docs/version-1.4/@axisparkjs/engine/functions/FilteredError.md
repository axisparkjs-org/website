# Function: FilteredError()

> **FilteredError**(): `ParameterDecorator`

A decorator for injecting the filtered error into a method parameter. It uses the `Parameter` decorator to define the parameter with the name 'filtered-error'. This allows the decorated method to receive the filtered error from the execution context as an argument, enabling access to the error object within the method.

## Returns

`ParameterDecorator`

A parameter decorator that injects the filtered error.
