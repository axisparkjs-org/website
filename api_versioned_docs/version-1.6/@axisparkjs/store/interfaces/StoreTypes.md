# Interface: StoreTypes

Maps each store kind to its contract. A `StoreProvider` receives one of these kinds and returns the matching store.

Packages add their own kinds with declaration merging:
```ts
declare module '@axisparkjs/store' {
    interface StoreTypes {
        session: SessionStore;
    }
}
```

## Properties

### cache

> **cache**: [`CacheStore`](CacheStore.md)

Values cached with an optional expiration.

***

### lock

> **lock**: [`LockStore`](LockStore.md)

The locks that coordinate several instances, such as the exclusive jobs of the scheduler.

***

### rate-limit

> **rate-limit**: [`RateLimitStore`](RateLimitStore.md)

The buckets counted by the rate limits.
