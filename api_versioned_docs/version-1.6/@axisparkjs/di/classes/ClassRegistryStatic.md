# Class: ClassRegistryStatic

A static class for managing the registration and retrieval of classes.
Classes are stored by identity, so two different classes with the same name are both registered.

## Constructors

### Constructor

> **new ClassRegistryStatic**(): `ClassRegistryStatic`

#### Returns

`ClassRegistryStatic`

## Methods

### getAll()

> **getAll**(): [`ClassType`](../../common/type-aliases/ClassType.md)[]

Retrieves all registered classes from the registry.

#### Returns

[`ClassType`](../../common/type-aliases/ClassType.md)[]

An array of all registered class constructors, in registration order.

***

### getAllByName()

> **getAllByName**(`name`): [`ClassType`](../../common/type-aliases/ClassType.md)[]

Retrieves every registered class with the specified name. Names are not unique: different classes can share a name.

#### Parameters

##### name

`string`

The name of the classes to retrieve.

#### Returns

[`ClassType`](../../common/type-aliases/ClassType.md)[]

An array of the class constructors with that name, in registration order.

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

### has()

> **has**(`constructor`): `boolean`

Checks whether a class is registered.

#### Parameters

##### constructor

[`ClassType`](../../common/type-aliases/ClassType.md)

The class constructor to check.

#### Returns

`boolean`

True if the class is registered, otherwise false.

***

### register()

> **register**(`constructor`): `void`

Registers a class in the registry. Registering the same class again has no effect.

#### Parameters

##### constructor

[`ClassType`](../../common/type-aliases/ClassType.md)

The class constructor to register.

#### Returns

`void`

***

### remove()

> **remove**(`constructor`): `void`

Removes a class from the registry. Other classes with the same name are kept.

#### Parameters

##### constructor

[`ClassType`](../../common/type-aliases/ClassType.md)

The class constructor to remove.

#### Returns

`void`
