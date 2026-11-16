# Interface: HttpResponse

Represents an HTTP response, providing methods to set status codes, headers, cookies, and send various types of responses such as JSON, files, or streams. Also includes methods to clear cookies and check if the response has been committed.

## Methods

### clearCookie()

> **clearCookie**(`name`, `options?`): `this`

#### Parameters

##### name

`string`

##### options?

###### domain?

`string`

###### httpOnly?

`boolean`

###### path?

`string`

###### sameSite?

`boolean` \| `"lax"` \| `"strict"` \| `"none"`

###### secure?

`boolean`

#### Returns

`this`

***

### cookie()

> **cookie**(`name`, `value`, `options?`): `this`

#### Parameters

##### name

`string`

##### value

`string`

##### options?

###### domain?

`string`

###### httpOnly?

`boolean`

###### maxAge?

`number`

###### path?

`string`

###### sameSite?

`boolean` \| `"lax"` \| `"strict"` \| `"none"`

###### secure?

`boolean`

#### Returns

`this`

***

### end()

> **end**(): `void`

#### Returns

`void`

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

***

### isCommitted()

> **isCommitted**(): `boolean`

#### Returns

`boolean`

***

### json()

> **json**(`body?`): `void`

#### Parameters

##### body?

`any`

#### Returns

`void`

***

### send()

> **send**(`body?`): `void`

#### Parameters

##### body?

`any`

#### Returns

`void`

***

### status()

> **status**(`code`): `this`

#### Parameters

##### code

`number`

#### Returns

`this`

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
