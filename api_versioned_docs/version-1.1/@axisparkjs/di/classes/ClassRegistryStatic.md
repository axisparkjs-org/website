# Class: ClassRegistryStatic

A static class for managing the registration and retrieval of classes.

## Constructors

### Constructor

> **new ClassRegistryStatic**(): `ClassRegistryStatic`

#### Returns

`ClassRegistryStatic`

## Methods

### get()

> **get**(`name`): [`ClassType`](../../common/type-aliases/ClassType.md) \| `undefined`

Retrieves a class from the registry by its name.

#### Parameters

##### name

`string`

The name of the class to retrieve.

#### Returns

[`ClassType`](../../common/type-aliases/ClassType.md) \| `undefined`

The class constructor if found, otherwise undefined.

***

### getAll()

> **getAll**(): [`ClassType`](../../common/type-aliases/ClassType.md)[]

Retrieves all registered classes from the registry.

#### Returns

[`ClassType`](../../common/type-aliases/ClassType.md)[]

An array of all registered class constructors.

***

### getWithMetadata()

> **getWithMetadata**(`metadata`): [`ClassType`](../../common/type-aliases/ClassType.md)[]

Retrieves all registered classes that have the specified metadata.

#### Parameters

##### metadata

[`MetadataKey`](../../common/classes/MetadataKey.md)

The metadata to filter by.

#### Returns

[`ClassType`](../../common/type-aliases/ClassType.md)[]

An array of class constructors that have the specified metadata.

***

### register()

> **register**(`constructor`): `void`

Registers a class in the registry.

#### Parameters

##### constructor

[`ClassType`](../../common/type-aliases/ClassType.md)

The class constructor to register.

#### Returns

`void`

***

### remove()

> **remove**(`constructor`): `void`

Removes a class from the registry.

#### Parameters

##### constructor

[`ClassType`](../../common/type-aliases/ClassType.md)

The class constructor to remove.

#### Returns

`void`
