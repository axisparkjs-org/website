# Interface: RedisStoreOptions

Options of a `RedisStore`.

## Properties

### prefix?

> `optional` **prefix?**: `string`

The prefix of every key, such as `myapp:`. The kind of store is added after it, so the keys of the rate limit store
start with `myapp:rate-limit:`. Use a different prefix for each application that shares the same Redis database.
