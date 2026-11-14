# Function: CacheVary()

> **CacheVary**(...`headers`): `MethodDecorator` & `ClassDecorator`

Adds request headers to the cache key of a route, or of every route of a controller, decorated with `@Cache()`.
The requests with different values of these headers are cached separately, for example one entry per language with
`@CacheVary('accept-language')`. The headers of a method replace the headers of its class.

## Parameters

### headers

...`string`[]

The names of the headers. They are case-insensitive.

## Returns

`MethodDecorator` & `ClassDecorator`

A cache vary decorator.
