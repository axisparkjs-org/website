# Interface: HealthCheckResult

An interface representing the result of a health check. It is returned by the `check()` method of a `HealthIndicator`.
Properties:
- `status`: An enumeration value of type `HealthStatus` indicating the health status reported by the check.
- `details`: An optional object containing additional information about the checked dependency.

## Properties

### details?

> `optional` **details?**: `Record`\<`string`, `unknown`\>

An optional object containing additional information about the checked dependency, such as latency, versions or error messages.

***

### status

> **status**: [`HealthStatus`](../enumerations/HealthStatus.md)

An enumeration value of type `HealthStatus` indicating the health status reported by the check.
