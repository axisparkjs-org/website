# Class: HandleStepDefinition

A class representing a middleware step definition.
It extends the `StepDefinition` class and specifies the step type as `Middleware`.

## Extends

- [`StepDefinition`](StepDefinition.md)

## Constructors

### Constructor

> **new HandleStepDefinition**(`global`, `priority`, `transport`, `target`, `propertyKey`, `type`): `HandleStepDefinition`

#### Parameters

##### global

`boolean`

##### priority

`number`

##### transport

[`ExecutionTransport`](../enumerations/ExecutionTransport.md)

##### target

[`ClassType`](../../common/type-aliases/ClassType.md)

##### propertyKey

`string` \| `symbol`

##### type

[`StepType`](../enumerations/StepType.md)

#### Returns

`HandleStepDefinition`

#### Inherited from

[`StepDefinition`](StepDefinition.md).[`constructor`](StepDefinition.md#constructor)

## Properties

### global

> `readonly` **global**: `boolean`

#### Inherited from

[`StepDefinition`](StepDefinition.md).[`global`](StepDefinition.md#global)

***

### priority

> `readonly` **priority**: `number`

#### Inherited from

[`StepDefinition`](StepDefinition.md).[`priority`](StepDefinition.md#priority)

***

### propertyKey

> `readonly` **propertyKey**: `string` \| `symbol`

#### Inherited from

[`StepDefinition`](StepDefinition.md).[`propertyKey`](StepDefinition.md#propertykey)

***

### target

> `readonly` **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`StepDefinition`](StepDefinition.md).[`target`](StepDefinition.md#target)

***

### transport

> `readonly` **transport**: [`ExecutionTransport`](../enumerations/ExecutionTransport.md)

#### Inherited from

[`StepDefinition`](StepDefinition.md).[`transport`](StepDefinition.md#transport)

***

### type

> `readonly` **type**: [`Middleware`](../enumerations/StepType.md#middleware)

#### Overrides

[`StepDefinition`](StepDefinition.md).[`type`](StepDefinition.md#type)

## Methods

### fromMetadata()

> `static` **fromMetadata**(`sMM`, `sTM`): [`StepDefinition`](StepDefinition.md)

Creates a step definition from the provided metadata.

#### Parameters

##### sMM

`StepMethodMetadata`

The method metadata for the step.

##### sTM

`StepTargetMetadata`

The target metadata for the step.

#### Returns

[`StepDefinition`](StepDefinition.md)

A new step definition based on the metadata.

#### Inherited from

[`StepDefinition`](StepDefinition.md).[`fromMetadata`](StepDefinition.md#frommetadata)
