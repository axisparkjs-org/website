# Interface: ValueProvider\<T\>

An interface for value providers in the dependency injection system. It extends the base provider interface and adds a property for the value to be injected.

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

### useValue

> **useValue**: `T`
