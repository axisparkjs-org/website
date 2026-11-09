# Class: ParameterGenerator

A generator for creating parameter definitions based on metadata.

## Implements

- [`Generator`](../../common/interfaces/Generator.md)\<[`ParameterDefinition`](ParameterDefinition.md)[]\>

## Constructors

### Constructor

> **new ParameterGenerator**(): `ParameterGenerator`

#### Returns

`ParameterGenerator`

## Methods

### generate()

> **generate**(`executionContext`, `executionHandler`, `resolving?`): [`ParameterDefinition`](ParameterDefinition.md)[]

Generates an array of `ParameterDefinition` instances based on the provided execution context and handler.
It retrieves parameter metadata, resolves their values using registered resolvers, and constructs the corresponding parameter definitions.

#### Parameters

##### executionContext

[`ExecutionContext`](../interfaces/ExecutionContext.md) \| `undefined`

The execution context containing relevant information for parameter resolution.

##### executionHandler

[`ExecutionHandler`](../interfaces/ExecutionHandler.md)

The execution handler that provides metadata for the parameters.

##### resolving?

`boolean` = `true`

A boolean indicating whether to resolve the parameter values or just generate their definitions. Default is `true`.

#### Returns

[`ParameterDefinition`](ParameterDefinition.md)[]

An array of `ParameterDefinition` instances representing the resolved parameters.

#### Implementation of

[`Generator`](../../common/interfaces/Generator.md).[`generate`](../../common/interfaces/Generator.md#generate)

***

### registerParameter()

> `static` **registerParameter**(`parameter`, `resolver`): `void`

Registers a parameter resolver for a specific parameter type.

#### Parameters

##### parameter

`string`

The parameter type for which to register a resolver.

##### resolver

[`ParameterResolver`](../interfaces/ParameterResolver.md)\<`any`\>

The resolver to register.

#### Returns

`void`
