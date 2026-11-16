# Function: Cache()

> **Cache**(`options?`): `MethodDecorator` & `ClassDecorator`

Caches the results of a handler, or of every handler of a class. While a result is valid, the next equal requests return it
without invoking the handler. The middlewares, guards and before interceptors still run on every request.
The cache is opt-in: a handler is never cached unless it, or its class, has this decorator.

## Parameters

### options?

[`CacheConfiguration`](../interfaces/CacheConfiguration.md) = `{}`

The time to live of the results and an optional custom key. The options of a method replace the options of its class.

## Returns

`MethodDecorator` & `ClassDecorator`

A cache decorator.

## Throws

An error when the `ttl` is not a number greater than 0.
