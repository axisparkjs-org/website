# Function: toReadable()

> **toReadable**(`stream`): `Readable`

Converts a readable stream to a `Readable` of Node.js, wrapping the streams of the old API.

## Parameters

### stream

`ReadableStream`

The stream to convert.

## Returns

`Readable`

The same stream when it is already a `Readable`, or a `Readable` that wraps it.
