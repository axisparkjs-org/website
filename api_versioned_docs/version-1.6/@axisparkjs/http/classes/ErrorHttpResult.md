# Class: ErrorHttpResult

A class for representing HTTP error results.

## Extends

- [`HttpResult`](HttpResult.md)\<[`HttpError`](HttpError.md)\>

## Constructors

### Constructor

> **new ErrorHttpResult**(`value`): `ErrorHttpResult`

#### Parameters

##### value

[`HttpError`](HttpError.md)

#### Returns

`ErrorHttpResult`

#### Overrides

[`HttpResult`](HttpResult.md).[`constructor`](HttpResult.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`HttpResult`](HttpResult.md).[`rc`](HttpResult.md#rc)

***

### value

> `readonly` **value**: [`HttpError`](HttpError.md)

#### Inherited from

[`HttpResult`](HttpResult.md).[`value`](HttpResult.md#value)

## Methods

### process()

> **process**(`context`): `Promise`\<`void`\>

Processes the result using the provided execution context.

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

The execution context containing relevant information for processing.

#### Returns

`Promise`\<`void`\>

A promise resolving when the result has been processed.

#### Overrides

[`HttpResult`](HttpResult.md).[`process`](HttpResult.md#process)
