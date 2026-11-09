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

> **file**(`filePath`): `void`

#### Parameters

##### filePath

`string`

#### Returns

`void`

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

> **stream**(`stream`): `void`

#### Parameters

##### stream

`ReadableStream`

#### Returns

`void`
