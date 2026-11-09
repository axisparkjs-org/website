# Interface: Lifecycle

An interface representing a lifecycle object that can be initialized, destroyed, and run.

## Extends

- [`Initializable`](Initializable.md)
- [`Destroyable`](Destroyable.md)
- [`Runnable`](Runnable.md)

## Methods

### destroy()

> **destroy**(...`args`): `void` \| `Promise`\<`void`\>

#### Parameters

##### args

...`unknown`[]

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[`Destroyable`](Destroyable.md).[`destroy`](Destroyable.md#destroy)

***

### init()

> **init**(...`args`): `void` \| `Promise`\<`void`\>

#### Parameters

##### args

...`unknown`[]

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[`Initializable`](Initializable.md).[`init`](Initializable.md#init)

***

### run()

> **run**(...`args`): `void` \| `Promise`\<`void`\>

#### Parameters

##### args

...`unknown`[]

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[`Runnable`](Runnable.md).[`run`](Runnable.md#run)
