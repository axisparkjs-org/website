# Interface: Destroyable

An interface representing an object that can be destroyed. It defines a `destroy` method that can be called to perform cleanup or release resources. The `destroy` method can return either `void` or a `Promise<void>`, allowing for both synchronous and asynchronous cleanup operations.

## Extended by

- [`Lifecycle`](Lifecycle.md)

## Methods

### destroy()

> **destroy**(...`args`): `void` \| `Promise`\<`void`\>

#### Parameters

##### args

...`unknown`[]

#### Returns

`void` \| `Promise`\<`void`\>
