# Abstract Class: StepDefinition

An abstract class representing the definition of a step in the execution context.

## Extended by

- [`HandleStepDefinition`](HandleStepDefinition.md)
- [`CheckStepDefinition`](CheckStepDefinition.md)
- [`BeforeStepDefinition`](BeforeStepDefinition.md)
- [`AfterStepDefinition`](AfterStepDefinition.md)
- [`CatchStepDefinition`](CatchStepDefinition.md)

## Implements

- [`ExecutionHandler`](../interfaces/ExecutionHandler.md)

## Constructors

### Constructor

> **new StepDefinition**(`global`, `priority`, `transport`, `target`, `propertyKey`, `type`): `StepDefinition`

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

`StepDefinition`

## Properties

### global

> `readonly` **global**: `boolean`

***

### priority

> `readonly` **priority**: `number`

***

### propertyKey

> `readonly` **propertyKey**: `string` \| `symbol`

#### Implementation of

[`ExecutionHandler`](../interfaces/ExecutionHandler.md).[`propertyKey`](../interfaces/ExecutionHandler.md#propertykey)

***

### target

> `readonly` **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Implementation of

[`ExecutionHandler`](../interfaces/ExecutionHandler.md).[`target`](../interfaces/ExecutionHandler.md#target)

***

### transport

> `readonly` **transport**: [`ExecutionTransport`](../enumerations/ExecutionTransport.md)

***

### type

> `readonly` **type**: [`StepType`](../enumerations/StepType.md)

## Methods

### fromMetadata()

> `static` **fromMetadata**(`sMM`, `sTM`): `StepDefinition`

Creates a step definition from the provided metadata.

#### Parameters

##### sMM

`StepMethodMetadata`

The method metadata for the step.

##### sTM

`StepTargetMetadata`

The target metadata for the step.

#### Returns

`StepDefinition`

A new step definition based on the metadata.
