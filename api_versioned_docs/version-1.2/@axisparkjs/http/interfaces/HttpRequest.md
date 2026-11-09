# Interface: HttpRequest

Represents an HTTP request, including method, path, URL, headers, query parameters, route parameters, body, IP address, and cookies. Provides methods to retrieve specific cookies and headers.

## Properties

### body

> **body**: `unknown`

***

### cookies

> **cookies**: `Readonly`\<`Record`\<`string`, `string` \| `undefined`\>\>

***

### headers

> **headers**: `Readonly`\<`Record`\<`string`, `string` \| `string`[] \| `undefined`\>\>

***

### ip

> **ip**: `string` \| `undefined`

***

### method

> **method**: `string`

***

### params

> **params**: `Readonly`\<`Record`\<`string`, `string` \| `string`[]\>\>

***

### path

> **path**: `string`

***

### query

> **query**: `Readonly`\<`Record`\<`string`, `string` \| `string`[]\>\>

***

### url

> **url**: `string`

## Methods

### getCookie()

> **getCookie**(`name`): `string` \| `undefined`

#### Parameters

##### name

`string`

#### Returns

`string` \| `undefined`

***

### getHeader()

> **getHeader**(`name`): `string` \| `string`[] \| `undefined`

#### Parameters

##### name

`string`

#### Returns

`string` \| `string`[] \| `undefined`
