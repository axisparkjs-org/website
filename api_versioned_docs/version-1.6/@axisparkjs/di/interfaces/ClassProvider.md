# Interface: ClassProvider\<T\>

An interface for class providers in the dependency injection system. It extends the base provider interface and adds a property for the class to be instantiated.

## Extends

- `BaseProvider`\<`T`\>

## Type Parameters

### T

`T` = `unknown`

## Properties

### scope

> **scope**: [`InjectableScopes`](../enumerations/InjectableScopes.md)

***

### token

> **token**: [`Token`](../type-aliases/Token.md)\<`T`\>

#### Inherited from

`BaseProvider.token`

***

### useClass

> **useClass**: [`ClassType`](../../common/type-aliases/ClassType.md)\<`T`\>
