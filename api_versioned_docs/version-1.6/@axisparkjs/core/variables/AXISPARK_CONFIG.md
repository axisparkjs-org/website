# Variable: AXISPARK\_CONFIG

> `const` **AXISPARK\_CONFIG**: `InjectionToken`

An injection token used to provide configuration options for the Axispark framework. This token can be used to inject an instance of `AxiSparkConfig` into components or services that require access to the configuration settings.

The `AxiSparkConfig` interface defines the shape of the configuration object, which includes optional properties such as `name`, `basePath`, `environment`, `banner`, and `logTransports`. These properties allow developers to customize the behavior and settings of the Axispark framework according to their application's needs.

Example usage:

```typescript
import { AXISPARK_CONFIG, AxiSparkConfig } from '@axisparkjs/core';
import { Injectable, Inject } from '@axisparkjs/di';

@Injectable()
class MyService {
  constructor(@Inject(AXISPARK_CONFIG) private config: AxiSparkConfig) {}
}
```
