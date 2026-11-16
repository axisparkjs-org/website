# Class: ResolutionChain

The chain of classes that are being resolved by one resolution, from the requested token to the current dependency. Each call to `Container.resolve()` starts a new chain, so concurrent resolutions never see the classes of each other. The chain is used to detect circular dependencies and scope violations.

## Properties

### state

> `readonly` **state**: [`ResolutionChainState`](../interfaces/ResolutionChainState.md)

The state shared by every step of the chain.

***

### steps

> `readonly` **steps**: readonly [`ResolutionStep`](../interfaces/ResolutionStep.md)[]

The classes of the chain, from the first one to the current one.

## Methods

### describe()

> **describe**(`withScopes`, ...`next`): `string`

Describes the classes of the chain, followed by the given classes.

#### Parameters

##### withScopes

`boolean`

Whether to include the scope of each class of the chain.

##### next

...[`ClassType`](../../common/type-aliases/ClassType.md)[]

The classes to add at the end of the description.

#### Returns

`string`

The names of the classes separated by ` -> `.

***

### findWaitCycle()

> **findWaitCycle**(`pending`): [`ClassType`](../../common/type-aliases/ClassType.md)[] \| `undefined`

Finds the cycle that waiting for a pending instance would create: the instance is created by this chain, or by a chain that waits, directly or through other chains, for an instance created by this chain.

#### Parameters

##### pending

[`PendingInstance`](../interfaces/PendingInstance.md)

The pending instance to wait for.

#### Returns

[`ClassType`](../../common/type-aliases/ClassType.md)[] \| `undefined`

The classes of the pending instances of the cycle, or `undefined` when waiting is safe.

***

### hasSingleton()

> **hasSingleton**(): `boolean`

Checks whether a singleton is being resolved in this chain.

#### Returns

`boolean`

`true` when one of the classes of the chain has the singleton scope.

***

### includes()

> **includes**(`classType`): `boolean`

Checks whether a class is already being resolved in this chain.

#### Parameters

##### classType

[`ClassType`](../../common/type-aliases/ClassType.md)

The class to check.

#### Returns

`boolean`

`true` when the class is in the chain.

***

### waitFor()

> **waitFor**\<`T`\>(`pending`): `Promise`\<`T`\>

Waits for a pending instance, recording it as the instance this chain is waiting for.

#### Type Parameters

##### T

`T`

The type of the instance.

#### Parameters

##### pending

[`PendingInstance`](../interfaces/PendingInstance.md)\<`T`\>

The pending instance to wait for.

#### Returns

`Promise`\<`T`\>

A promise that resolves to the instance.

***

### with()

> **with**(`step`): `ResolutionChain`

Creates the chain of a dependency of the current class.

#### Parameters

##### step

[`ResolutionStep`](../interfaces/ResolutionStep.md)

The class of the dependency, with its scope.

#### Returns

`ResolutionChain`

A new chain with the given step at the end, which shares the state of this chain.

***

### start()

> `static` **start**(): `ResolutionChain`

Starts a new and empty resolution chain.

#### Returns

`ResolutionChain`

A new resolution chain.
