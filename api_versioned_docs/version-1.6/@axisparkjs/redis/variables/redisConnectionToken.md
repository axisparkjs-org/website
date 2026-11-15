# Variable: redisConnectionToken

> `const` **redisConnectionToken**: (`key`) => [`InjectionToken`](../../di/classes/InjectionToken.md)

Returns the injection token of a named Redis connection. The same name always gives the same token instance.

## Parameters

### key

`string`

## Returns

[`InjectionToken`](../../di/classes/InjectionToken.md)

The `REDIS_CONNECTION_<name>` token.
