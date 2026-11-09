# Interface: ExistingProvider\<T\>

An interface for existing providers in the dependency injection system. It extends the base provider interface and adds a property for the existing token to be injected.

## Extends

- `BaseProvider`\<`T`\>

## Type Parameters

### T

`T` = `unknown`

## Properties

### token

> **token**: [`Token`](../type-aliases/Token.md)\<`T`\>

#### Inherited from

`BaseProvider.token`

***

### useExisting

> **useExisting**: [`Token`](../type-aliases/Token.md)\<`T`\>
