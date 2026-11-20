# Class: ClassIdentifierStatic

Gives each class a unique and stable identifier for the keys kept in the stores, such as the cached results and the rate limit buckets.
`target.name` is not unique: two classes of different files can share it, and then they would share their entries.

The identifier is the name of the class, so the keys stay readable and do not change for the applications without repeated names.
When several classes registered in the `ClassRegistry` share a name, the first one keeps the name and the others get `<name>#<n>`, by
registration order. The registration order is the import order of the files, so every process of the same application gives the same
identifiers, and shared stores (such as Redis) keep working between replicas. A class that is not registered gets `<name>~<n>`, unique in
the process.

## Constructors

### Constructor

> **new ClassIdentifierStatic**(): `ClassIdentifierStatic`

#### Returns

`ClassIdentifierStatic`

## Methods

### of()

> **of**(`target`): `string`

Returns the identifier of a class. The same class always gets the same identifier.

#### Parameters

##### target

[`ClassType`](../../common/type-aliases/ClassType.md)

The class to identify.

#### Returns

`string`
