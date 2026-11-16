# Function: InjectRepository()

> **InjectRepository**(`repository`): `ParameterDecorator`

Injects a generated repository by its decorated repository class.

## Parameters

### repository

[`ClassType`](../../common/type-aliases/ClassType.md)

## Returns

`ParameterDecorator`

## Example

```ts
`constructor(@InjectRepository(UserRepository) users: UserRepository) {}`
```
