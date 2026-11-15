# Class: MetadataStatic

Static class for managing metadata using the Reflect Metadata API. It provides methods to define, get, and check metadata on classes, methods, properties, and parameters. The class uses the Reflect Metadata API to store and retrieve metadata associated with specified keys and values.

## Constructors

### Constructor

> **new MetadataStatic**(): `MetadataStatic`

#### Returns

`MetadataStatic`

## Methods

### define()

> **define**(`key`, `value`, `target`, `propertyKey?`, `normalizeTarget?`): `void`

Defines metadata for a target object or its property. It uses the Reflect Metadata API to store the metadata associated with the specified key and value. The method can be used to define metadata on classes, methods, properties, and parameters.

#### Parameters

##### key

[`MetadataKey`](MetadataKey.md)

The metadata key used to identify the metadata.

##### value

`unknown`

The metadata value to be associated with the target.

##### target

`object`

The target object on which the metadata is defined.

##### propertyKey?

`string` \| `symbol`

An optional property key for defining metadata on a specific property or method of the target.

##### normalizeTarget?

`boolean` = `true`

A boolean indicating whether to normalize the target to its constructor (default: true). If true, the target will be normalized to its constructor before defining the metadata. If false, the metadata will be defined directly on the provided target object.

#### Returns

`void`

***

### get()

> **get**\<`T`\>(`key`, `target`, `propertyKey?`, `normalizeTarget?`): `T` \| `undefined`

Retrieves metadata for a target object or its property. It uses the Reflect Metadata API to get the metadata associated with the specified key. The method can be used to retrieve metadata from classes, methods, properties, and parameters.

#### Type Parameters

##### T

`T`

#### Parameters

##### key

[`MetadataKey`](MetadataKey.md)

The metadata key used to identify the metadata.

##### target

`object`

The target object from which the metadata is retrieved.

##### propertyKey?

`string` \| `symbol`

An optional property key for retrieving metadata from a specific property or method of the target.

##### normalizeTarget?

`boolean` = `true`

A boolean indicating whether to normalize the target to its constructor (default: true). If true, the target will be normalized to its constructor before retrieving the metadata. If false, the metadata will be retrieved directly from the provided target object.

#### Returns

`T` \| `undefined`

The metadata value associated with the specified key, or `undefined` if no metadata is found.

***

### has()

> **has**(`key`, `target`, `propertyKey?`, `normalizeTarget?`): `boolean`

Checks if metadata exists for a target object or its property. It uses the Reflect Metadata API to check the existence of metadata associated with the specified key. The method can be used to check metadata from classes, methods, properties, and parameters.

#### Parameters

##### key

[`MetadataKey`](MetadataKey.md)

The metadata key used to identify the metadata.

##### target

`object`

The target object for which the metadata is checked.

##### propertyKey?

`string` \| `symbol`

An optional property key for checking metadata on a specific property or method of the target.

##### normalizeTarget?

`boolean` = `true`

A boolean indicating whether to normalize the target to its constructor (default: true). If true, the target will be normalized to its constructor before checking the metadata. If false, the metadata will be checked directly on the provided target object.

#### Returns

`boolean`

A boolean indicating whether the metadata exists.

***

### normalizeTarget()

> **normalizeTarget**(`target`): [`ClassType`](../type-aliases/ClassType.md)

Normalizes the target to its constructor.

#### Parameters

##### target

`object`

The target object to normalize.

#### Returns

[`ClassType`](../type-aliases/ClassType.md)

The normalized target object.
