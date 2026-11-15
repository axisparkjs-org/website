# Interface: PipeStep\<I, O\>

+ * An interface representing an executable object. It defines an `execute` method that can be called to perform some action or operation. The `execute` method can accept any number of arguments of unknown types and can return any type of value.
+

## Extends

- [`Executable`](../../common/interfaces/Executable.md)

## Type Parameters

### I

`I` = `unknown`

### O

`O` = `I`

## Methods

### execute()

> **execute**(`parameter`, `config?`, `context?`): *typeof* [`PipeStepSkip`](../variables/PipeStepSkip.md) \| `O` \| `Promise`\<*typeof* [`PipeStepSkip`](../variables/PipeStepSkip.md) \| `O`\>

#### Parameters

##### parameter

[`ParameterDefinition`](../classes/ParameterDefinition.md)

##### config?

[`PipeStepConfig`](../type-aliases/PipeStepConfig.md)

##### context?

[`ExecutionContext`](ExecutionContext.md)

#### Returns

*typeof* [`PipeStepSkip`](../variables/PipeStepSkip.md) \| `O` \| `Promise`\<*typeof* [`PipeStepSkip`](../variables/PipeStepSkip.md) \| `O`\>

#### Overrides

[`Executable`](../../common/interfaces/Executable.md).[`execute`](../../common/interfaces/Executable.md#execute)
