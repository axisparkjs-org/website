# Type Alias: DistributiveOmit\<T, K\>

> **DistributiveOmit**\<`T`, `K`\> = `T` *extends* `any` ? `Omit`\<`T`, `K`\> : `never`

A utility type that omits properties from a type `T` based on the keys specified in `K`. This type is distributive, meaning it can be applied to union types, resulting in a new type with the specified keys omitted from each member of the union.

## Type Parameters

### T

`T`

The type from which properties will be omitted.

### K

`K` *extends* `PropertyKey`

The keys of the properties to omit from type `T`.

## Example

```typescript
type User = { id: number; name: string; email: string };
type UserWithoutEmail = DistributiveOmit<User, 'email'>; // Result: { id: number; name: string }
```
