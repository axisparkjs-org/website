# Interface: PendingInstance\<T\>

An instance that is being created, shared by the resolutions that need it at the same time.

## Type Parameters

### T

`T` = `unknown`

The type of the instance.

## Properties

### classType

> **classType**: [`ClassType`](../../common/type-aliases/ClassType.md)

The class of the instance, used in the error messages.

***

### owner

> **owner**: [`ResolutionChainState`](ResolutionChainState.md)

The resolution chain that creates the instance.

***

### promise

> **promise**: `Promise`\<`T`\>

The promise that resolves to the instance.
