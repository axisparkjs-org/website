# Class: ParseArrayPipeStep

+ * An interface representing an executable object. It defines an `execute` method that can be called to perform some action or operation. The `execute` method can accept any number of arguments of unknown types and can return any type of value.
+

## Implements

- [`PipeStep`](../interfaces/PipeStep.md)\<`unknown`, `unknown`[]\>

## Constructors

### Constructor

> **new ParseArrayPipeStep**(`injector`): `ParseArrayPipeStep`

#### Parameters

##### injector

[`Injector`](../../di/classes/Injector.md)

#### Returns

`ParseArrayPipeStep`

## Methods

### execute()

> **execute**(`parameter`, `config?`, `context?`): `Promise`\<`any`\>

#### Parameters

##### parameter

[`ParameterDefinition`](ParameterDefinition.md)

##### config?

[`ParseArrayPipeStepConfig`](../interfaces/ParseArrayPipeStepConfig.md)

##### context?

[`ExecutionContext`](../interfaces/ExecutionContext.md)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`PipeStep`](../interfaces/PipeStep.md).[`execute`](../interfaces/PipeStep.md#execute)
