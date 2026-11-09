# Type Alias: UnionToIntersection\<U\>

> **UnionToIntersection**\<`U`\> = `U` *extends* `unknown` ? (`value`) => `void` : `never` *extends* (`value`) => `void` ? `I` : `never`

Converts a union, such as the factories of several kinds, into an intersection, which is a function with one signature per kind.

## Type Parameters

### U

`U`
