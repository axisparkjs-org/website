# Enumeration: PluginLifecycle

Represents the lifecycle states of a plugin.

The lifecycle states are:
- `Created`: The plugin has been created but not yet registered.
- `Registered`: The plugin has been registered and is ready to be started.
- `Started`: The plugin has been started and is currently running.
- `Stopped`: The plugin has been stopped and is no longer running.
- `Error`: The plugin has encountered an error during its lifecycle.

## Enumeration Members

### Created

> **Created**: `"created"`

***

### Error

> **Error**: `"error"`

***

### Registered

> **Registered**: `"registered"`

***

### Started

> **Started**: `"started"`

***

### Stopped

> **Stopped**: `"stopped"`
