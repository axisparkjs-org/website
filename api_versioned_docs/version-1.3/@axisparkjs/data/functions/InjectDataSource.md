# Function: InjectDataSource()

> **InjectDataSource**(`name`): `ParameterDecorator`

Injects a TypeORM data source by its configured name (case-insensitive for token lookup).

## Parameters

### name

`string`

## Returns

`ParameterDecorator`

## Example

```ts
`constructor(@InjectDataSource('PRIMARY') dataSource: DataSource) {}`
```
