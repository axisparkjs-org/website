# Class: SettingsLoader

Loads the application settings: reads the `.env` files, combines them with the environment variables, runs the `load` function and validates the result. The returned object is deeply frozen.

```typescript
const settings = new SettingsLoader().load({ envFiles: ['.env'], load: (env) => ({ port: env.int('PORT', 3000) }) });
```

## Constructors

### Constructor

> **new SettingsLoader**(`environment?`, `cwd?`): `SettingsLoader`

Creates a new loader.

#### Parameters

##### environment?

`ProcessEnv` = `process.env`

The environment variables, which win over the values of the files. Defaults to `process.env`.

##### cwd?

`string` = `...`

The directory the `.env` files are relative to. Defaults to `process.cwd()`.

#### Returns

`SettingsLoader`

## Methods

### freeze()

> **freeze**\<`T`\>(`value`): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

Freezes an object, and its nested objects and arrays.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

The value to freeze.

#### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

The same value, frozen.

***

### load()

> **load**\<`T`\>(`options`): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

Loads the settings.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### options

[`SettingsOptions`](../interfaces/SettingsOptions.md)\<`T`\>

The settings options of the application.

#### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

The deeply frozen settings object.

#### Throws

InvalidSettingsError when a variable is missing or invalid.
