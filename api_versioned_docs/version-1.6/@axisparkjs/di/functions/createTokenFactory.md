# Function: createTokenFactory()

> **createTokenFactory**\<`K`\>(`describe`): (`key`) => [`InjectionToken`](../classes/InjectionToken.md)

Creates a function that returns one injection token per key, so the same key always gives the same token. Use it for tokens that depend on a value known at runtime, such as the name of a connection, which are created in more than one place (where the provider is bound and where it is injected).

## Type Parameters

### K

`K`

The type of the keys.

## Parameters

### describe

(`key`) => `string`

Builds the description of the token of a key, used in messages and logs.

## Returns

A function that returns the token of a key, creating it the first time.

(`key`) => [`InjectionToken`](../classes/InjectionToken.md)

## Example

```ts
const connectionToken = createTokenFactory((name: string) => `CONNECTION_${name}`);
connectionToken('MAIN') === connectionToken('MAIN'); // true
```
