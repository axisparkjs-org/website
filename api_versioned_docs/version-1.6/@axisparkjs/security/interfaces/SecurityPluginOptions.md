# Interface: SecurityPluginOptions

Configuration accepted by [SecurityPlugin](../classes/SecurityPlugin.md).

The plugin supplies a framework-neutral security pipeline. It does not
prescribe credential formats, identity storage, policy syntax, or protocol
error responses; applications provide authenticators and policies.

## Extends

- [`PluginOptions`](../../core/interfaces/PluginOptions.md)

## Properties

### authenticator?

> `optional` **authenticator?**: `object`

The authenticator configuration for the Security plugin.
Controls when authentication runs and which authenticator classes are
considered. If omitted by [SecurityPluginOptionsFactory](../variables/SecurityPluginOptionsFactory.md), the
strategy defaults to `all`.

Default is 'all', which means all available authenticators will be used.

#### selected?

> `optional` **selected?**: [`AuthenticatorType`](AuthenticatorType.md)\<[`Authenticator`](../classes/Authenticator.md)\>[]

Authenticator classes to run when `strategy` is `selected`. The
injector must be able to construct each class and its dependencies.

#### strategy

> **strategy**: `"selected"` \| `"all"`

Selection mode. `selected` runs only the classes in `selected` and is
useful for deterministic application configuration. `all` discovers
every injectable class registered in the application that extends
[Authenticator](../classes/Authenticator.md); use it only when every registered
authenticator should participate.

#### transports?

> `optional` **transports?**: readonly [`ExecutionTransport`](../../engine/enumerations/ExecutionTransport.md)[]

Transports on which the authentication engine runs. This is a
pipeline-level switch; individual authenticator classes can further
restrict themselves with their static `transports` property. Defaults
to all transports. Include every transport with secured handlers:
this engine also discovers `@Secured()` metadata for the guards, so
disabling it for a transport prevents those guards from recognizing
secured targets on that transport.

***

### plugin

> **plugin**: [`PluginType`](../../core/interfaces/PluginType.md)

#### Inherited from

[`PluginOptions`](../../core/interfaces/PluginOptions.md).[`plugin`](../../core/interfaces/PluginOptions.md#plugin)
