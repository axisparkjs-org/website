# Class: RouteDefinition

A class representing the definition of an HTTP route.

## Constructors

### Constructor

> **new RouteDefinition**(`target`, `propertyKey`, `httpMethod`, `path`, `versions`, `handler`): `RouteDefinition`

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

`string`[] \| `undefined`

##### handler

[`RouteHandler`](../type-aliases/RouteHandler.md)

#### Returns

`RouteDefinition`

## Properties

### handler

> `readonly` **handler**: [`RouteHandler`](../type-aliases/RouteHandler.md)

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

> `readonly` **versions**: `string`[] \| `undefined`

## Methods

### compare()

> **compare**(`other`): [`RouteConflict`](../interfaces/RouteConflict.md)[]

Compares this route with another route and reports any compatibility issues.

#### Parameters

##### other

`RouteDefinition`

#### Returns

[`RouteConflict`](../interfaces/RouteConflict.md)[]
