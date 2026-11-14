# Class: BodyHttpResult\<T\>

A class for representing HTTP results with a body.

## Extends

- [`HttpResult`](HttpResult.md)\<`T`\>

## Type Parameters

### T

`T` = `unknown`

## Constructors

### Constructor

> **new BodyHttpResult**\<`T`\>(`value`, `rc`, `headers?`): `BodyHttpResult`\<`T`\>

#### Parameters

##### value

`T`

##### rc

[`HttpStatusCode`](../enumerations/HttpStatusCode.md)

##### headers?

`Record`\<`string`, `string`\> = `{}`

#### Returns

`BodyHttpResult`\<`T`\>

#### Overrides

[`HttpResult`](HttpResult.md).[`constructor`](HttpResult.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`RedirectHttpResult`](RedirectHttpResult.md).[`rc`](RedirectHttpResult.md#rc)

***

### value

> `readonly` **value**: `T`

#### Inherited from

[`HttpResult`](HttpResult.md).[`value`](HttpResult.md#value)

## Methods

### header()

> **header**(`name`, `value`): `this`

#### Parameters

##### name

`string`

##### value

`string`

#### Returns

`this`

***

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
