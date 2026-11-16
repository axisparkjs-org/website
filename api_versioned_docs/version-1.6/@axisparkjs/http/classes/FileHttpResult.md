# Class: FileHttpResult

A class for representing HTTP file results.

## Extends

- [`HttpResult`](HttpResult.md)\<`undefined`\>

## Constructors

### Constructor

> **new FileHttpResult**(`filePath`, `options?`): `FileHttpResult`

Creates a file result.

#### Parameters

##### filePath

`string`

The absolute path of the file, the same with every adapter. Build it with `path.join(__dirname, ...)`, for example.

##### options?

The name of the downloaded file and the content type.

###### contentType?

`string`

###### filename?

`string`

#### Returns

`FileHttpResult`

#### Throws

If the path is relative, because each adapter would resolve it against a different folder.

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

Sends the file, or answers `404` in the format of the framework when the file does not exist.

#### Parameters

##### context

[`HttpContext`](../interfaces/HttpContext.md)

The HTTP context of the request.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`HttpResult`](HttpResult.md).[`process`](HttpResult.md#process)
