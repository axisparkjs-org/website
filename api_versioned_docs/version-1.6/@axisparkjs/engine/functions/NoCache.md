# Function: NoCache()

> **NoCache**(): `MethodDecorator` & `ClassDecorator`

Disables the cache of a handler, or of every handler of a class.
On a method, it disables the `@Cache()` of its class. On a class, it disables the cache of its handlers, unless a method has its own `@Cache()`.

## Returns

`MethodDecorator` & `ClassDecorator`

A no cache decorator.
