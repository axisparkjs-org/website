# Type Alias: TrustProxyOption

> **TrustProxyOption** = `boolean` \| `number` \| `string` \| `string`[]

The proxies whose `X-Forwarded-For` header is trusted to resolve the client address of a request.

- `false`: no proxy is trusted, and the client address is the address of the socket.
- `true`: every proxy is trusted. Use it only when the application cannot be reached without the proxy.
- A number: the number of proxies between the client and the application.
- A string or string array: addresses or subnets of the trusted proxies, such as `'10.0.0.0/8'` or `'loopback'`. A string can contain several values separated by commas.
