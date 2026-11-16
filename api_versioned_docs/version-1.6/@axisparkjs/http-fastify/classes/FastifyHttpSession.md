# Class: FastifyHttpSession\<T\>

Represents an HTTP session, providing methods to manage session data, including getting, setting, checking, deleting, and clearing session values. Also includes methods to save, reload, regenerate, destroy, and touch the session.

## Type Parameters

### T

`T` *extends* `object` = `Record`\<`string`, `unknown`\>

## Implements

- [`HttpSession`](../../http/interfaces/HttpSession.md)\<`T`\>

## Constructors

### Constructor

> **new FastifyHttpSession**\<`T`\>(`session`): `FastifyHttpSession`\<`T`\>

#### Parameters

##### session

`FastifySessionObject`

#### Returns

`FastifyHttpSession`\<`T`\>

## Accessors

### data

#### Get Signature

> **get** **data**(): `Readonly`\<`T`\>

##### Returns

`Readonly`\<`T`\>

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`data`](../../http/interfaces/HttpSession.md#data)

***

### id

#### Get Signature

> **get** **id**(): `string`

##### Returns

`string`

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`id`](../../http/interfaces/HttpSession.md#id)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`clear`](../../http/interfaces/HttpSession.md#clear)

***

### delete()

> **delete**\<`K`\>(`key`): `boolean`

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

#### Returns

`boolean`

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`delete`](../../http/interfaces/HttpSession.md#delete)

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`destroy`](../../http/interfaces/HttpSession.md#destroy)

***

### get()

> **get**\<`K`\>(`key`): `T`\[`K`\] \| `undefined`

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

#### Returns

`T`\[`K`\] \| `undefined`

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`get`](../../http/interfaces/HttpSession.md#get)

***

### has()

> **has**\<`K`\>(`key`): `boolean`

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

#### Returns

`boolean`

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`has`](../../http/interfaces/HttpSession.md#has)

***

### regenerate()

> **regenerate**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`regenerate`](../../http/interfaces/HttpSession.md#regenerate)

***

### reload()

> **reload**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`reload`](../../http/interfaces/HttpSession.md#reload)

***

### save()

> **save**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`save`](../../http/interfaces/HttpSession.md#save)

***

### set()

> **set**\<`K`\>(`key`, `value`): `void`

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

##### value

`T`\[`K`\]

#### Returns

`void`

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`set`](../../http/interfaces/HttpSession.md#set)

***

### touch()

> **touch**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`HttpSession`](../../http/interfaces/HttpSession.md).[`touch`](../../http/interfaces/HttpSession.md#touch)
