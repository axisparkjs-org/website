# Type Alias: DeepReadonly\<T\>

> **DeepReadonly**\<`T`\> = `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* `object` ? `{ readonly [K in keyof T]: DeepReadonly<T[K]> }` : `T`

Makes every property of a type, and of its nested objects and arrays, read-only. It is the type of the application settings, which are deeply frozen.

## Type Parameters

### T

`T`
