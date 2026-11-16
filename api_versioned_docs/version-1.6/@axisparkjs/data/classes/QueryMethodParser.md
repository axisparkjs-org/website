# Class: QueryMethodParser

## Constructors

### Constructor

> **new QueryMethodParser**(): `QueryMethodParser`

#### Returns

`QueryMethodParser`

## Methods

### extractPageRequest()

> **extractPageRequest**(`operation`, `methodArgs`): `object`

Removes and validates a final page request argument, when present.

#### Parameters

##### operation

[`QueryOperation`](../type-aliases/QueryOperation.md)

##### methodArgs

`unknown`[]

#### Returns

`object`

##### methodArgs

> **methodArgs**: `unknown`[]

##### pageRequest?

> `optional` **pageRequest?**: [`PageRequest`](../interfaces/PageRequest.md)

***

### parse()

> **parse**\<`T`\>(`repository`, `methodName`): [`ParsedMethod`](../interfaces/ParsedMethod.md)

Parses a supported derived method name against the entity's TypeORM metadata.

#### Type Parameters

##### T

`T` *extends* `ObjectLiteral`

#### Parameters

##### repository

`Repository`\<`T`\>

##### methodName

`string`

#### Returns

[`ParsedMethod`](../interfaces/ParsedMethod.md)

***

### toPropertyTag()

> **toPropertyTag**(`propertyPath`): `string`

Converts a metadata property path such as `profile.education` to `ProfileEducation`.

#### Parameters

##### propertyPath

`string`

#### Returns

`string`
