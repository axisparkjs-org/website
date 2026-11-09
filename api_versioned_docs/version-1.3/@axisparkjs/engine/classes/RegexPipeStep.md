# Class: RegexPipeStep

+ * An interface representing an executable object. It defines an `execute` method that can be called to perform some action or operation. The `execute` method can accept any number of arguments of unknown types and can return any type of value.
+

## Implements

- [`PipeStep`](../interfaces/PipeStep.md)\<`string`, `string`\>

## Constructors

### Constructor

> **new RegexPipeStep**(): `RegexPipeStep`

#### Returns

`RegexPipeStep`

## Methods

### execute()

> **execute**(`parameter`, `config`): `any`

#### Parameters

##### parameter

[`ParameterDefinition`](ParameterDefinition.md)

##### config

[`RegexPipeStepConfig`](../interfaces/RegexPipeStepConfig.md)

#### Returns

`any`

#### Implementation of

[`PipeStep`](../interfaces/PipeStep.md).[`execute`](../interfaces/PipeStep.md#execute)
