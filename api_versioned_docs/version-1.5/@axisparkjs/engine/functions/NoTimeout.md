# Function: NoTimeout()

> **NoTimeout**(): `MethodDecorator` & `ClassDecorator`

A decorator for disabling the timeout of a method or class.
On a method, it disables the timeout of its class and the default timeout of the transport.
On a class, it disables the timeout of all its handlers, unless a method has its own `@Timeout()`.

## Returns

`MethodDecorator` & `ClassDecorator`

A no timeout decorator.
