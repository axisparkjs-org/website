# Function: Repository()

> **Repository**(`data`): `ClassDecorator`

Marks a class as a repository for an entity and registers it for automatic generation.
The class should extend [BaseRepository](../classes/BaseRepository.md) and its entity must be part of
one configured TypeORM data source.

## Parameters

### data

`Omit`\<[`RepositoryMetadata`](../interfaces/RepositoryMetadata.md), `"target"`\>

Repository metadata containing the entity class.

## Returns

`ClassDecorator`

A class decorator that records the metadata and registers the class for injection.

## Example

```ts
@Repository({ entity: User })
export class UserRepository extends BaseRepository<User> {}
```
