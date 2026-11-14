# Class: FastifyHttpResponse

Represents an HTTP response, providing methods to set status codes, headers, cookies, and send various types of responses such as JSON, files, or streams. Also includes methods to clear cookies and check if the response has been committed.

## Implements

- [`HttpResponse`](../../http/interfaces/HttpResponse.md)

## Constructors

### Constructor

> **new FastifyHttpResponse**(`response`): `FastifyHttpResponse`

#### Parameters

##### response

`FastifyReply`

#### Returns

`FastifyHttpResponse`

## Methods

### clearCookie()

> **clearCookie**(`name`, `options?`): `this`

#### Parameters

##### name

`string`

##### options?

`SerializeOptions`

#### Returns

`this`

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`clearCookie`](../../http/interfaces/HttpResponse.md#clearcookie)

***

### cookie()

> **cookie**(`name`, `value`, `options?`): `this`

#### Parameters

##### name

`string`

##### value

`string`

##### options?

`SerializeOptions`

#### Returns

`this`

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`cookie`](../../http/interfaces/HttpResponse.md#cookie)

***

### end()

> **end**(): `void`

#### Returns

`void`

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`end`](../../http/interfaces/HttpResponse.md#end)

***

### file()

> **file**(`filePath`): `Promise`\<`void`\>

Sends a file. The headers that are already set, such as `Content-Type` and `Content-Disposition`, are kept.

#### Parameters

##### filePath

`string`

The absolute path of the file.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the file is sent, and rejects when it can not be sent before any byte of the response is written.

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`file`](../../http/interfaces/HttpResponse.md#file)

***

### header()

> **header**(`name`, `value`): `this`

#### Parameters

##### name

`string`

##### value

`string`

#### Returns

`this`

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`header`](../../http/interfaces/HttpResponse.md#header)

***

### isCommitted()

> **isCommitted**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`isCommitted`](../../http/interfaces/HttpResponse.md#iscommitted)

***

### json()

> **json**(`body?`): `void`

#### Parameters

##### body?

`unknown`

#### Returns

`void`

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`json`](../../http/interfaces/HttpResponse.md#json)

***

### send()

> **send**(`body?`): `void`

#### Parameters

##### body?

`unknown`

#### Returns

`void`

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`send`](../../http/interfaces/HttpResponse.md#send)

***

### status()

> **status**(`code`): `this`

#### Parameters

##### code

`number`

#### Returns

`this`

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`status`](../../http/interfaces/HttpResponse.md#status)

***

### stream()

> **stream**(`stream`): `Promise`\<`void`\>

Sends a stream. The source is destroyed when the client closes the connection, and the connection is destroyed when the source fails.

#### Parameters

##### stream

`ReadableStream`

The stream to send.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the transfer ends, and rejects with the error of the source.

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`stream`](../../http/interfaces/HttpResponse.md#stream)
