# Interface: PluginRegistryOptions

Options of the plugin registry.

## Properties

### parallel?

> `optional` **parallel?**: `boolean`

Whether the plugins of the same level of the dependency graph run their lifecycle methods at the same time. When `false`, the plugins
run them one by one, in dependency order. Defaults to `true`.
