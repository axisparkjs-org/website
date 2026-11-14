# Interface: Initializable

An interface representing an object that can be initialized. It defines an `init` method that can be called to perform initialization logic. The `init` method can return either `void` or a `Promise<void>`, allowing for both synchronous and asynchronous initialization operations.

## Extended by

- [`Lifecycle`](Lifecycle.md)

## Methods

### init()

> **init**(...`args`): `void` \| `Promise`\<`void`\>

#### Parameters

##### args

...`unknown`[]

#### Returns

`void` \| `Promise`\<`void`\>
