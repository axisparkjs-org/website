# Class: CatchStepDefinition

A class representing a catch step definition.
It extends the `StepDefinition` class and specifies the step type as `Filter`.

## Extends

- [`StepDefinition`](StepDefinition.md)

## Constructors

### Constructor

> **new CatchStepDefinition**(`global`, `priority`, `transport`, `target`, `propertyKey`, `type`, `acceptedErrors`): `CatchStepDefinition`

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

[`Filter`](../enumerations/StepType.md#filter)

##### acceptedErrors

[`ClassType`](../../common/type-aliases/ClassType.md)\<`Error`\>[]

#### Returns

`CatchStepDefinition`

#### Overrides

[`StepDefinition`](StepDefinition.md).[`constructor`](StepDefinition.md#constructor)

## Properties

### acceptedErrors

> `readonly` **acceptedErrors**: [`ClassType`](../../common/type-aliases/ClassType.md)\<`Error`\>[]

***

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

> `readonly` **type**: [`Filter`](../enumerations/StepType.md#filter)

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
