# Interface: Page\<T\>

A page of the results of a query, with the totals of every page.

## Type Parameters

### T

`T`

## Properties

### content

> **content**: `T`[]

The entities of the page.

***

### page

> **page**: `number`

Zero-based page index.

***

### size

> **size**: `number`

Number of entities requested per page.

***

### totalElements

> **totalElements**: `number`

Number of entities that match the query in every page.

***

### totalPages

> **totalPages**: `number`

Number of pages, `0` when no entity matches.
