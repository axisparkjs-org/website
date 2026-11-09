# Abstract Class: ResultResolver

An abstract class representing a resolver for converting unknown values into result definitions.

## Implements

- [`Resolver`](../../common/interfaces/Resolver.md)\<[`ResultDefinition`](ResultDefinition.md)\>

## Constructors

### Constructor

> **new ResultResolver**(): `ResultResolver`

#### Returns

`ResultResolver`

## Methods

### resolve()

> `abstract` **resolve**(`result`, `context`): [`ResultDefinition`](ResultDefinition.md)\<`unknown`\> \| `Promise`\<[`ResultDefinition`](ResultDefinition.md)\<`unknown`\>\>

Resolves an unknown result into a `ResultDefinition` based on the provided execution context.

#### Parameters

##### result

`unknown`

The unknown result to be resolved.

##### context

[`ExecutionContext`](../interfaces/ExecutionContext.md)

The execution context containing relevant information for resolution.

#### Returns

[`ResultDefinition`](ResultDefinition.md)\<`unknown`\> \| `Promise`\<[`ResultDefinition`](ResultDefinition.md)\<`unknown`\>\>

A promise resolving to a `ResultDefinition` or a `ResultDefinition` directly.

#### Implementation of

[`Resolver`](../../common/interfaces/Resolver.md).[`resolve`](../../common/interfaces/Resolver.md#resolve)
