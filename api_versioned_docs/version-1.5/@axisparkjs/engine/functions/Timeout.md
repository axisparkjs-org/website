# Function: Timeout()

> **Timeout**(`time`): `MethodDecorator` & `ClassDecorator`

A decorator for defining a timeout for a method or class.
The timeout of a method takes precedence over the timeout of its class, and both take precedence over the default timeout of the transport.

## Parameters

### time

`number`

The timeout duration in milliseconds. It must be a number greater than 0.

## Returns

`MethodDecorator` & `ClassDecorator`

A timeout decorator.

## Throws

An error when the time is not a number greater than 0. Use `@NoTimeout()` to disable the timeout.
