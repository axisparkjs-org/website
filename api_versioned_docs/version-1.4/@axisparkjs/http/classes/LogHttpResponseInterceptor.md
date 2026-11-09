# Class: LogHttpResponseInterceptor

An interceptor for logging HTTP responses.

## Constructors

### Constructor

> **new LogHttpResponseInterceptor**(`logger`): `LogHttpResponseInterceptor`

#### Parameters

##### logger

`Logger`

#### Returns

`LogHttpResponseInterceptor`

## Methods

### log()

> **log**(`context`): `Promise`\<`void`\>

Logs HTTP responses after they are processed.

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

The HTTP context.

#### Returns

`Promise`\<`void`\>

A promise that resolves when logging is complete.
