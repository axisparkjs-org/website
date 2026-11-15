# Interface: HealthCheckOptions

An interface representing the options of a health check.
Properties:
- `name`: The component name of the check in the health response.
- `timeout`: The maximum time in milliseconds for the check.
- `critical`: Whether a failure of the check makes the whole application `Unhealthy`.

## Properties

### critical?

> `optional` **critical?**: `boolean`

Whether a failure of the check makes the whole application `Unhealthy`. Defaults to `true`.

***

### name?

> `optional` **name?**: `string`

The component name of the check in the health response. Defaults to the class name of the indicator.

***

### timeout?

> `optional` **timeout?**: `number`

The maximum time in milliseconds for the check. If it is exceeded, the check is reported as `Unhealthy`. Defaults to 5000.
