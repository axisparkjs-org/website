# Interface: SecuredMetadata

Metadata recorded by [Secured](../functions/Secured.md) for a class or handler method.

## Extends

- [`MetadataFromClassOrMethod`](../../common/type-aliases/MetadataFromClassOrMethod.md)

## Properties

### policies

> **policies**: [`ClassType`](../../common/type-aliases/ClassType.md)\<[`AuthorizationPolicy`](../classes/AuthorizationPolicy.md)\>[]

Policy classes to evaluate for this target, in declaration order.

***

### propertyKey?

> `optional` **propertyKey?**: `string` \| `symbol`

#### Inherited from

`MetadataFromClassOrMethod.propertyKey`

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

`MetadataFromClassOrMethod.target`
