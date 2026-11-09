# Class: ValidateSchemaPipeStep

+ * An interface representing an executable object. It defines an `execute` method that can be called to perform some action or operation. The `execute` method can accept any number of arguments of unknown types and can return any type of value.
+

## Implements

- [`PipeStep`](../interfaces/PipeStep.md)\<`unknown`, `object`\>

## Constructors

### Constructor

> **new ValidateSchemaPipeStep**(): `ValidateSchemaPipeStep`

#### Returns

`ValidateSchemaPipeStep`

## Methods

### execute()

> **execute**(`parameter`, `config?`): `Promise`\<`any`\>

#### Parameters

##### parameter

[`ParameterDefinition`](ParameterDefinition.md)

##### config?

[`ValidateSchemaPipeStepConfig`](../interfaces/ValidateSchemaPipeStepConfig.md)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`PipeStep`](../interfaces/PipeStep.md).[`execute`](../interfaces/PipeStep.md#execute)
