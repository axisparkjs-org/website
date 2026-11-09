# Function: Secured()

> **Secured**(`data`): `ClassDecorator` & `MethodDecorator`

Marks a controller class or handler method as protected by authentication and
authorization.

Class policies apply to every handler in the class. Method policies apply to
that handler only. When both are present, the authorization engine evaluates
both sets and requires every decision to allow the request.

A secured handler with an empty policy list still requires authentication.

## Parameters

### data

`Pick`\<[`SecuredMetadata`](../interfaces/SecuredMetadata.md), `"policies"`\>

Security metadata to attach. The `policies` property lists
authorization policy classes to resolve from the dependency injection
container.

## Returns

`ClassDecorator` & `MethodDecorator`

A decorator usable on a class or a method.

## Example

```ts
@Controller('/reports')
@Secured({ policies: [SignedInPolicy] })
class ReportsController {
  @Get('/:id')
  @Secured({ policies: [ReportOwnerPolicy] })
  getReport() {}
}
```
