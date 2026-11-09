# Interface: AxiSparkConfig

An interface representing the configuration options for the Axispark framework. It defines optional properties that can be used to customize the behavior and settings of the framework.

Properties:
- `name`: An optional string representing the name of the application or module.
- `basePath`: An optional string representing the base path for the application or module.
- `environment`: An optional string that can be either 'production', 'development', or 'test', indicating the current environment of the application.
- `banner`: An optional boolean indicating whether to display a banner in the console when the application starts.
- `logTransports`: An optional array of `LogTransport` instances that define how logs should be handled and where they should be sent.

Example usage:

```typescript
const config: AxiSparkConfig = {
    name: 'Example App',
    basePath: __dirname,
    logTransports: [
        new ConsoleTransport({
            minLevel: LogLevel.Info,
            formatter: new SimpleFormatter()
        })
    ]
};
```

## Properties

### banner?

> `optional` **banner?**: `boolean`

An optional boolean indicating whether to display a banner in the console when the application starts. If set to true, a banner will be displayed; if false, no banner will be shown.

***

### basePath?

> `optional` **basePath?**: `string`

An optional string representing the base path for the application or module. This can be used to resolve relative paths for resources or configuration files.

***

### environment?

> `optional` **environment?**: `"production"` \| `"development"` \| `"test"`

An optional string that can be either 'production', 'development', or 'test', indicating the current environment of the application. This can be used to conditionally enable or disable features based on the environment.

***

### logTransports?

> `optional` **logTransports?**: `LogTransport`[]

An optional array of `LogTransport` instances that define how logs should be handled and where they should be sent. This allows for customization of logging behavior, such as sending logs to different outputs or formatting them in specific ways.

***

### name?

> `optional` **name?**: `string`

An optional string representing the name of the application or module. This can be used for identification purposes in logs or other outputs.
