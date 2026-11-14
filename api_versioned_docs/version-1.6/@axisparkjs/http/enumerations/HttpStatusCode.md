# Enumeration: HttpStatusCode

Enumeration of HTTP status codes used in responses.

## Enumeration Members

### Accepted

> **Accepted**: `202`

***

### AlreadyReported

> **AlreadyReported**: `208`

***

### ~~Ambiguous~~

> **Ambiguous**: `300`

#### Deprecated

Use MultipleChoices, the RFC 9110 name for status 300.

***

### BadGateway

> **BadGateway**: `502`

***

### BadRequest

> **BadRequest**: `400`

***

### Conflict

> **Conflict**: `409`

***

### ContentDifferent

> **ContentDifferent**: `210`

***

### ContentTooLarge

> **ContentTooLarge**: `413`

413 Content Too Large.

#### See

https://www.rfc-editor.org/rfc/rfc9110.html#section-15.5.14

***

### Continue

> **Continue**: `100`

***

### Created

> **Created**: `201`

***

### EarlyHints

> **EarlyHints**: `103`

***

### ExpectationFailed

> **ExpectationFailed**: `417`

***

### FailedDependency

> **FailedDependency**: `424`

***

### Forbidden

> **Forbidden**: `403`

***

### Found

> **Found**: `302`

***

### GatewayTimeout

> **GatewayTimeout**: `504`

***

### Gone

> **Gone**: `410`

***

### HttpVersionNotSupported

> **HttpVersionNotSupported**: `505`

***

### ~~IAmATeapot~~

> **IAmATeapot**: `418`

#### Deprecated

RFC 9110 reserves status 418 as unused.

***

### InsufficientStorage

> **InsufficientStorage**: `507`

***

### InternalServerError

> **InternalServerError**: `500`

***

### LengthRequired

> **LengthRequired**: `411`

***

### Locked

> **Locked**: `423`

***

### LoopDetected

> **LoopDetected**: `508`

***

### MethodNotAllowed

> **MethodNotAllowed**: `405`

***

### ~~Misdirected~~

> **Misdirected**: `421`

#### Deprecated

Use MisdirectedRequest.

***

### MisdirectedRequest

> **MisdirectedRequest**: `421`

421 Misdirected Request.

#### See

https://www.rfc-editor.org/rfc/rfc9110.html#section-15.5.20

***

### MovedPermanently

> **MovedPermanently**: `301`

***

### MultipleChoices

> **MultipleChoices**: `300`

300 Multiple Choices.

#### See

https://www.rfc-editor.org/rfc/rfc9110.html#section-15.4.1

***

### MultiStatus

> **MultiStatus**: `207`

***

### NoContent

> **NoContent**: `204`

***

### NonAuthoritativeInformation

> **NonAuthoritativeInformation**: `203`

***

### NotAcceptable

> **NotAcceptable**: `406`

***

### NotFound

> **NotFound**: `404`

***

### NotImplemented

> **NotImplemented**: `501`

***

### NotModified

> **NotModified**: `304`

***

### Ok

> **Ok**: `200`

***

### PartialContent

> **PartialContent**: `206`

***

### ~~PayloadTooLarge~~

> **PayloadTooLarge**: `413`

#### Deprecated

RFC 9110 calls status 413 Content Too Large. Use ContentTooLarge.

***

### PaymentRequired

> **PaymentRequired**: `402`

***

### PermanentRedirect

> **PermanentRedirect**: `308`

***

### PreconditionFailed

> **PreconditionFailed**: `412`

***

### PreconditionRequired

> **PreconditionRequired**: `428`

***

### Processing

> **Processing**: `102`

***

### ProxyAuthenticationRequired

> **ProxyAuthenticationRequired**: `407`

***

### RangeNotSatisfiable

> **RangeNotSatisfiable**: `416`

416 Range Not Satisfiable.

#### See

https://www.rfc-editor.org/rfc/rfc9110.html#section-15.5.17

***

### ~~RequestedRangeNotSatisfiable~~

> **RequestedRangeNotSatisfiable**: `416`

#### Deprecated

RFC 9110 calls status 416 Range Not Satisfiable. Use RangeNotSatisfiable.

***

### RequestTimeout

> **RequestTimeout**: `408`

***

### ResetContent

> **ResetContent**: `205`

***

### SeeOther

> **SeeOther**: `303`

***

### ServiceUnavailable

> **ServiceUnavailable**: `503`

***

### SwitchingProtocols

> **SwitchingProtocols**: `101`

***

### TemporaryRedirect

> **TemporaryRedirect**: `307`

***

### TooManyRequests

> **TooManyRequests**: `429`

***

### Unauthorized

> **Unauthorized**: `401`

***

### UnprocessableContent

> **UnprocessableContent**: `422`

422 Unprocessable Content.

#### See

https://www.rfc-editor.org/rfc/rfc9110.html#section-15.5.21

***

### ~~UnprocessableEntity~~

> **UnprocessableEntity**: `422`

#### Deprecated

RFC 9110 calls status 422 Unprocessable Content. Use UnprocessableContent.

***

### UnrecoverableError

> **UnrecoverableError**: `456`

***

### UnsupportedMediaType

> **UnsupportedMediaType**: `415`

***

### Unused

> **Unused**: `418`

418 (Unused), reserved by RFC 9110.

#### See

https://www.rfc-editor.org/rfc/rfc9110.html#section-15.5.19

***

### UriTooLong

> **UriTooLong**: `414`
