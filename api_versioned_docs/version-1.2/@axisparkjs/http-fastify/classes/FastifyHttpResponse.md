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

> **file**(`filePath`): `void`

#### Parameters

##### filePath

`string`

#### Returns

`void`

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

> **stream**(`stream`): `void`

#### Parameters

##### stream

`ReadableStream`

#### Returns

`void`

#### Implementation of

[`HttpResponse`](../../http/interfaces/HttpResponse.md).[`stream`](../../http/interfaces/HttpResponse.md#stream)
