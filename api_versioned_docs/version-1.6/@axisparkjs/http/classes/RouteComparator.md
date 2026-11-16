# Class: RouteComparator

Compares two route definitions and reports the conflicts that would affect request dispatching.

## Constructors

### Constructor

> **new RouteComparator**(): `RouteComparator`

#### Returns

`RouteComparator`

## Methods

### compare()

> **compare**(`first`, `second`): [`RouteConflict`](../interfaces/RouteConflict.md)[]

Reports the conflicts between two routes. Routes only conflict when they use the same HTTP method
and can be selected by the same host and version, since those are resolved before the route handler.

#### Parameters

##### first

[`RouteDefinition`](RouteDefinition.md)

##### second

[`RouteDefinition`](RouteDefinition.md)

#### Returns

[`RouteConflict`](../interfaces/RouteConflict.md)[]
