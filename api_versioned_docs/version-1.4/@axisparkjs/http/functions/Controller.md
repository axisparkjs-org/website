# Function: Controller()

> **Controller**(`path?`): `ClassDecorator`

A decorator for defining a controller with an optional path prefix and host pattern.

## Parameters

### path?

`string` \| `Omit`\<[`ControllerMetadata`](../interfaces/ControllerMetadata.md), `"path"` \| `"target"`\> & `object` = `''`

The route path or controller options.

## Returns

`ClassDecorator`

A class decorator.
