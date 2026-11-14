# Class: EnvReader

Reads the variables of the environment for `SettingsOptions.load`. Each method converts and validates one variable, and records an error instead of throwing, so every problem is reported at once with an `InvalidSettingsError` after `load()` returns.

A variable without a default is required. A variable defined with an empty value is treated as not defined.

```typescript
load: (env) => ({
    port: env.int('PORT', 3000),
    databaseUrl: env.url('DATABASE_URL'),
    sessionSecret: env.string('SESSION_SECRET', { minLength: 32 }),
    cacheStore: env.enum('CACHE_STORE', ['memory', 'redis'], 'memory')
})
```

## Constructors

### Constructor

> **new EnvReader**(`variables`): `EnvReader`

Creates a new reader.

#### Parameters

##### variables

`Readonly`\<`Record`\<`string`, `string` \| `undefined`\>\>

The variables to read, usually the `.env` files combined with `process.env`.

#### Returns

`EnvReader`

## Accessors

### errors

#### Get Signature

> **get** **errors**(): readonly `string`[]

The problems recorded by the methods of the reader, in the order they were found.

##### Returns

readonly `string`[]

## Methods

### boolean()

> **boolean**(`name`, `defaultValue?`): `boolean`

Reads a boolean. `true`, `1`, `yes` and `on` are read as `true`, and `false`, `0`, `no` and `off` as `false`, ignoring the case.

#### Parameters

##### name

`string`

The name of the variable.

##### defaultValue?

`boolean`

The default value. Without it, the variable is required.

#### Returns

`boolean`

The value of the variable, or its default.

***

### enum()

> **enum**\<`V`\>(`name`, `values`, `defaultValue?`): `V`\[`number`\]

Reads one of a set of allowed values.

#### Type Parameters

##### V

`V` *extends* readonly `string`[]

#### Parameters

##### name

`string`

The name of the variable.

##### values

`V`

The allowed values.

##### defaultValue?

`V`\[`number`\]

The default value. Without it, the variable is required.

#### Returns

`V`\[`number`\]

The value of the variable, or its default.

***

### float()

> **float**(`name`, `defaultOrOptions?`): `number`

Reads a number, with or without decimals.

#### Parameters

##### name

`string`

The name of the variable.

##### defaultOrOptions?

`number` \| [`EnvNumberOptions`](../interfaces/EnvNumberOptions.md)

The default value, or the options of the variable (`default`, `min` and `max`).

#### Returns

`number`

The value of the variable, or its default.

***

### int()

> **int**(`name`, `defaultOrOptions?`): `number`

Reads an integer.

#### Parameters

##### name

`string`

The name of the variable.

##### defaultOrOptions?

`number` \| [`EnvNumberOptions`](../interfaces/EnvNumberOptions.md)

The default value, or the options of the variable (`default`, `min` and `max`).

#### Returns

`number`

The value of the variable, or its default.

***

### json()

> **json**\<`T`\>(`name`, `defaultValue?`): `T`

Reads a JSON value.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### name

`string`

The name of the variable.

##### defaultValue?

`T`

The default value. Without it, the variable is required.

#### Returns

`T`

The parsed value of the variable, or its default.

***

### list()

> **list**(`name`, `defaultOrOptions?`): `string`[]

Reads a list of strings separated by commas (or by `separator`). The items are trimmed and the empty items are removed.

#### Parameters

##### name

`string`

The name of the variable.

##### defaultOrOptions?

`string`[] \| [`EnvListOptions`](../interfaces/EnvListOptions.md)

The default value, or the options of the variable (`default` and `separator`).

#### Returns

`string`[]

The items of the variable, or its default.

***

### string()

> **string**(`name`, `defaultOrOptions?`): `string`

Reads a string.

#### Parameters

##### name

`string`

The name of the variable.

##### defaultOrOptions?

`string` \| [`EnvStringOptions`](../interfaces/EnvStringOptions.md)

The default value, or the options of the variable (`default`, `minLength` and `pattern`).

#### Returns

`string`

The value of the variable, or its default.

***

### url()

> **url**(`name`, `defaultOrOptions?`): `string`

Reads an absolute URL. The value is returned as it is defined, as a string.

#### Parameters

##### name

`string`

The name of the variable.

##### defaultOrOptions?

`string` \| [`EnvUrlOptions`](../interfaces/EnvUrlOptions.md)

The default value, or the options of the variable (`default` and `protocols`).

#### Returns

`string`

The value of the variable, or its default.
