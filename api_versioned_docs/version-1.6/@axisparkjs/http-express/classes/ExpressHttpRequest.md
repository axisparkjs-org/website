# Class: ExpressHttpRequest

Represents an HTTP request, including method, path, URL, headers, query parameters, route parameters, body, IP address, and cookies. Provides methods to retrieve specific cookies and headers.

## Implements

- [`HttpRequest`](../../http/interfaces/HttpRequest.md)

## Constructors

### Constructor

> **new ExpressHttpRequest**(`request`, `response?`): `ExpressHttpRequest`

#### Parameters

##### request

`Request`

##### response?

[`ClosableResponse`](../../http/interfaces/ClosableResponse.md)

#### Returns

`ExpressHttpRequest`

## Accessors

### body

#### Get Signature

> **get** **body**(): `any`

##### Returns

`any`

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`body`](../../http/interfaces/HttpRequest.md#body)

***

### cookies

#### Get Signature

> **get** **cookies**(): `Record`\<`string`, `any`\>

##### Returns

`Record`\<`string`, `any`\>

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`cookies`](../../http/interfaces/HttpRequest.md#cookies)

***

### files

#### Get Signature

> **get** **files**(): readonly `UploadedFile`[] \| `undefined`

The files received in a `multipart/form-data` request. Undefined until the request has been parsed with `parseMultipart`.

##### Returns

readonly `UploadedFile`[] \| `undefined`

The files received in a `multipart/form-data` request. Undefined until the request has been parsed with `parseMultipart`.

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`files`](../../http/interfaces/HttpRequest.md#files)

***

### headers

#### Get Signature

> **get** **headers**(): `IncomingHttpHeaders`

##### Returns

`IncomingHttpHeaders`

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`headers`](../../http/interfaces/HttpRequest.md#headers)

***

### ip

#### Get Signature

> **get** **ip**(): `string` \| `undefined`

##### Returns

`string` \| `undefined`

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`ip`](../../http/interfaces/HttpRequest.md#ip)

***

### method

#### Get Signature

> **get** **method**(): `string`

##### Returns

`string`

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`method`](../../http/interfaces/HttpRequest.md#method)

***

### params

#### Get Signature

> **get** **params**(): `ParamsDictionary`

##### Returns

`ParamsDictionary`

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`params`](../../http/interfaces/HttpRequest.md#params)

***

### path

#### Get Signature

> **get** **path**(): `string`

##### Returns

`string`

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`path`](../../http/interfaces/HttpRequest.md#path)

***

### query

#### Get Signature

> **get** **query**(): `Record`\<`string`, `string` \| `string`[]\>

##### Returns

`Record`\<`string`, `string` \| `string`[]\>

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`query`](../../http/interfaces/HttpRequest.md#query)

***

### session

#### Get Signature

> **get** **session**(): `Session` & `Partial`\<`SessionData`\>

##### Returns

`Session` & `Partial`\<`SessionData`\>

***

### signal

#### Get Signature

> **get** **signal**(): `AbortSignal`

Aborted with a `ClientDisconnectedError` when the client closes the connection before the response is sent. Without the response of the request, the signal is never aborted.

##### Returns

`AbortSignal`

Optional signal aborted with a `ClientDisconnectedError` when the client closes the connection before the response is sent. The engine combines it with the signal of the execution (`@Signal()`). Adapters without it only abort the execution on timeouts.

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`signal`](../../http/interfaces/HttpRequest.md#signal)

***

### url

#### Get Signature

> **get** **url**(): `string`

##### Returns

`string`

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`url`](../../http/interfaces/HttpRequest.md#url)

## Methods

### getCookie()

> **getCookie**(`name`): `string` \| `undefined`

#### Parameters

##### name

`string`

#### Returns

`string` \| `undefined`

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`getCookie`](../../http/interfaces/HttpRequest.md#getcookie)

***

### getHeader()

> **getHeader**(`name`): `string` \| `string`[] \| `undefined`

#### Parameters

##### name

`string`

#### Returns

`string` \| `string`[] \| `undefined`

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`getHeader`](../../http/interfaces/HttpRequest.md#getheader)

***

### parseMultipart()

> **parseMultipart**(`definition`): `Promise`\<`void`\>

Parses a `multipart/form-data` request applying the given limits. Files are exposed in `files` and text fields in `body`.

#### Parameters

##### definition

[`FileUploadDefinition`](../../http/classes/FileUploadDefinition.md)

#### Returns

`Promise`\<`void`\>

#### Throws

FileUploadLimitError when a limit is exceeded.

#### Implementation of

[`HttpRequest`](../../http/interfaces/HttpRequest.md).[`parseMultipart`](../../http/interfaces/HttpRequest.md#parsemultipart)
