# Function: MemoryStore()

> **MemoryStore**(): [`StoreFactory`](../type-aliases/StoreFactory.md)\<`"lock"`\> & [`StoreFactory`](../type-aliases/StoreFactory.md)\<`"rate-limit"`\> & [`StoreFactory`](../type-aliases/StoreFactory.md)\<`"cache"`\>

Creates the provider of the in-memory stores, which is the default store of every feature.
The stores are local to the application process: use a shared provider, such as `RedisStore` from `@axisparkjs/redis`,
when several instances of the application must share them.

## Returns

[`StoreFactory`](../type-aliases/StoreFactory.md)\<`"lock"`\> & [`StoreFactory`](../type-aliases/StoreFactory.md)\<`"rate-limit"`\> & [`StoreFactory`](../type-aliases/StoreFactory.md)\<`"cache"`\>

A provider that creates a new in-memory store each time it is called.
