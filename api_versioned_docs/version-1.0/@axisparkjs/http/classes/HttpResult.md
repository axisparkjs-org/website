# Abstract Class: HttpResult\<T\>

An abstract class for representing HTTP results.

## Extends

- [`ResultDefinition`](../../engine/classes/ResultDefinition.md)\<`T`\>

## Extended by

- [`BodyHttpResult`](BodyHttpResult.md)
- [`RedirectHttpResult`](RedirectHttpResult.md)
- [`FileHttpResult`](FileHttpResult.md)
- [`StreamHttpResult`](StreamHttpResult.md)
- [`ErrorHttpResult`](ErrorHttpResult.md)

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new HttpResult**\<`T`\>(`value`, `rc`): `HttpResult`\<`T`\>

#### Parameters

##### value

`T`

##### rc

[`HttpStatusCode`](../enumerations/HttpStatusCode.md)

#### Returns

`HttpResult`\<`T`\>

#### Overrides

[`ResultDefinition`](../../engine/classes/ResultDefinition.md).[`constructor`](../../engine/classes/ResultDefinition.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`RedirectHttpResult`](RedirectHttpResult.md).[`rc`](RedirectHttpResult.md#rc)

***

### value

> `readonly` **value**: `T`

#### Inherited from

[`ResultDefinition`](../../engine/classes/ResultDefinition.md).[`value`](../../engine/classes/ResultDefinition.md#value)

## Methods

### process()

> `abstract` **process**(`context`): `Promise`\<`void`\>

Processes the result using the provided execution context.

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

The execution context containing relevant information for processing.

#### Returns

`Promise`\<`void`\>

A promise resolving when the result has been processed.

#### Overrides

[`ResultDefinition`](../../engine/classes/ResultDefinition.md).[`process`](../../engine/classes/ResultDefinition.md#process)
