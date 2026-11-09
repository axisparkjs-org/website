# Class: MaxPipeStep

+ * An interface representing an executable object. It defines an `execute` method that can be called to perform some action or operation. The `execute` method can accept any number of arguments of unknown types and can return any type of value.
+

## Implements

- [`PipeStep`](../interfaces/PipeStep.md)\<`number`, `number`\>

## Constructors

### Constructor

> **new MaxPipeStep**(): `MaxPipeStep`

#### Returns

`MaxPipeStep`

## Methods

### execute()

> **execute**(`parameter`, `config`): `any`

#### Parameters

##### parameter

[`ParameterDefinition`](ParameterDefinition.md)

##### config

[`MaxPipeStepConfig`](../interfaces/MaxPipeStepConfig.md)

#### Returns

`any`

#### Implementation of

[`PipeStep`](../interfaces/PipeStep.md).[`execute`](../interfaces/PipeStep.md#execute)
