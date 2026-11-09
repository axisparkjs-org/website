# Interface: PluginOptions

Represents the options for a plugin, including the plugin type.
This interface is used to provide configuration options when registering a plugin.
The `plugin` property specifies the type of the plugin being registered.

## Extended by

- [`DataPluginOptions`](../../data/interfaces/DataPluginOptions.md)
- [`HttpPluginOptions`](../../http/interfaces/HttpPluginOptions.md)
- [`KafkaPluginOptions`](../../kafka/interfaces/KafkaPluginOptions.md)
- [`McpPluginOptions`](../../mcp/interfaces/McpPluginOptions.md)
- [`OpenApiPluginOptions`](../../openapi/interfaces/OpenApiPluginOptions.md)
- [`RabbitMQPluginOptions`](../../rabbitmq/interfaces/RabbitMQPluginOptions.md)
- [`RedisPluginOptions`](../../redis/interfaces/RedisPluginOptions.md)
- [`SchedulePluginOptions`](../../schedule/interfaces/SchedulePluginOptions.md)
- [`SecurityPluginOptions`](../../security/interfaces/SecurityPluginOptions.md)
- [`WebSocketPluginOptions`](../../websocket/interfaces/WebSocketPluginOptions.md)

## Properties

### plugin

> **plugin**: [`PluginType`](PluginType.md)
