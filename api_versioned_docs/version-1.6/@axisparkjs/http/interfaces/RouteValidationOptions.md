# Interface: RouteValidationOptions

Options for validating declared HTTP routes during plugin registration.

## Properties

### onAmbiguous?

> `optional` **onAmbiguous?**: [`RouteValidationAction`](../type-aliases/RouteValidationAction.md)

Action for overlapping static and dynamic path segments.

#### Default

```ts
'warn'
```

***

### onDuplicate?

> `optional` **onDuplicate?**: [`RouteValidationAction`](../type-aliases/RouteValidationAction.md)

Action for routes with the same method and normalized path.

#### Default

```ts
'warn'
```

***

### onUnreachable?

> `optional` **onUnreachable?**: [`RouteValidationAction`](../type-aliases/RouteValidationAction.md)

Action for routes shadowed by an earlier wildcard route.

#### Default

```ts
'warn'
```
