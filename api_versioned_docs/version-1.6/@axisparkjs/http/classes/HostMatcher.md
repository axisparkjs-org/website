# Class: HostMatcher

Selects routes whose host patterns match the current HTTP request.

## Constructors

### Constructor

> **new HostMatcher**(): `HostMatcher`

#### Returns

`HostMatcher`

## Methods

### match()

> **match**(`routes`, `hostDefinition`): [`RouteDefinition`](RouteDefinition.md)[]

Returns the most specific matching host routes, or unrestricted routes as a fallback.

#### Parameters

##### routes

readonly [`RouteDefinition`](RouteDefinition.md)[]

##### hostDefinition

[`HostDefinition`](HostDefinition.md)

#### Returns

[`RouteDefinition`](RouteDefinition.md)[]
