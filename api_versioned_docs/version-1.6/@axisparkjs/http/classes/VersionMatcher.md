# Class: VersionMatcher

Selects the route that matches the version requested by an HTTP request.

## Constructors

### Constructor

> **new VersionMatcher**(): `VersionMatcher`

#### Returns

`VersionMatcher`

## Methods

### match()

> **match**(`routes`, `versionDefinition`): [`RouteDefinition`](RouteDefinition.md)

Returns an exact requested-version route before the wildcard default, then the first route.

#### Parameters

##### routes

readonly [`RouteDefinition`](RouteDefinition.md)[]

##### versionDefinition

[`VersionDefinition`](VersionDefinition.md)

#### Returns

[`RouteDefinition`](RouteDefinition.md)
