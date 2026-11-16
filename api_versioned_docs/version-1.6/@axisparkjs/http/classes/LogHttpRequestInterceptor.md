# Class: LogHttpRequestInterceptor

An interceptor for logging HTTP requests.

## Constructors

### Constructor

> **new LogHttpRequestInterceptor**(`logger`): `LogHttpRequestInterceptor`

#### Parameters

##### logger

`Logger`

#### Returns

`LogHttpRequestInterceptor`

## Methods

### log()

> **log**(`context`): `Promise`\<`void`\>

Logs HTTP requests before they are processed.

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

The HTTP context.

#### Returns

`Promise`\<`void`\>

A promise that resolves when logging is complete.
