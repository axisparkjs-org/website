# Function: contentDisposition()

> **contentDisposition**(`filename`, `type?`): `string`

Builds the value of a `Content-Disposition` header with a file name, as described by RFC 6266.

- The control characters (such as `\r` and `\n`) and the path separators (`/` and `\`) are removed from the name, so a name taken from user data can not produce an invalid header or a path.
- `filename` has an ASCII fallback of the name: the characters outside ASCII are replaced with `?`, and `"` is escaped with a backslash.
- `filename*` has the name encoded in UTF-8 and percent-encoded (RFC 8187), and is only added when the name is not plain ASCII.

## Parameters

### filename

`string`

The name of the file.

### type?

[`ContentDispositionType`](../type-aliases/ContentDispositionType.md) = `'attachment'`

The type of the disposition. Defaults to `attachment`.

## Returns

`string`

The value of the header, for example `attachment; filename="a?o.txt"; filename*=UTF-8''a%C3%B1o.txt`.

## Example

```ts
contentDisposition('report.pdf'); // attachment; filename="report.pdf"
```
