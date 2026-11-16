# Type Alias: RouteHandler

> **RouteHandler** = (`context`) => `void` \| `Promise`\<`void`\>

A type representing a route handler function.

## Parameters

### context

`Pick`\<[`HttpContext`](../interfaces/HttpContext.md), `"request"` \| `"response"` \| `"session"`\>

The HTTP context containing request, response, and session information.

## Returns

`void` \| `Promise`\<`void`\>

A promise that resolves when the route handling is complete.
