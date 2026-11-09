# Class: RouteDefinition

A class representing the definition of an HTTP route.

## Constructors

### Constructor

> **new RouteDefinition**(`target`, `propertyKey`, `httpMethod`, `path`, `versions`, `hosts`, `handler`, `candidates?`): `RouteDefinition`

#### Parameters

##### target

[`ClassType`](../../common/type-aliases/ClassType.md)

##### propertyKey

`string` \| `symbol`

##### httpMethod

[`HttpMethod`](../enumerations/HttpMethod.md)

##### path

`string`

##### versions

`string`[]

##### hosts

`string`[]

##### handler

[`RouteHandler`](../type-aliases/RouteHandler.md)

##### candidates?

readonly `RouteDefinition`[]

#### Returns

`RouteDefinition`

## Properties

### candidates

> `readonly` **candidates**: readonly `RouteDefinition`[]

The declared routes served by this definition. A grouped dispatch route lists every route it groups; any other route lists itself.

***

### handler

> `readonly` **handler**: [`RouteHandler`](../type-aliases/RouteHandler.md)

***

### hosts

> `readonly` **hosts**: `string`[]

***

### httpMethod

> `readonly` **httpMethod**: [`HttpMethod`](../enumerations/HttpMethod.md)

***

### path

> `readonly` **path**: `string`

***

### propertyKey

> `readonly` **propertyKey**: `string` \| `symbol`

***

### target

> `readonly` **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

***

### versions

> `readonly` **versions**: `string`[]

## Methods

### compare()

> **compare**(`other`): [`RouteConflict`](../interfaces/RouteConflict.md)[]

Compares this route with another route and reports any compatibility issues.

#### Parameters

##### other

`RouteDefinition`

#### Returns

[`RouteConflict`](../interfaces/RouteConflict.md)[]
