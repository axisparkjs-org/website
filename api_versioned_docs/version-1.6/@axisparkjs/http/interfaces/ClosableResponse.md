# Interface: ClosableResponse

The members of a Node.js `ServerResponse` used by `clientDisconnectSignal()`.

## Properties

### destroyed

> `readonly` **destroyed**: `boolean`

***

### writableFinished

> `readonly` **writableFinished**: `boolean`

## Methods

### once()

> **once**(`event`, `listener`): `unknown`

#### Parameters

##### event

`"close"`

##### listener

() => `void`

#### Returns

`unknown`
