# Class: DataSourceHealthIndicator

A health indicator that checks a TypeORM data source by running a lightweight query (`SELECT 1` in SQL databases, `ping` in MongoDB).

## Extends

- [`HealthIndicator`](../../core/classes/HealthIndicator.md)

## Constructors

### Constructor

> **new DataSourceHealthIndicator**(`dataSource`): `DataSourceHealthIndicator`

#### Parameters

##### dataSource

`DataSource`

#### Returns

`DataSourceHealthIndicator`

#### Overrides

[`HealthIndicator`](../../core/classes/HealthIndicator.md).[`constructor`](../../core/classes/HealthIndicator.md#constructor)

## Methods

### check()

> **check**(): `Promise`\<[`HealthCheckResult`](../../core/interfaces/HealthCheckResult.md)\>

Checks that the data source is initialized and that the database answers a lightweight query.

#### Returns

`Promise`\<[`HealthCheckResult`](../../core/interfaces/HealthCheckResult.md)\>

A promise resolving to the result of the health check.

#### Overrides

[`HealthIndicator`](../../core/classes/HealthIndicator.md).[`check`](../../core/classes/HealthIndicator.md#check)
