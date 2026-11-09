# Class: ReturnErrorFilter

A global filter for returning errors as HTTP responses.

## Constructors

### Constructor

> **new ReturnErrorFilter**(): `ReturnErrorFilter`

#### Returns

`ReturnErrorFilter`

## Methods

### error()

> **error**(`error`): `Promise`\<[`ErrorHttpResult`](ErrorHttpResult.md)\>

Handles errors by returning them as HTTP responses.

#### Parameters

##### error

`Error`

The error to handle.

#### Returns

`Promise`\<[`ErrorHttpResult`](ErrorHttpResult.md)\>

A promise resolving to an ErrorHttpResult.
