# Class: RouteGenerator

A generator for creating route definitions based on controller and route metadata.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`RouteDefinition`](RouteDefinition.md)[]\>

## Constructors

### Constructor

> **new RouteGenerator**(`httpEngine`, `httpPluginOptions`): `RouteGenerator`

#### Parameters

##### httpEngine

[`HttpEngine`](HttpEngine.md)

##### httpPluginOptions

[`HttpPluginOptions`](../interfaces/HttpPluginOptions.md)

#### Returns

`RouteGenerator`

## Methods

### generate()

> **generate**(): `Promise`\<[`RouteDefinition`](RouteDefinition.md)[]\>

Generates route definitions based on controller and route metadata.

#### Returns

`Promise`\<[`RouteDefinition`](RouteDefinition.md)[]\>

An array of route definitions.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)
