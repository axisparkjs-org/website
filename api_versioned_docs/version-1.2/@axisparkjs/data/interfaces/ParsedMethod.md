# Interface: ParsedMethod

Normalized structure shared by SQL and Mongo query engines.

## Properties

### operation

> **operation**: [`QueryOperation`](../type-aliases/QueryOperation.md)

Result operation inferred from the method prefix.

***

### order

> **order**: `object`[]

Ordered entity properties requested by the optional `OrderBy` clause.

#### direction

> **direction**: `"ASC"` \| `"DESC"`

#### propertyPath

> **propertyPath**: `string`

***

### predicateGroups

> **predicateGroups**: [`ParsedPredicate`](ParsedPredicate.md)[][]

AND-connected predicate groups, combined with OR between groups.
