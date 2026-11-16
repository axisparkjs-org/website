# Interface: FactoryProvider\<T\>

An interface for factory providers in the dependency injection system. It extends the base provider interface and adds a property for the factory function to be used.

## Extends

- `BaseProvider`\<`T`\>

## Type Parameters

### T

`T` = `unknown`

## Properties

### forClass

> **forClass**: [`ClassType`](../../common/type-aliases/ClassType.md)\<`T`\>

***

### inject?

> `optional` **inject?**: [`Token`](../type-aliases/Token.md)[]

***

### scope

> **scope**: [`InjectableScopes`](../enumerations/InjectableScopes.md)

***

### token

> **token**: [`Token`](../type-aliases/Token.md)\<`T`\>

#### Inherited from

`BaseProvider.token`

***

### useFactory

> **useFactory**: (...`args`) => `T` \| `Promise`\<`T`\>

#### Parameters

##### args

...`any`[]

#### Returns

`T` \| `Promise`\<`T`\>
