# Function: waitForFirstChunk()

> **waitForFirstChunk**(`stream`): `Promise`\<`void`\>

Waits until a stream has its first chunk of data, or ends, without consuming the data. A stream that fails before sending any data rejects, so the error can still be answered with a status code.

## Parameters

### stream

`Readable`

The stream to wait for.

## Returns

`Promise`\<`void`\>

A promise that resolves when the first chunk is available or the stream ends, and rejects with the error of the stream.
