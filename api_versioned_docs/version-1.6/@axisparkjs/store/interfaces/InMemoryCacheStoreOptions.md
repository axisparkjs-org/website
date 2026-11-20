# Interface: InMemoryCacheStoreOptions

Options of the in-memory cache store.

## Properties

### maxEntries?

> `optional` **maxEntries?**: `number`

The maximum number of values kept in memory. When a new value exceeds it, the least recently used value is removed. Defaults to
10 000; `Infinity` keeps every value until it expires.
