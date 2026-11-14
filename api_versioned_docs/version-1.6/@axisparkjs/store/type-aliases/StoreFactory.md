# Type Alias: StoreFactory\<K\>

> **StoreFactory**\<`K`\> = (`kind`, `context`) => [`StoreTypes`](../interfaces/StoreTypes.md)\[`K`\] \| `Promise`\<[`StoreTypes`](../interfaces/StoreTypes.md)\[`K`\]\>

Creates the store of one kind.

## Type Parameters

### K

`K` *extends* [`StoreKind`](StoreKind.md)

## Parameters

### kind

`K`

### context

[`StoreContext`](../interfaces/StoreContext.md)

## Returns

[`StoreTypes`](../interfaces/StoreTypes.md)\[`K`\] \| `Promise`\<[`StoreTypes`](../interfaces/StoreTypes.md)\[`K`\]\>
