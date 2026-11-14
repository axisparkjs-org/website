# Interface: ParsedPredicate

## Properties

### arity

> **arity**: `number`

Number of method arguments consumed by this predicate.

***

### ignoreCase?

> `optional` **ignoreCase?**: `boolean`

Compare the strings without case, requested by the `IgnoreCase` suffix.

***

### operator

> **operator**: [`PredicateOperatorName`](../type-aliases/PredicateOperatorName.md)

Comparison operation represented by this predicate.

***

### propertyPath

> **propertyPath**: `string`

TypeORM metadata path of the entity property.
