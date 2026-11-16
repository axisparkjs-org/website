# Class: PendingInstances

Keeps the instances that are being created, so concurrent resolutions of the same provider wait for the same promise and receive the same instance. An instance is removed when it is created or when its creation fails, so the next resolution tries again instead of receiving the cached rejection.

## Constructors

### Constructor

> **new PendingInstances**(): `PendingInstances`

#### Returns

`PendingInstances`

## Methods

### getOrCreate()

> **getOrCreate**\<`T`\>(`key`, `classType`, `chain`, `create`): `Promise`\<`T`\>

Returns the instance of a provider that is being created, or creates it.

#### Type Parameters

##### T

`T`

The type of the instance.

#### Parameters

##### key

`object`

The key of the instance, usually its provider.

##### classType

[`ClassType`](../../common/type-aliases/ClassType.md)

The class of the instance, used in the error messages.

##### chain

[`ResolutionChain`](ResolutionChain.md)

The resolution chain that needs the instance.

##### create

() => `Promise`\<`T`\>

Creates the instance when it is not being created yet.

#### Returns

`Promise`\<`T`\>

A promise that resolves to the instance.

#### Throws

If waiting for the instance would wait for the chain itself.
