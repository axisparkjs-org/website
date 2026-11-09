# Interface: PipeMetadata

A type representing metadata that can come from a class, method, or parameter.

## Extends

- [`MetadataFromClassMethodOrParameter`](../../common/type-aliases/MetadataFromClassMethodOrParameter.md)

## Properties

### parameterIndex?

> `optional` **parameterIndex?**: `number`

#### Inherited from

[`ParameterMetadata`](ParameterMetadata.md).[`parameterIndex`](ParameterMetadata.md#parameterindex)

***

### pipeScope

> **pipeScope**: [`PipeScope`](../enumerations/PipeScope.md)

***

### propertyKey?

> `optional` **propertyKey?**: `string` \| `symbol`

#### Inherited from

[`StepMethodMetadataBase`](StepMethodMetadataBase.md).[`propertyKey`](StepMethodMetadataBase.md#propertykey)

***

### steps

> **steps**: ([`ClassType`](../../common/type-aliases/ClassType.md)\<[`PipeStep`](PipeStep.md)\<`unknown`, `unknown`\>\> \| \{ `pipeStep`: [`ClassType`](../../common/type-aliases/ClassType.md)\<[`PipeStep`](PipeStep.md)\<`unknown`, `unknown`\>\>; `PipeStepConfig`: [`PipeStepConfig`](../type-aliases/PipeStepConfig.md); \})[]

***

### target

> **target**: [`ClassType`](../../common/type-aliases/ClassType.md)

#### Inherited from

[`StepTargetMetadata`](StepTargetMetadata.md).[`target`](StepTargetMetadata.md#target)
