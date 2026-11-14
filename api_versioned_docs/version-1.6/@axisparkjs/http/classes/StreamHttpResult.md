# Class: StreamHttpResult

A class for representing HTTP stream results.

## Extends

- [`HttpResult`](HttpResult.md)\<`undefined`\>

## Constructors

### Constructor

> **new StreamHttpResult**(`stream`, `options?`): `StreamHttpResult`

#### Parameters

##### stream

`ReadableStream`

##### options?

###### contentType?

`string`

###### filename?

`string`

#### Returns

`StreamHttpResult`

#### Overrides

[`HttpResult`](HttpResult.md).[`constructor`](HttpResult.md#constructor)

## Properties

### rc

> `readonly` **rc**: `number`

#### Inherited from

[`HttpResult`](HttpResult.md).[`rc`](HttpResult.md#rc)

***

### value

> `readonly` **value**: `undefined`

#### Inherited from

[`HttpResult`](HttpResult.md).[`value`](HttpResult.md#value)

## Methods

### process()

> **process**(`context`): `Promise`\<`void`\>

Sends the stream and waits for the end of the transfer.

- When the stream fails before sending any data, the request is answered with `500` in the format of the framework.
- When the stream fails after the response has started, the connection is destroyed, so the client sees an incomplete transfer.

In both cases the error of the stream is thrown after the response is handled, so it is logged.

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

The HTTP context of the request.

#### Returns

`Promise`\<`void`\>

#### Throws

The error of the stream.

#### Overrides

[`HttpResult`](HttpResult.md).[`process`](HttpResult.md#process)
