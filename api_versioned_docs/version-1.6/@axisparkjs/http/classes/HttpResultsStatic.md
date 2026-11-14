# Class: HttpResultsStatic

A static class for creating HTTP results.

## Constructors

### Constructor

> **new HttpResultsStatic**(): `HttpResultsStatic`

#### Returns

`HttpResultsStatic`

## Methods

### Accepted()

> **Accepted**(`value`): [`BodyHttpResult`](BodyHttpResult.md)\<`unknown`\>

#### Parameters

##### value

`unknown`

#### Returns

[`BodyHttpResult`](BodyHttpResult.md)\<`unknown`\>

***

### BadRequest()

> **BadRequest**(`value`, `options?`): [`ErrorHttpResult`](ErrorHttpResult.md)

#### Parameters

##### value

`string`

##### options?

###### cause?

`unknown`

###### description?

`string`

#### Returns

[`ErrorHttpResult`](ErrorHttpResult.md)

***

### Created()

> **Created**(`value`, `location?`): [`BodyHttpResult`](BodyHttpResult.md)\<`unknown`\>

#### Parameters

##### value

`unknown`

##### location?

`string`

#### Returns

[`BodyHttpResult`](BodyHttpResult.md)\<`unknown`\>

***

### Download()

> **Download**(`filePath`, `filename`, `contentType?`): [`FileHttpResult`](FileHttpResult.md)

#### Parameters

##### filePath

`string`

##### filename

`string`

##### contentType?

`string`

#### Returns

[`FileHttpResult`](FileHttpResult.md)

***

### Error()

> **Error**(`error`): [`ErrorHttpResult`](ErrorHttpResult.md)

#### Parameters

##### error

[`HttpError`](HttpError.md)

#### Returns

[`ErrorHttpResult`](ErrorHttpResult.md)

***

### File()

> **File**(`filePath`, `contentType?`): [`FileHttpResult`](FileHttpResult.md)

#### Parameters

##### filePath

`string`

##### contentType?

`string`

#### Returns

[`FileHttpResult`](FileHttpResult.md)

***

### Forbidden()

> **Forbidden**(`value`, `options?`): [`ErrorHttpResult`](ErrorHttpResult.md)

#### Parameters

##### value

`string`

##### options?

###### cause?

`unknown`

###### description?

`string`

#### Returns

[`ErrorHttpResult`](ErrorHttpResult.md)

***

### InternalServerError()

> **InternalServerError**(`value`, `options?`): [`ErrorHttpResult`](ErrorHttpResult.md)

#### Parameters

##### value

`string`

##### options?

###### cause?

`unknown`

###### description?

`string`

#### Returns

[`ErrorHttpResult`](ErrorHttpResult.md)

***

### NoContent()

> **NoContent**(): [`BodyHttpResult`](BodyHttpResult.md)\<`undefined`\>

#### Returns

[`BodyHttpResult`](BodyHttpResult.md)\<`undefined`\>

***

### NotFound()

> **NotFound**(`value`, `options?`): [`ErrorHttpResult`](ErrorHttpResult.md)

#### Parameters

##### value

`string`

##### options?

###### cause?

`unknown`

###### description?

`string`

#### Returns

[`ErrorHttpResult`](ErrorHttpResult.md)

***

### Ok()

> **Ok**(`value`): [`BodyHttpResult`](BodyHttpResult.md)\<`unknown`\>

#### Parameters

##### value

`unknown`

#### Returns

[`BodyHttpResult`](BodyHttpResult.md)\<`unknown`\>

***

### PermanentRedirect()

> **PermanentRedirect**(`location`): [`RedirectHttpResult`](RedirectHttpResult.md)

#### Parameters

##### location

`string`

#### Returns

[`RedirectHttpResult`](RedirectHttpResult.md)

***

### Redirect()

> **Redirect**(`location`): [`RedirectHttpResult`](RedirectHttpResult.md)

#### Parameters

##### location

`string`

#### Returns

[`RedirectHttpResult`](RedirectHttpResult.md)

***

### Stream()

> **Stream**(`stream`, `filename?`, `contentType?`): [`StreamHttpResult`](StreamHttpResult.md)

#### Parameters

##### stream

`ReadableStream`

##### filename?

`string`

##### contentType?

`string`

#### Returns

[`StreamHttpResult`](StreamHttpResult.md)

***

### Unauthorized()

> **Unauthorized**(`value`, `options?`): [`ErrorHttpResult`](ErrorHttpResult.md)

#### Parameters

##### value

`string`

##### options?

###### cause?

`unknown`

###### description?

`string`

#### Returns

[`ErrorHttpResult`](ErrorHttpResult.md)
